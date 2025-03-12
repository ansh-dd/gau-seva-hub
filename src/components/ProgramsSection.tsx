
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-gauSeva-beige font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gauSeva-brown mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the various initiatives we've developed to support cow protection, sustainable living, and community welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard 
            image="/images/cow-shelter.jpg"
            title="Cow Sanctuary"
            description="Our sanctuary provides a safe haven for abandoned, sick, and elderly cows, ensuring they live with dignity and care."
            link="/programs/sanctuary"
          />
          
          <ProgramCard 
            image="/images/organic-farming.jpg"
            title="Organic Farming"
            description="Using traditional methods and cow-based inputs, we produce nutritious food while maintaining soil health and biodiversity."
            link="/programs/farming"
          />
          
          <ProgramCard 
            image="/images/education.jpg"
            title="Educational Workshops"
            description="Learn about cow protection, traditional farming, and sustainable living through our hands-on workshops and seminars."
            link="/programs/education"
          />
          
          <ProgramCard 
            image="/images/cow-products.jpg"
            title="Cow Products"
            description="Ethically sourced cow products including milk, ghee, and cow-dung based items that support our protection efforts."
            link="/programs/products"
          />
          
          <ProgramCard 
            image="/images/cow-adoption.jpg"
            title="Cow Adoption"
            description="Support a specific cow through our adoption program, receiving updates and the opportunity to visit your adopted cow."
            link="/programs/adoption"
          />
          
          <ProgramCard 
            image="/images/volunteer.jpg"
            title="Volunteer Program"
            description="Join our community of dedicated volunteers who help with daily cow care, farm maintenance, and special events."
            link="/programs/volunteer"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-gauSeva-orange hover:bg-gauSeva-brown text-white font-medium text-lg px-8 py-6">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ image, title, description, link }: { image: string; title: string; description: string; link: string }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gauSeva-brown">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Button asChild variant="outline" className="mt-auto border-gauSeva-orange text-gauSeva-orange hover:bg-gauSeva-orange hover:text-white">
          <Link to={link}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProgramsSection;
