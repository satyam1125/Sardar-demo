import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Sardar Furnishings</h3>
            <p className="font-inter text-sm text-muted-foreground mb-4">
              Crafting quality furniture since 1995. Your comfort is our priority.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/shop" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>info@sardarfurnishings.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/N636WPiQmfJJu9Ye9?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                   Dahiyawan, Prayagraj, India
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-inter text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sardar Furnishings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
