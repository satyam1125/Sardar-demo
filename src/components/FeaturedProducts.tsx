import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import livingImage from "@/assets/category-living.jpg";
import bedroomImage from "@/assets/category-bedroom.jpg";
import diningImage from "@/assets/category-dining.jpg";
import officeImage from "@/assets/category-office.jpg";

const products = [
  {
    id: 1,
    name: "Luxe Leather Sofa Set",
    price: "₹89,999",
    image: livingImage,
    category: "Living Room",
  },
  {
    id: 2,
    name: "Premium Wooden Bed",
    price: "₹54,999",
    image: bedroomImage,
    category: "Bedroom",
  },
  {
    id: 3,
    name: "Elegant Dining Set",
    price: "₹67,999",
    image: diningImage,
    category: "Dining",
  },
  {
    id: 4,
    name: "Executive Office Desk",
    price: "₹45,999",
    image: officeImage,
    category: "Office",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Selling Products
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Our customers' favorite picks - quality craftsmanship meets timeless design
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5">
                <p className="font-inter text-xs text-accent font-medium mb-2">
                  {product.category}
                </p>
                <h3 className="font-poppins text-lg font-semibold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-poppins text-xl font-bold text-primary mb-4">
                  {product.price}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
