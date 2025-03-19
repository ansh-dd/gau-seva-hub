
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      id: "sanctuary",
      title: "Cow Sanctuary",
      image: "/images/programs/cow-shelter.jpg",
      description: "Our sanctuary provides a safe haven for abandoned, sick, and elderly cows, ensuring they live with dignity and care. Each cow receives personalized attention, proper nutrition, and medical care to ensure their wellbeing throughout their lives.",
      features: [
        "24/7 veterinary care",
        "Spacious, clean shelters",
        "Natural grazing areas",
        "Specialized diets for elderly cows"
      ]
    },
    {
      id: "farming",
      title: "Organic Farming",
      image: "/images/programs/organic-farming.jpg",
      description: "Using traditional methods and cow-based inputs, we produce nutritious food while maintaining soil health and biodiversity. Our farming practices follow ancient Indian techniques that work in harmony with nature.",
      features: [
        "Cow dung-based fertilizers",
        "Traditional seed preservation",
        "Natural pest management",
        "Crop rotation systems"
      ]
    },
    {
      id: "education",
      title: "Educational Workshops",
      image: "/images/education.jpg",
      description: "Learn about cow protection, traditional farming, and sustainable living through our hands-on workshops and seminars. Our educational programs are designed for all age groups and backgrounds.",
      features: [
        "School educational tours",
        "Hands-on farming workshops",
        "Cow care training",
        "Traditional crafts using cow products"
      ]
    },
    {
      id: "products",
      title: "Cow Products",
      image: "/images/cow-products.jpg",
      description: "Ethically sourced cow products including milk, ghee, and cow-dung based items that support our protection efforts. Every purchase directly contributes to our cow protection initiatives.",
      features: [
        "A2 milk and dairy products",
        "Handmade cow dung crafts",
        "Panchagavya preparations",
        "Organic fertilizers"
      ]
    },
    {
      id: "adoption",
      title: "Cow Adoption",
      image: "/images/cow-adoption.jpg",
      description: "Support a specific cow through our adoption program, receiving updates and the opportunity to visit your adopted cow. This program creates a personal connection between people and the cows they help protect.",
      features: [
        "Monthly updates about your cow",
        "Personalized adoption certificate",
        "Scheduled visits to meet your cow",
        "Special festival celebration invitations"
      ]
    },
    {
      id: "volunteer",
      title: "Volunteer Program",
      image: "/images/volunteer.jpg",
      description: "Join our community of dedicated volunteers who help with daily cow care, farm maintenance, and special events. We welcome volunteers from all backgrounds who share our passion for cow protection.",
      features: [
        "Short and long-term volunteering options",
        "Training provided for all roles",
        "International volunteer opportunities",
        "Community living experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gauSeva-beige py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gauSeva-brown mb-6">Our Programs</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the various initiatives we've developed to support cow protection, 
              sustainable living, and community welfare.
            </p>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="space-y-16">
              {programs.map((program, index) => (
                <div 
                  key={program.id}
                  id={program.id}
                  className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-gauSeva-brown">{program.title}</h2>
                    <p className="text-gray-700">{program.description}</p>
                    
                    <h3 className="text-xl font-semibold text-gauSeva-orange mt-4">Key Features:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="bg-gauSeva-beige text-gauSeva-orange rounded-full h-6 w-6 flex items-center justify-center mr-2">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button className="mt-4 bg-gauSeva-orange hover:bg-gauSeva-brown text-white">
                      Get Involved
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gauSeva-brown text-white py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Together, we can make a significant difference in the lives of cows and promote
              sustainable living practices for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gauSeva-orange hover:bg-gauSeva-yellow text-white">
                <Link to="/donate">Support Our Cause</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gauSeva-brown">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
