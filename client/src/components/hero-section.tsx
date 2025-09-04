import { type ProducerInfo } from "@shared/schema";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";

interface HeroSectionProps {
  producer?: ProducerInfo;
}

export default function HeroSection({ producer }: HeroSectionProps) {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = producer?.socialLinks ? JSON.parse(producer.socialLinks) : {};

  return (
    <section id="home" className="hero-gradient pt-20 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Crafting Stories That
              <span className="text-primary"> Matter</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
              Dcumentary producer with 5+ years of experience bringing untold stories to life through compelling visual narratives.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToPortfolio}
                className="bg-primary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="button-view-portfolio"
              >
                View Portfolio
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-foreground transition-colors"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex space-x-6">
              <a
                href={socialLinks.instagram || "#"}
                className="social-icon text-gray-300 hover:text-primary text-2xl"
                data-testid="link-social-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href={socialLinks.tiktok || "#"}
                className="social-icon text-gray-300 hover:text-primary text-2xl"
                data-testid="link-social-tiktok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok />
              </a>
              <a
                href={socialLinks.linkedin || "#"}
                className="social-icon text-gray-300 hover:text-primary text-2xl"
                data-testid="link-social-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href={socialLinks.youtube || "#"}
                className="social-icon text-gray-300 hover:text-primary text-2xl"
                data-testid="link-social-youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
              <a
                href={socialLinks.twitter || "#"}
                className="social-icon text-gray-300 hover:text-primary text-2xl"
                data-testid="link-social-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/images/hero-portrait.jpg"
              alt="Perrine Keramphele - Documentary Producer"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-hero-portrait"
            />
            
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="text-years-experience">
                  {producer?.experience || "15+"}
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="text-awards-count">
                  1
                </div>
                <div className="text-sm text-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
