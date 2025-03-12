
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gauSeva-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gauSeva-brown mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out with questions, feedback, or to schedule a visit.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gauSeva-brown mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible. We appreciate your interest in our mission.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={6} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="bg-gauSeva-orange hover:bg-gauSeva-brown text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gauSeva-brown mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Here's how you can reach us directly or visit our sanctuary.
              </p>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="h-6 w-6 text-gauSeva-orange" />}
                  title="Our Location"
                  details={[
                    "Gau Seva Sanctuary",
                    "Village Vrindavan, District Mathura",
                    "Uttar Pradesh, India - 281121"
                  ]}
                />
                
                <ContactItem 
                  icon={<Phone className="h-6 w-6 text-gauSeva-orange" />}
                  title="Phone Number"
                  details={["+91 9876543210", "+91 9876543211"]}
                />
                
                <ContactItem 
                  icon={<Mail className="h-6 w-6 text-gauSeva-orange" />}
                  title="Email Address"
                  details={["info@gausevahub.org", "support@gausevahub.org"]}
                />
                
                <ContactItem 
                  icon={<Clock className="h-6 w-6 text-gauSeva-orange" />}
                  title="Visiting Hours"
                  details={[
                    "Monday to Saturday: 9:00 AM - 5:00 PM",
                    "Sunday: 10:00 AM - 3:00 PM"
                  ]}
                />
              </div>
              
              <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-64">
                {/* Placeholder for map (in a real implementation, you'd include a Google Map or similar) */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gauSeva-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gauSeva-brown mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about visiting, volunteering, and supporting our sanctuary.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FaqItem 
                question="How can I visit the sanctuary?"
                answer="Visitors are welcome during our visiting hours. For group visits, we recommend booking in advance. You can call us or fill out the contact form to schedule your visit."
              />
              
              <FaqItem 
                question="Can I volunteer at the sanctuary?"
                answer="Yes, we welcome volunteers! We have both short-term and long-term volunteer opportunities. Please contact us for more information about our volunteer program."
              />
              
              <FaqItem 
                question="How are donations used?"
                answer="Your donations directly support cow care, including food, shelter, medical treatment, and staff salaries. We also use donations for our educational programs and sanctuary maintenance."
              />
              
              <FaqItem 
                question="Can I adopt a cow?"
                answer="Yes, through our cow adoption program, you can sponsor the care of a specific cow. You'll receive updates about your adopted cow and can visit them at the sanctuary."
              />
              
              <FaqItem 
                question="Do you offer educational programs for schools?"
                answer="Yes, we offer special educational tours and workshops for school groups. These programs are tailored to different age groups and focus on cow protection, sustainable farming, and environmental stewardship."
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ContactItem = ({ icon, title, details }: { icon: React.ReactNode; title: string; details: string[] }) => {
  return (
    <div className="flex">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-gauSeva-brown text-lg mb-2">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-gauSeva-brown text-lg mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Contact;
