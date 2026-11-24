import { useState } from "react";
import { motion as Motion, useReducedMotion, useSpring } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi";
import { Link } from "react-router-dom";
import { contactInfo, projects } from "../data/projects";
import "./Hero.css";

const phoneDigits = contactInfo.phone.replace(/\D/g, "");
const whatsappNumber = phoneDigits.startsWith("92")
  ? phoneDigits
  : `92${phoneDigits.replace(/^0/, "")}`;
const whatsappMessage = encodeURIComponent(
  "Hi Maaz, I found your portfolio and would like to discuss a design project.",
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const featured = [
  {
    id: 4,
    label: "Branding",
    width: 1280,
    height: 819,
    alt: "Sidra Warriach’s monogram and wordmark embossed on textured paper",
  },
  {
    id: 14,
    label: "Digital",
    width: 1080,
    height: 1080,
    alt: "NexaCore Cloud AI launch graphic in blue and white",
  },
  {
    id: 18,
    label: "Print",
    width: 1080,
    height: 1528,
    alt: "Melio Cafe’s black and yellow menu with food photography",
  },
].map(({ id, ...artwork }) => ({
  ...projects.find((project) => project.id === id),
  ...artwork,
}));

const pointerSettings = { stiffness: 150, damping: 25 };
const depthRoles = ["front", "left", "right"];

function ArtworkShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, pointerSettings);
  const rotateY = useSpring(0, pointerSettings);

  function resetPerspective() {
    rotateX.set(0);
    rotateY.set(0);
  }

  function followPointer(event) {
    if (
      paused ||
      reduceMotion ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(min-width: 54rem) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches
    ) {
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    rotateX.set((0.5 - (event.clientY - top) / height) * 3);
    rotateY.set(((event.clientX - left) / width - 0.5) * 4);
  }

  return (
    <section className="hero-showcase" aria-labelledby="hero-showcase-title" data-paused={paused}>
      <div className="hero-showcase-header">
        <h2 id="hero-showcase-title">Featured work</h2>
        <button
          type="button"
          className="hero-motion-toggle"
          aria-label={paused ? "Resume artwork motion" : "Pause artwork motion"}
          onClick={() => {
            resetPerspective();
            setPaused(!paused);
          }}
        >
          {paused ? <HiOutlinePlay aria-hidden="true" /> : <HiOutlinePause aria-hidden="true" />}
        </button>
      </div>

      <div
        className="hero-stage"
        onPointerMove={followPointer}
        onPointerLeave={resetPerspective}
        onPointerCancel={resetPerspective}
      >
        <Motion.div className="hero-stack" style={{ rotateX, rotateY }}>
          {featured.map((project, index) => (
            <div
              className="hero-artwork"
              key={project.id}
              data-depth={depthRoles[(index - active + featured.length) % featured.length]}
              style={{ "--art-ratio": project.width / project.height }}
            >
              <Link to={`/project/${project.id}`} aria-label={`View project: ${project.title}`}>
                <img
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </Link>
            </div>
          ))}
        </Motion.div>
      </div>

      <div className="hero-showcase-footer">
        <p className="hero-project-title" aria-live="polite" aria-atomic="true">
          {featured[active].title}
        </p>
        <div className="hero-project-controls" role="group" aria-label="Choose featured artwork">
          {featured.map((project, index) => (
            <button
              type="button"
              key={project.id}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {project.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="home" className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <p className="home-hero-eyebrow">MAAZ · GRAPHIC DESIGNER · ISLAMABAD</p>
          <h1 id="home-hero-title">
            Branding, Print <span>&amp; Digital Design</span>
          </h1>
          <p className="home-hero-description">
            I design visual identities, print materials, and campaign graphics for
            businesses, nonprofits, and creators.
          </p>
          <div className="home-hero-actions">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              <FaWhatsapp aria-hidden="true" /> Discuss Your Project
            </a>
            <a href="#portfolio" className="btn-outline justify-center">
              View My Work
            </a>
          </div>
        </div>

        <ArtworkShowcase />
      </div>
    </section>
  );
}
