import { type Documentary } from "@shared/schema";
import { Play } from "lucide-react";

interface FeaturedWorkProps {
  featured?: Documentary;
}

export default function FeaturedWork({ featured }: FeaturedWorkProps) {
  if (!featured) {
    return (
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">No featured documentary available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Featured Documentary</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My latest work exploring the intersection of technology and human connection in modern society.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img
              src={featured.imageUrl}
              alt={`${featured.title} Documentary Scene`}
              className="rounded-2xl shadow-xl w-full"
              data-testid={`img-featured-${featured.id}`}
            />
            
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="bg-primary text-foreground p-4 rounded-full text-2xl hover:scale-110 transition-transform"
                onClick={() => window.open(featured.trailerUrl || "#", "_blank")}
                data-testid="button-play-trailer"
              >
                <Play />
              </button>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <span className="bg-primary text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Latest Release
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6" data-testid={`text-title-${featured.id}`}>
              {featured.title}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid={`text-description-${featured.id}`}>
              {featured.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Release Date</h4>
                <p className="text-muted-foreground" data-testid={`text-year-${featured.id}`}>
                  {featured.year}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Runtime</h4>
                <p className="text-muted-foreground" data-testid={`text-runtime-${featured.id}`}>
                  {featured.runtime || "90 minutes"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Awards</h4>
                <p className="text-muted-foreground" data-testid={`text-awards-${featured.id}`}>
                  {featured.awards || "N/A"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Platform</h4>
                <p className="text-muted-foreground" data-testid={`text-platforms-${featured.id}`}>
                  {featured.platforms || "Coming Soon"}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => window.open(featured.trailerUrl || "#", "_blank")}
                className="bg-primary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="button-watch-trailer"
              >
                Watch Trailer
              </button>
              <button
                onClick={() => window.open(featured.fullDocUrl || "#", "_blank")}
                className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                data-testid="button-view-full-documentary"
              >
                View Full Documentary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
