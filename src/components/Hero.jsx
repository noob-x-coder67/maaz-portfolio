import { motion as Motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { socialLinks, contactInfo } from "../data/projects";

const whatsappMessage = encodeURIComponent(
  "Hi Maaz, I found you through your portfolio website and want to discuss a project. (Source: Portfolio Website)",
);
const whatsappHref = `https://wa.me/92${contactInfo.phone.replace(/^0/, "")}?text=${whatsappMessage}`;

const socials = [
  { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: FaWhatsapp, href: whatsappHref, label: "WhatsApp" },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: "LinkedIn" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-dark dark:via-dark dark:to-indigo-950"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10"
        />
        <Motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-400/5 dark:bg-amber-400/10"
        />
        <Motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-20 h-20 rounded-2xl bg-primary/10 rotate-45"
        />
        <Motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-amber-400/10"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm"
        >
          Welcome to my portfolio
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold font-heading text-gray-900 dark:text-white mb-6"
        >
          Hello, I'm <span className="text-primary">Maaz</span>
        </Motion.h1>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-11"
        >
          <TypeAnimation
            sequence={[
              "Graphic Designer",
              2000,
              "Logo Designer",
              2000,
              "Brand Identity Expert",
              2000,
              "YouTube Thumbnail Designer",
              2000,
              "UI/UX Designer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </Motion.div>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          5+ years creating logos, branding, posters, and digital experiences
          for NGOs, restaurants, corporates & YouTube creators — based in
          Islamabad, Pakistan.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#portfolio" className="btn-primary">
            View Portfolio
          </a>
          <a href="#contact" className="btn-outline">
            Hire Me
          </a>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-5"
        >
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </Motion.div>
      </div>

      <Motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-10 text-gray-400 dark:text-gray-500"
        aria-label="Scroll down"
      >
        <HiArrowDown size={24} />
      </Motion.a>
    </section>
  );
}
