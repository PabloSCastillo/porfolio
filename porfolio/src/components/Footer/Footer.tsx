import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>; // fuerza compatibilidad con JSX

interface SocialLink {
  href: string;
  Icon: IconComponent;
  label: string;
}

const socials: SocialLink[] = [
  { href: "https://github.com/PabloSCastillo", Icon: FaGithub as IconComponent, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pabloscastillo", Icon: FaLinkedin as IconComponent, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 w-full">
      <div className="container mx-auto flex flex-col md:flex-row xl:flex-row  items-center px-6">
        {/* Marca personal */}
        {/*<div className="text-sm font-semibold mb-4 md:mb-0 text-white">
          © {new Date().getFullYear()} Paul Castle
        </div>*/}

        {/* Redes sociales */}
        <div className="flex space-x-6 text-4xl">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
