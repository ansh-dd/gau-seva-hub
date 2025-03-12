
import { Cow, Leaf, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionSection = () => {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gauSeva-brown mb-4">Our Mission & Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by ancient wisdom and compassion, our mission is to protect and serve cows while promoting sustainable living and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Cow className="h-12 w-12 text-gauSeva-orange" />}
            title="Cow Protection"
            description="We provide lifelong care and shelter to cows, recognizing their sacred status and intrinsic value."
          />
          
          <ValueCard 
            icon={<Leaf className="h-12 w-12 text-gauSeva-green" />}
            title="Sustainable Living"
            description="We promote eco-friendly practices through organic farming and natural resource conservation."
          />
          
          <ValueCard 
            icon={<Heart className="h-12 w-12 text-gauSeva-orange" />}
            title="Compassionate Care"
            description="We ensure the physical and emotional wellbeing of every cow through personalized, loving care."
          />
          
          <ValueCard 
            icon={<Users className="h-12 w-12 text-gauSeva-brown" />}
            title="Community Education"
            description="We share knowledge about cow protection and its importance for cultural and spiritual harmony."
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-6 text-center flex flex-col items-center">
        <div className="mb-6 p-4 bg-gauSeva-beige rounded-full animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gauSeva-brown">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MissionSection;
