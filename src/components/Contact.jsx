import { useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
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

const contactItems = [
  {
    icon: HiMail,
    label: "Email",
    text: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    text: contactInfo.location,
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // EmailJS — replace IDs when you create your account at emailjs.com
      await emailjs.send(
        "service_4pz18ac", // e.g. service_xxxx
        "template_089lf6g", // e.g. template_xxxx
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: contactInfo.email,
        },
        "qJvy-mf1bic30sDfk", // e.g. abcXXXXXXXXX
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Fallback: open mailto
      window.open(
        `mailto:${contactInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        )}`,
      );
      setStatus("success");
    }
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's create something amazing together.
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's discuss your project
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              I'm open to freelance projects, collaborations, and full-time
              opportunities. Drop me a message by email, WhatsApp, or Instagram.
            </p>

            <div className="space-y-6 mb-8">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900 dark:text-white">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </Motion.div>

          {/* Form */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card p-8 space-y-5">
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Hafiz Muhammad Maaz",
                },
                {
                  id: "email",
                  label: "Your Email",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  placeholder: "Logo Design Project",
                },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    value={form[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "success"
                    ? "✓ Message Sent!"
                    : status === "error"
                      ? "Failed — try email directly"
                      : "Send Message"}
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
