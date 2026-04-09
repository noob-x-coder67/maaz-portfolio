import { motion as Motion } from "framer-motion";
import { HiDownload, HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { experience, education } from "../data/projects";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gray-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the designs
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-amber-400/20 overflow-hidden">
                <img
                  src="/images/my_pic.jpeg"
                  alt="Hafiz Muhammad Maaz"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
              <Motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm"
              >
                5+ YRS
              </Motion.div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Hafiz Muhammad Maaz
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate graphic designer and final-year BS Software
              Engineering student based in Islamabad, Pakistan. With 5+ years of
              experience, I've worked with NGOs, restaurants, corporate
              organizations, and YouTube creators across Pakistan.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My toolkit spans Adobe Photoshop, Illustrator, Dimension, Premiere
              Pro, After Effects, Figma, Canva, and CorelDRAW — covering
              everything from logos and brand identities to YouTube thumbnails,
              print design, and UI/UX.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Experience", value: "5+ Years" },
                { label: "Projects", value: "100+" },
                { label: "Clients", value: "50+" },
                { label: "Satisfaction", value: "100%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
          </Motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-8">
              <HiBriefcase className="text-primary" size={22} />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-8">
              <HiAcademicCap className="text-primary" size={22} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6 border-l-2 border-amber-400/40"
                >
                  <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                    {edu.period}
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.institution} — {edu.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
