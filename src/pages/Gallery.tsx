
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery image data
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/cow-shelter.jpg",
    alt: "Cow in sanctuary",
    category: "sanctuary",
    title: "Peaceful Sanctuary"
  },
  {
    id: 2,
    src: "/images/gallery/organic-farming.jpg",
    alt: "Organic farming field",
    category: "farming",
    title: "Organic Cultivation"
  },
  {
    id: 3,
    src: "/images/gallery/education.jpg",
    alt: "Educational workshop",
    category: "education",
    title: "Learning Together"
  },
  {
    id: 4,
    src: "/images/gallery/cow-products.jpg",
    alt: "Cow products display",
    category: "products",
    title: "Traditional Products"
  },
  {
    id: 5,
    src: "/images/gallery/cow-adoption.jpg",
    alt: "Cow adoption ceremony",
    category: "adoption",
    title: "Adoption Day"
  },
  {
    id: 6,
    src: "/images/gallery/volunteer.jpg",
    alt: "Volunteers working",
    category: "volunteer",
    title: "Dedicated Volunteers"
  },
  {
    id: 7,
    src: "/images/gallery/hero-cow.jpg",
    alt: "Hero cow image",
    category: "sanctuary",
    title: "Cow Grazing"
  },
  {
    id: 8,
    src: "/images/gallery/cow-shelter-2.jpg",
    alt: "Cow shelter",
    category: "sanctuary",
    title: "Our Shelters"
  },
  {
    id: 9,
    src: "/images/gallery/organic-farming-2.jpg",
    alt: "Farming activities",
    category: "farming",
    title: "Natural Farming"
  },
  {
    id: 10,
    src: "/images/gallery/cow-adoption-2.jpg",
    alt: "Family with adopted cow",
    category: "adoption",
    title: "Family Connection"
  },
  {
    id: 11,
    src: "/images/gallery/volunteer-2.jpg",
    alt: "International volunteers",
    category: "volunteer",
    title: "Global Community"
  },
  {
    id: 12,
    src: "/images/gallery/education-2.jpg",
    alt: "Children learning",
    category: "education",
    title: "Young Learners"
  }
];

const categories = [
  { id: "all", name: "All" },
  { id: "sanctuary", name: "Sanctuary" },
  { id: "farming", name: "Farming" },
  { id: "education", name: "Education" },
  { id: "products", name: "Products" },
  { id: "adoption", name: "Adoption" },
  { id: "volunteer", name: "Volunteers" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gauSeva-beige py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gauSeva-brown mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Glimpses into our work protecting cows, practicing sustainable farming, 
              and building a compassionate community.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={
                    activeCategory === category.id 
                      ? "bg-gauSeva-orange hover:bg-gauSeva-brown"
                      : "border-gauSeva-orange text-gauSeva-brown hover:bg-gauSeva-orange hover:text-white"
                  }
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map(image => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gauSeva-brown">{image.title}</h3>
                    <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-10">
                <p className="text-xl text-gray-500">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full object-contain max-h-[80vh]" 
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <section className="bg-gauSeva-brown text-white py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Journey</h2>
            <p className="text-xl mb-8">
              Visit our sanctuary to experience the peaceful environment and connect with the cows we protect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gauSeva-orange hover:bg-gauSeva-yellow text-white">
                <Link to="/contact">Plan a Visit</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gauSeva-brown">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
