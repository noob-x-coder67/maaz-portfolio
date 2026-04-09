import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion as Motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect as useEff } from "react";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.75 bg-primary origin-left z-100"
    />
  );
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible] = useState(
    () => typeof window !== "undefined" && !("ontouchstart" in window),
  );

  useEff(() => {
    if (!visible) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, .card, [role='button']")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setHovering(true));
          el.addEventListener("mouseleave", () => setHovering(false));
        });
    };
    attachHover();
    const obs = new MutationObserver(attachHover);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", move);
      obs.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <Motion.div
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary z-9999 pointer-events-none mix-blend-difference"
      />
      <Motion.div
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          opacity: hovering ? 0.15 : 0.1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
        className="fixed top-0 left-0 rounded-full border-2 border-primary z-9998 pointer-events-none"
      />
    </>
  );
}
