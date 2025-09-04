import { type ProducerInfo } from "@shared/schema";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";

interface FooterProps {
  producer?: ProducerInfo;
}

export default function Footer({ producer }: FooterProps) {
  const socialLinks = producer?.socialLinks ? JSON.parse(producer.socialLinks) : {};

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4" data-testid="text-footer-name">
              {producer?.name || "Perrine Keramphele"}
            </h3>
            <p className="text-gray-300 mb-6 max-w-md" data-testid="text-footer-description">
              Documentary producer dedicated to amplifying important voices and creating meaningful change through powerful storytelling.
            </p>
            
            <div className="flex space-x-4">
              <a
                href={socialLinks.instagram || "#"}
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.tiktok || "#"}
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-tiktok"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin || "#"}
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.youtube || "#"}
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.twitter || "#"}
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><span className="text-gray-400">Social Issues</span></li>
              <li><span className="text-gray-400">Environment</span></li>
              <li><span className="text-gray-400">Technology</span></li>
              <li><span className="text-gray-400">Culture</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Perrine Keramphele. All rights reserved. | Designed for impactful storytelling.</p>
        </div>
      </div>
    </footer>
  );
}
