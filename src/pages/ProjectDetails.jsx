import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [portraitByImage, setPortraitByImage] = useState({});

  const setOrientation = (key) => (e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (!naturalWidth || !naturalHeight) return;
    const isPortrait = naturalHeight / naturalWidth > 1.15;
    setPortraitByImage((prev) =>
      prev[key] === isPortrait ? prev : { ...prev, [key]: isPortrait },
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-dark">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Project not found
        </h2>
        <Link to="/" className="btn-primary">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 bg-white dark:bg-dark">
      <div className="max-w-4xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary mb-8 transition-colors"
          >
            <HiArrowLeft /> Back to Portfolio
          </Link>

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {project.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          {project.client && (
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Client:{" "}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {project.client}
              </span>
            </p>
          )}

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-10 relative">
            <Motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.3,
              }}
              className="absolute inset-0 bg-primary z-10"
            />
            <Motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              src={project.images[0]}
              alt={project.title}
              onLoad={setOrientation(`hero-${project.id}`)}
              className={`mx-auto ${
                portraitByImage[`hero-${project.id}`]
                  ? "w-auto max-w-full max-h-[78vh] object-contain bg-gray-50 dark:bg-gray-900/40"
                  : "w-full h-auto object-cover"
              }`}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop";
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                About this project
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Process
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.process}
              </p>
            </div>
          </div>

          {project.images.length > 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                More from this project
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.images.slice(1).map((img, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl overflow-hidden ${
                      portraitByImage[`gallery-${project.id}-${i}`]
                        ? "bg-gray-50 dark:bg-gray-900/40 p-2"
                        : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${i + 2}`}
                      onLoad={setOrientation(`gallery-${project.id}-${i}`)}
                      className={`mx-auto ${
                        portraitByImage[`gallery-${project.id}-${i}`]
                          ? "w-auto max-w-full max-h-[65vh] object-contain"
                          : "w-full h-auto object-cover"
                      }`}
                      loading="lazy"
                    />
                  </Motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link to="/" className="btn-primary">
              <HiArrowLeft /> Back to Portfolio
            </Link>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
