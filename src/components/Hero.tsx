import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-showroom.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant furniture showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-primary-foreground animate-fade-in">
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Home with Timeless Furniture
          </h1>
          <p className="font-inter text-lg md:text-xl mb-8 text-primary-foreground/90">
            Discover handcrafted elegance and personalized comfort. From living rooms to offices, 
            we bring you premium furniture with a local touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant"
            >
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm"
            >
              <Link to="/contact">Book a Visit</Link>
            </Button>
          </div>
          
          {/* Location Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
            <span className="text-sm font-inter">📍 Dahiyawan, Uttar Pradesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
