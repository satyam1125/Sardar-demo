import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BackButton from "@/components/BackButton";

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="font-inter text-lg md:text-xl text-primary-foreground/90">
              Visit our showroom or reach out to us. We&apos;re here to help you
              find the perfect furniture.
            </p>
          </div>

          {/* Contact Info & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="font-poppins text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      Dahiyawan, Uttar Pradesh
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+919876543210"
                      className="font-inter text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@sardarfurniture.com"
                      className="font-inter text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@sardarfurniture.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <h3 className="font-poppins text-xl font-semibold text-foreground">
                    Store Hours
                  </h3>
                </div>
                <div className="space-y-3 font-inter">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Saturday
                    </span>
                    <span className="font-medium text-foreground">
                      10:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">
                      11:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h2 className="font-poppins text-2xl font-bold text-card-foreground mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us on the Map
            </h2>
            <p className="font-inter text-muted-foreground text-lg">
              Visit our showroom in Dahiyawan, Uttar Pradesh
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.123456789!2d77.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sardar Furniture Location"
            />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
