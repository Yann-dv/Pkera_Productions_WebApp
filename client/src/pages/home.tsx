import { useQuery } from "@tanstack/react-query";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import FeaturedWork from "../components/featured-work";
import PortfolioSection from "../components/portfolio-section";
import AboutSection from "../components/about-section";
import TestimonialsSection from "../components/testimonials-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import { type Documentary, type Testimonial, type ProducerInfo } from "@shared/schema";

export default function Home() {
  const { data: documentaries, isLoading: docsLoading } = useQuery<Documentary[]>({
    queryKey: ["/data/documentaries.json"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}data/documentaries.json`);
      if (!response.ok) throw new Error("Failed to fetch documentaries");
      return response.json();
    },
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/data/testimonials.json"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}data/testimonials.json`);
      if (!response.ok) throw new Error("Failed to fetch testimonials");
      return response.json();
    },
  });

  const { data: producer, isLoading: producerLoading } = useQuery<ProducerInfo>({
    queryKey: ["/data/producer.json"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}data/producer.json`);
      if (!response.ok) throw new Error("Failed to fetch producer info");
      return response.json();
    },
  });

  const { data: featured, isLoading: featuredLoading } = useQuery<Documentary>({
    queryKey: ["/data/documentaries.json", "featured"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}data/documentaries.json`);
      if (!response.ok) throw new Error("Failed to fetch documentaries");
      const documentaries: Documentary[] = await response.json();
      return documentaries.find(doc => doc.status === "featured") || documentaries[0];
    },
  });

  if (docsLoading || testimonialsLoading || producerLoading || featuredLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <title>Perrine Keramphele - Documentary Producer | Storyteller</title>
      <meta name="description" content="Perrine Keramphele is a documentary producer with 5+ years of experience. Explore her portfolio of powerful documentaries on social issues, environment, and technology." />
      
      <Navigation />
      <HeroSection producer={producer} />
      <FeaturedWork featured={featured} />
      <PortfolioSection documentaries={documentaries || []} />
      <AboutSection producer={producer} />
      <TestimonialsSection testimonials={testimonials || []} />
      <ContactSection producer={producer} />
      <Footer producer={producer} />
    </>
  );
}
