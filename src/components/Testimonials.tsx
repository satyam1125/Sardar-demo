import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Dahiyawan",
    rating: 5,
    text: "Excellent quality furniture and great service! The team helped customize our living room set perfectly. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    location: "Lucknow",
    rating: 5,
    text: "Beautiful craftsmanship and attention to detail. Got our entire bedroom set from here and couldn't be happier!",
  },
  {
    name: "Amit Verma",
    location: "Kanpur",
    rating: 5,
    text: "Professional service and quality products. The office furniture we ordered is exactly what we needed. Great experience!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real customers who transformed their spaces with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="font-inter text-card-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-poppins font-semibold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="font-inter text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
