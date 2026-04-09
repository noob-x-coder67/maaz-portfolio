import { motion as Motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Divider = ({ variant = "dots" }) => {
  if (variant === "wave") {
    return (
      <div className="flex justify-center py-6 overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          className="w-full max-w-md h-8 text-primary/15"
        >
          <Motion.path
            d="M0,20 Q150,0 300,20 Q450,40 600,20 Q750,0 900,20 Q1050,40 1200,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
      </div>
    );
  }
  if (variant === "line") {
    return (
      <div className="flex justify-center py-8">
        <Motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-0.5 bg-primary/20 rounded-full"
        />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center gap-3 py-8">
      {[0, 1, 2].map((n) => (
        <Motion.div
          key={n}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: n * 0.2,
            ease: "easeInOut",
          }}
          className="w-2 h-2 rounded-full bg-primary/30"
        />
      ))}
    </div>
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  return (
    <Motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Divider variant="wave" />
      <About />
      <Divider />
      <Portfolio />
      <Divider variant="line" />
      <Skills />
      <Divider />
      <Services />
      <Divider variant="wave" />
      <Testimonials />
      <Divider variant="line" />
      <Contact />
    </Motion.div>
  );
}
