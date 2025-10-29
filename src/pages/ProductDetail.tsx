import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Truck, Shield } from "lucide-react";
import livingImage from "@/assets/category-living.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data
  const product = {
    id: parseInt(id || "1"),
    name: "Luxe Leather Sofa Set",
    price: 89999,
    image: livingImage,
    category: "Living Room",
    description: "Experience ultimate comfort with our premium leather sofa set. Handcrafted with the finest materials, this elegant piece combines timeless design with modern comfort. Perfect for your living room, it features plush cushioning, durable construction, and a sophisticated walnut brown finish.",
    specifications: {
      material: "Premium Genuine Leather",
      dimensions: "220cm x 90cm x 85cm",
      color: "Walnut Brown / Cream",
      finish: "Matte Leather with Wooden Frame",
      warranty: "5 Years on Frame, 2 Years on Upholstery",
    },
    features: [
      "Handcrafted wooden frame",
      "Premium leather upholstery",
      "High-density foam cushions",
      "Removable cushion covers",
      "Assembly service included",
      "Customization available",
    ],
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      <main className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                {product.category}
              </Badge>
              
              <h1 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="font-poppins text-3xl font-bold text-primary mb-6">
                ₹{product.price.toLocaleString('en-IN')}
              </p>

              <p className="font-inter text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 font-inter text-sm">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-8 p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">
                  Specifications
                </h3>
                <dl className="space-y-3 font-inter text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-border pb-2">
                      <dt className="font-medium text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="text-foreground text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <Package className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="font-inter text-xs text-muted-foreground">Easy Assembly</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <Truck className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="font-inter text-xs text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="font-inter text-xs text-muted-foreground">5 Year Warranty</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="font-poppins text-xl font-semibold text-card-foreground mb-4">
                  Interested? Book Now
                </h3>
                <ContactForm productName={product.name} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
