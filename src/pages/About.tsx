
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gauSeva-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gauSeva-brown mb-4">About Gau Seva Hub</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journey, mission, and the team dedicated to cow protection and welfare.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gauSeva-brown mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Gau Seva Hub was founded in 2010 by a group of dedicated individuals who were concerned about the plight of abandoned and neglected cows in India. What began as a small shelter for a few cows has now grown into a comprehensive sanctuary and education center.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders were inspired by the ancient Indian tradition of revering cows as sacred beings deserving of protection and care. They recognized that in today's rapidly changing world, this tradition was being forgotten, leading to suffering for these gentle creatures.
              </p>
              <p className="text-gray-600">
                Over the years, our mission has expanded to include not only direct cow care but also education, sustainable farming practices, and community outreach - all centered around the principle of compassion for all living beings.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about-story.jpg" 
                alt="Founders with cows at the sanctuary" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-gauSeva-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gauSeva-brown mb-4">Vision & Mission</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gauSeva-orange mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where cows are respected, protected, and valued for their intrinsic worth and contribution to humanity and the environment. We envision communities living in harmony with nature, guided by principles of compassion and sustainable living.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gauSeva-orange mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To protect and serve cows by providing sanctuary, promoting their welfare, educating the public about their importance, and demonstrating how cow-based sustainable living can benefit society and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gauSeva-brown mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who make our mission possible every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Dr. Anand Sharma"
              role="Founder & Director"
              image="/images/team-1.jpg"
              bio="A veterinarian with over 20 years of experience in animal welfare, Dr. Sharma leads our organization with compassion and expertise."
            />
            
            <TeamMember 
              name="Sunita Verma"
              role="Cow Care Specialist"
              image="/images/team-2.jpg"
              bio="With her deep knowledge of traditional cow care methods, Sunita ensures the health and happiness of every cow in our sanctuary."
            />
            
            <TeamMember 
              name="Vikram Patel"
              role="Agricultural Expert"
              image="/images/team-3.jpg"
              bio="Vikram leads our organic farming initiatives, implementing cow-based farming techniques that promote sustainability."
            />
            
            <TeamMember 
              name="Meera Joshi"
              role="Education Coordinator"
              image="/images/team-4.jpg"
              bio="As our education coordinator, Meera develops and conducts workshops and programs that spread awareness about cow protection."
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Our team also includes numerous dedicated staff members and volunteers who work tirelessly to care for our cows and maintain our sanctuary.
            </p>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 bg-gauSeva-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gauSeva-brown mb-4">Our Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gauSeva-orange mb-3">Sanctuary Growth</h3>
              <Separator className="mb-4" />
              <p className="text-gray-600">
                From a small shelter for 10 cows, we've grown to a sanctuary that provides lifelong care to over 350 cows, including many rescued from abandonment and abuse.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gauSeva-orange mb-3">Educational Impact</h3>
              <Separator className="mb-4" />
              <p className="text-gray-600">
                We've educated over 25,000 visitors about cow protection and sustainable living through our tours, workshops, and outreach programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gauSeva-orange mb-3">Sustainable Farming</h3>
              <Separator className="mb-4" />
              <p className="text-gray-600">
                Our 50-acre organic farm demonstrates successful cow-based farming practices, producing crops without chemical fertilizers or pesticides.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gauSeva-orange mb-3">Community Building</h3>
              <Separator className="mb-4" />
              <p className="text-gray-600">
                We've fostered a community of over 5,000 supporters and volunteers who actively participate in our mission of cow protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const TeamMember = ({ name, role, image, bio }: { name: string; role: string; image: string; bio: string }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gauSeva-brown">{name}</h3>
        <p className="text-gauSeva-orange mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default About;
