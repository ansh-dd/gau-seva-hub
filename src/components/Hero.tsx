
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gauSeva-beige font-poppins">
      <div 
        className="absolute inset-0 z-0 bg-black opacity-30"
        style={{
          backgroundImage: "url('/images/hero-cow.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply"
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20 md:py-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Protecting Sacred Lives,<br /> Preserving Ancient Wisdom
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our mission to provide shelter, care, and dignity to cows through sustainable practices and spiritual understanding.
        </p>
        <div className="flex justify-center">
          <Button asChild className="bg-gauSeva-orange hover:bg-gauSeva-brown text-white font-medium text-lg px-8 py-6">
            <Link to="/donate">Support Our Cause</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="animate-bounce">
          <svg className="mx-auto w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
