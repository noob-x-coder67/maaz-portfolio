import { motion as Motion } from "framer-motion";
import { services } from "../data/projects";
import {
  MdBrush,
  MdPalette,
  MdPhoneIphone,
  MdImage,
  MdDevices,
  MdPrint,
} from "react-icons/md";

const iconMap = {
  MdBrush,
  MdPalette,
  MdPhoneIphone,
  MdImage,
  MdDevices,
  MdPrint,
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gray-50 dark:bg-dark-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gray-900 dark:text-white">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle">
            Professional design services tailored to your needs
          </p>
        </Motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="card p-8 group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300 text-primary group-hover:text-white">
                  {Icon && <Icon size={26} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
