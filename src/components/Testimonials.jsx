import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { testimonials } from "../data/projects";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-white dark:bg-dark">
      <div className="max-w-4xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gray-900 dark:text-white">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What my clients say about working with me
          </p>
        </Motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <Motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="card p-8 md:p-12 text-center"
            >
              <FaQuoteLeft className="text-primary/20 text-4xl mx-auto mb-6" />
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <FaStar key={i} className="text-amber-400" size={18} />
                  ),
                )}
              </div>
              <img
                src={testimonials[current].photo}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face";
                }}
              />
              <h4 className="font-bold text-gray-900 dark:text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[current].role}
              </p>
            </Motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "w-2.5 bg-gray-300 dark:bg-gray-600"}`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
