import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import livingImage from "@/assets/category-living.jpg";
import bedroomImage from "@/assets/category-bedroom.jpg";
import diningImage from "@/assets/category-dining.jpg";
import officeImage from "@/assets/category-office.jpg";
import outdoorImage from "@/assets/category-outdoor.jpg";
import customImage from "@/assets/category-custom.jpg";
import BackButton from "@/components/BackButton";

interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	// category may be a plain string, or an object with a slug, depending on source data
	category?: string | { slug?: string };
	// some data sources might provide a separate categorySlug field
	categorySlug?: string;
}

const allProducts: Product[] = [
	{ id: 1, name: "Luxe Leather Sofa Set", price: 89999, image: livingImage, category: "Living Room", categorySlug: "living-room" },
	{ id: 2, name: "Premium Wooden Bed", price: 54999, image: bedroomImage, category: "Bedroom", categorySlug: "bedroom" },
	{ id: 3, name: "Elegant Dining Set", price: 67999, image: diningImage, category: "Dining", categorySlug: "dining" },
	{ id: 4, name: "Executive Office Desk", price: 45999, image: officeImage, category: "Office", categorySlug: "office" },
	{ id: 5, name: "Comfort Recliner Chair", price: 34999, image: livingImage, category: "Living Room", categorySlug: "living-room" },
	{ id: 6, name: "Garden Furniture Set", price: 42999, image: outdoorImage, category: "Outdoor", categorySlug: "outdoor" },
	{ id: 7, name: "Modern Wardrobe", price: 48999, image: bedroomImage, category: "Bedroom", categorySlug: "bedroom" },
	{ id: 8, name: "Study Table Combo", price: 28999, image: officeImage, category: "Office", categorySlug: "office" },
	// Use customImage (or other images) for accessories instead of livingImage
	{ id: 9, name: "Decorative Table Lamp", price: 8999, image: customImage, category: "Accessories", categorySlug: "accessories" },
	{ id: 10, name: "Wall Art Collection", price: 12999, image: diningImage, category: "Accessories", categorySlug: "accessories" },
];

const Shop = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sortBy, setSortBy] = useState("default");

	const filteredProducts = useMemo(() => {
		let items = [...allProducts];

		// If there is a category query param, try to match common category shapes (slug, categorySlug, or category string)
		if (category) {
			const slug = String(category).toLowerCase();
			items = items.filter((p: Product) => {
				const pCategory = String(typeof p.category === "string" ? p.category : "").toLowerCase();
				const pCategorySlug = String(p.categorySlug ?? "").toLowerCase();
				const pCategoryObjSlug = String(typeof p.category === "object" ? p.category?.slug ?? "" : "").toLowerCase();
				return pCategory === slug || pCategorySlug === slug || pCategoryObjSlug === slug;
			});
		} else if (selectedCategory && selectedCategory !== "all") {
			// apply selectedCategory filter when no query param is present
			items = items.filter((p) => p.category === selectedCategory);
		}

		// apply sorting
		if (sortBy === "price-low") {
			return [...items].sort((a, b) => a.price - b.price);
		} else if (sortBy === "price-high") {
			return [...items].sort((a, b) => b.price - a.price);
		}

		return items;
	}, [category, selectedCategory, sortBy]);

	return (
		<div className="min-h-screen font-inter">
			<Header />

			<main className="py-12 md:py-16 bg-background">
				<div className="container mx-auto px-4">
					{/* Back Button */}
					<BackButton />

					{/* Header */}
					<div className="mb-8 animate-fade-in">
						<h1 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
							Our Furniture Collection
						</h1>
						<p className="font-inter text-muted-foreground text-lg">
							Browse our premium selection of handcrafted furniture
						</p>
					</div>

					{/* Filters */}
					<div className="flex flex-col sm:flex-row gap-4 mb-8">
						<Select value={selectedCategory} onValueChange={setSelectedCategory}>
							<SelectTrigger className="w-full sm:w-[200px]">
								<SelectValue placeholder="Category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Categories</SelectItem>
								<SelectItem value="Living Room">Living Room</SelectItem>
								<SelectItem value="Bedroom">Bedroom</SelectItem>
								<SelectItem value="Dining">Dining</SelectItem>
								<SelectItem value="Office">Office</SelectItem>
								<SelectItem value="Outdoor">Outdoor</SelectItem>
							</SelectContent>
						</Select>

						<Select value={sortBy} onValueChange={setSortBy}>
							<SelectTrigger className="w-full sm:w-[200px]">
								<SelectValue placeholder="Sort By" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="default">Default</SelectItem>
								<SelectItem value="price-low">Price: Low to High</SelectItem>
								<SelectItem value="price-high">Price: High to Low</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
						{filteredProducts.map((product, index) => (
							<div
								key={product.id}
								className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 animate-scale-in group"
								style={{ animationDelay: `${index * 0.05}s` }}
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
										{typeof product.category === "string" ? product.category : product.category?.slug || ""}
									</p>
									<h3 className="font-poppins text-lg font-semibold text-card-foreground mb-2">
										{product.name}
									</h3>
									<p className="font-poppins text-xl font-bold text-primary mb-4">
										₹{product.price.toLocaleString("en-IN")}
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
				</div>
			</main>

			<Footer />
			<WhatsAppButton />
		</div>
	);
};

export default Shop;
