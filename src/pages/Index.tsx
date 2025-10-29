import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <Testimonials />
        
        {/* Google Maps Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visit Our Showroom
              </h2>
              <p className="font-inter text-muted-foreground text-lg">
                Experience our furniture in person at Dahiyawan, Uttar Pradesh
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.0449817890956!2d81.74256921501487!3d25.6382125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ac599c3540761%3A0x8028bc3fe0e1c86!2ssardar%20furniture!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sardar Furniture Location"
              />
            </div>
            
            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/place/sardar+furniture/@25.6382125,81.7451719,17z/data=!3m1!4b1!4m6!3m5!1s0x399ac599c3540761:0x8028bc3fe0e1c86!8m2!3d25.6382125!4d81.7451719!16s%2Fg%2F11gdknmkcg?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
