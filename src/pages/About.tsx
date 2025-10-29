import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackButton from "@/components/BackButton";
import { CheckCircle2 } from "lucide-react";
import customImage from "@/assets/category-custom.jpg";

const About = () => {
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every piece is handcrafted with attention to detail and quality materials.",
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We go the extra mile to ensure satisfaction.",
    },
    {
      title: "Affordable Luxury",
      description: "Premium furniture at prices that don't break the bank.",
    },
    {
      title: "Customization",
      description: "Personalize your furniture to match your unique style and needs.",
    },
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />

      <main className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <BackButton />

          {/* Header */}
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              About Sardar Furniture
            </h1>
            <p className="font-inter text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Your trusted partner for quality furniture in Dahiyawan, Uttar Pradesh. 
              Where tradition meets modern design.
            </p>
          </div>

          {/* Story Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img
                  src={customImage}
                  alt="Craftsmanship at Sardar Furniture"
                  className="rounded-lg shadow-elegant w-full"
                />
              </div>
              
              <div className="animate-fade-in">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                  <p>
                    Sardar Furniture has been a trusted name in Dahiyawan for years, serving families 
                    and businesses with premium, handcrafted furniture. What started as a small workshop 
                    has grown into a beloved local brand known for quality and service.
                  </p>
                  <p>
                    We believe that furniture is more than just function—it's about creating spaces where 
                    memories are made. Whether it's a cozy living room sofa, an elegant dining set, or a 
                    productive office desk, every piece we craft carries our commitment to excellence.
                  </p>
                  <p>
                    Our team of skilled craftsmen combines traditional woodworking techniques with modern 
                    design sensibilities. We source the finest materials and pay meticulous attention to 
                    detail, ensuring that every piece meets our high standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Sardar Furniture?
              </h2>
              <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
                What sets us apart in the furniture industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-poppins text-xl font-semibold text-card-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="font-inter text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission */}
          <section className="py-16 md:py-24 bg-background">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
                To provide every home and office in our community with beautiful, durable, and 
                affordable furniture that enhances their spaces and improves their daily lives. 
                We're committed to maintaining the highest standards of craftsmanship while 
                offering personalized service that makes every customer feel valued.
              </p>
              <div className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-elegant">
                <p className="font-poppins text-2xl font-bold">Comfort. Craft. Class.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
