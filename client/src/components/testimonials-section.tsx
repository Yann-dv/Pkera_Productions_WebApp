import { type Testimonial } from "@shared/schema";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const renderStars = (rating: string) => {
    const numStars = parseInt(rating);
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < numStars ? "text-primary fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feedback from collaborators, subjects, and industry professionals.
          </p>
        </div>
        
        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No testimonials available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-8 rounded-2xl shadow-lg"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="mb-6">
                  <div className="flex mb-4" data-testid={`rating-${testimonial.id}`}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground italic" data-testid={`text-testimonial-${testimonial.id}`}>
                    "{testimonial.testimonial}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid={`img-avatar-${testimonial.id}`}
                  />
                  <div>
                    <h4 className="font-semibold" data-testid={`text-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`text-role-${testimonial.id}`}>
                      {testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
