
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Volunteer",
    image: "/images/testimonials/testimonial-1.jpg",
    quote: "Working with Gau Seva Hub has transformed my understanding of these sacred animals. The love and care they provide to each cow is truly inspiring."
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Cow Adopter",
    image: "/images/testimonials/testimonial-2.jpg",
    quote: "Adopting Lakshmi through the program has been a blessing. The regular updates and ability to visit her brings such joy to our family. We're proud to support this noble cause."
  },
  {
    id: 3,
    name: "Arun Singh",
    role: "Local Farmer",
    image: "/images/testimonials/testimonial-3.jpg",
    quote: "The organic farming workshops have revolutionized my approach to agriculture. Using cow-based inputs has improved my soil health and crop yields tremendously."
  },
  {
    id: 4,
    name: "Kavita Iyer",
    role: "Monthly Donor",
    image: "/images/testimonials/testimonial-4.jpg",
    quote: "I've been supporting Gau Seva Hub for over three years now. The transparency in how they utilize donations and their dedication to cow welfare is commendable."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  
  const nextTestimonial = () => {
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setDirection('');
    }, 300);
  };
  
  const prevTestimonial = () => {
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setDirection('');
    }, 300);
  };

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gauSeva-brown mb-4">What People Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our community of supporters, volunteers, and beneficiaries about their experiences with Gau Seva Hub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-none shadow-xl bg-gauSeva-beige">
            <CardContent className="p-8 md:p-12">
              <div className="absolute -top-6 left-8 text-gauSeva-orange">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className={`transition-opacity duration-300 ${direction ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-gauSeva-orange">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gauSeva-brown text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gauSeva-orange">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gauSeva-orange text-white hover:bg-gauSeva-brown transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <span 
                  key={index}
                  className={`block h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gauSeva-orange' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gauSeva-orange text-white hover:bg-gauSeva-brown transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
