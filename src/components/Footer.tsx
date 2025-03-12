
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gauSeva-brown text-white font-poppins">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-gauSeva-orange mr-2" />
              <span className="font-bold text-xl">Gau Seva Hub</span>
            </div>
            <p className="text-white/80 mb-6">
              Dedicated to the protection and welfare of cows through sustainable practices, education, and spiritual understanding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gauSeva-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gauSeva-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gauSeva-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gauSeva-orange transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/programs" text="Our Programs" />
              <FooterLink href="/gallery" text="Gallery" />
              <FooterLink href="/donate" text="Donate" />
              <FooterLink href="/contact" text="Contact Us" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gauSeva-orange mr-2 mt-0.5" />
                <span>Gau Seva Sanctuary, Village Vrindavan, District Mathura, Uttar Pradesh, India - 281121</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gauSeva-orange mr-2" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gauSeva-orange mr-2" />
                <span>info@gausevahub.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter to receive updates and news about our activities.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-gauSeva-orange hover:bg-gauSeva-yellow text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/20" />
        
        <div className="pt-8 text-center text-white/70">
          <p>© {new Date().getFullYear()} Gau Seva Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link to={href} className="text-white/80 hover:text-gauSeva-orange transition-colors">
      {text}
    </Link>
  </li>
);

export default Footer;
