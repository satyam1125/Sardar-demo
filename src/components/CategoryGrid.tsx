import { Link } from "react-router-dom";
import React from "react";
import livingImage from "@/assets/category-living.jpg";
import bedroomImage from "@/assets/category-bedroom.jpg";
import diningImage from "@/assets/category-dining.jpg";
import officeImage from "@/assets/category-office.jpg";
import outdoorImage from "@/assets/category-outdoor.jpg";
import customImage from "@/assets/category-custom.jpg";

const categories = [
  {
    id: 1,
    title: "Living Room",
    slug: "living-room",
    image: livingImage,
  },
  {
    id: 2,
    title: "Bedroom",
    slug: "bedroom",
    image: bedroomImage,
  },
  {
    id: 3,
    title: "Dining",
    slug: "dining",
    image: diningImage,
  },
  {
    id: 4,
    title: "Office",
    slug: "office",
    image: officeImage,
  },
  {
    id: 5,
    title: "Outdoor",
    slug: "outdoor",
    image: outdoorImage,
  },
  {
    id: 6,
    title: "Accessories",
    slug: "accessories",
    image: customImage,
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12">
      {/* center the whole section and give comfortable max width so the grid is centered on large screens */}
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
          Explore our collection
        </h2>

        {/* grid: mobile 3 cols, md+ 6 cols; equal heights via items-stretch + h-full */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-stretch w-full">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.slug)}`}
              className="block h-full group"
              aria-label={cat.title}
            >
              <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {/* image area keeps consistent aspect ratio */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* content area stretches so all cards match height */}
                <div className="p-3 flex-1 flex items-center justify-center">
                  <h3 className="text-sm font-medium text-center">{cat.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
