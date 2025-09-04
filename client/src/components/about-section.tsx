import { type ProducerInfo } from "@shared/schema";

interface AboutSectionProps {
  producer?: ProducerInfo;
}

export default function AboutSection({ producer }: AboutSectionProps) {
  if (!producer) {
    return (
      <section id="about" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Producer information is currently unavailable.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">About Marcus</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p data-testid="text-producer-bio">
                {producer.bio}
              </p>
              
              <p>
                I believe in the power of authentic storytelling to create meaningful change. Each documentary I produce is carefully crafted to not just inform, but to inspire action and foster deeper understanding of complex global issues.
              </p>
              
              <p>
                My films have been featured at major international film festivals and have received recognition from organizations including the Environmental Media Association and the International Documentary Association.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground" data-testid="text-experience">
                  {producer.experience}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Documentaries</h4>
                <p className="text-muted-foreground" data-testid="text-documentaries-count">
                  {producer.documentariesCount}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Awards</h4>
                <p className="text-muted-foreground" data-testid="text-awards-count">
                  {producer.awardsCount}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Countries</h4>
                <p className="text-muted-foreground" data-testid="text-countries-count">
                  {producer.countriesCount}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Perrine Keramphele filming documentary"
              className="rounded-2xl shadow-xl w-full"
              data-testid="img-about-main"
            />
            
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Documentary equipment"
                className="rounded-xl"
                data-testid="img-about-equipment"
              />
              
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Interview setup"
                className="rounded-xl"
                data-testid="img-about-interview"
              />
              
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Film festival screening"
                className="rounded-xl"
                data-testid="img-about-festival"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
