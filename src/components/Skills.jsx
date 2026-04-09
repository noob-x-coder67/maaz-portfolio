import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { skills } from "../data/projects";
import {
  MdBrush,
  MdViewInAr,
  MdPhotoCamera,
  MdMovieEdit,
  MdDevices,
} from "react-icons/md";
import { FaFont } from "react-icons/fa";

// Use MD/FA icons that definitely exist in react-icons v5
const iconMap = {
  SiAdobephotoshop: MdPhotoCamera,
  SiAdobeillustrator: MdBrush,
  SiAdobepremierepro: MdMovieEdit,
  SiAdobeaftereffects: MdMovieEdit,
  SiFigma: MdDevices,
  SiCanva: FaFont,
  MdPhotoCamera: MdPhotoCamera,
  MdMovieEdit: MdMovieEdit,
  MdDevices: MdDevices,
  FaFont: FaFont,
  MdBrush: MdBrush,
  MdViewInAr: MdViewInAr,
};

export default function Skills() {
  const [brokenLogos, setBrokenLogos] = useState({});

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gray-900 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle">
            Professional tools I use to bring your vision to life
          </p>
        </Motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || MdBrush;
            const showImage = Boolean(skill.logo) && !brokenLogos[skill.name];
            return (
              <Motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="card p-6 text-center group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                  {showImage ? (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                      onError={() =>
                        setBrokenLogos((prev) => ({
                          ...prev,
                          [skill.name]: true,
                        }))
                      }
                    />
                  ) : (
                    <Icon size={28} />
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                  <Motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1 + 0.3,
                      duration: 1,
                      ease: "easeOut",
                    }}
                    className="h-2 rounded-full bg-linear-to-r from-primary to-indigo-500"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.level}%
                </p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
