
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className="h-8 w-8 text-gauSeva-orange mr-2" />
          <span className="font-bold text-xl md:text-2xl text-gauSeva-brown">Gau Seva Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/programs" text="Programs" />
          <NavLink href="/gallery" text="Gallery" />
          <NavLink href="/contact" text="Contact" />
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gauSeva-orange hover:bg-gauSeva-brown text-white">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gauSeva-brown" /> : <Menu className="h-6 w-6 text-gauSeva-brown" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/" text="Home" onClick={toggleMenu} />
            <MobileNavLink href="/about" text="About" onClick={toggleMenu} />
            <MobileNavLink href="/programs" text="Programs" onClick={toggleMenu} />
            <MobileNavLink href="/gallery" text="Gallery" onClick={toggleMenu} />
            <MobileNavLink href="/contact" text="Contact" onClick={toggleMenu} />
            <Button asChild className="bg-gauSeva-orange hover:bg-gauSeva-brown text-white w-full mt-4">
              <Link to="/donate" onClick={toggleMenu}>Donate Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Nav Link
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    to={href}
    className="text-gauSeva-brown hover:text-gauSeva-orange font-medium transition-colors"
  >
    {text}
  </Link>
);

// Mobile Nav Link
const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <Link
    to={href}
    className="text-gauSeva-brown hover:text-gauSeva-orange font-medium transition-colors text-lg py-2 border-b border-gray-100"
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Navbar;
