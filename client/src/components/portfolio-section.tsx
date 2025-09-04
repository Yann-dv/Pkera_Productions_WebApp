import { useState } from "react";
import { type Documentary } from "@shared/schema";
import ProjectCard from "./project-card";

interface PortfolioSectionProps {
  documentaries: Documentary[];
}

export default function PortfolioSection({ documentaries }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { key: "all", label: "All" },
    { key: "social-issues", label: "Social Issues" },
    { key: "environment", label: "Environment" },
    { key: "technology", label: "Technology" },
    { key: "culture", label: "Culture" },
  ];

  const filteredDocumentaries = selectedCategory === "all" 
    ? documentaries 
    : documentaries.filter(doc => doc.category === selectedCategory);

  const visibleDocumentaries = filteredDocumentaries.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of documentaries that challenge perspectives and inspire change.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  setSelectedCategory(category.key);
                  setVisibleCount(6);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.key
                    ? "bg-primary text-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-foreground"
                }`}
                data-testid={`filter-${category.key}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {filteredDocumentaries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No documentaries found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleDocumentaries.map((documentary) => (
                <ProjectCard key={documentary.id} documentary={documentary} />
              ))}
            </div>
            
            {visibleCount < filteredDocumentaries.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  className="inline-flex items-center bg-primary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="button-load-more"
                >
                  Load More Projects
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
