import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa";
import { socialLinks, contactInfo } from "../data/projects";

const whatsappMessage = encodeURIComponent(
  "Hi Maaz, I found you through your portfolio website and want to discuss a project. (Source: Portfolio Website)",
);
const whatsappHref = `https://wa.me/92${contactInfo.phone.replace(/^0/, "")}?text=${whatsappMessage}`;

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: FaWhatsapp, href: whatsappHref, label: "WhatsApp" },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              <span className="text-primary">M</span>aaz
            </h3>
            <p className="text-sm leading-relaxed">
              Graphic Designer based in Islamabad, Pakistan — crafting visual
              experiences for brands, NGOs, restaurants & creators.
            </p>
            <p className="text-sm mt-2 text-gray-500">{contactInfo.email}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Hafiz Muhammad Maaz. All rights
            reserved. Made with{" "}
            <FaHeart className="inline text-red-500 mx-1" size={12} /> and
            creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
