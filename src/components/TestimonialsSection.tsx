
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "SoftConnect helped me find amazing connections in my industry. Within just a month, I secured a job that was perfect for my career goals. The platform's intuitive design made networking feel natural and productive."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Software Engineer",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "The job board on SoftConnect is a game-changer. I was able to filter opportunities that matched exactly what I was looking for. The application process was streamlined and I received responses much faster than on other platforms."
  },
  {
    id: 3,
    name: "Priya Patel",
    title: "UX Designer",
    company: "DesignHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "As someone transitioning careers, SoftConnect provided the support and connections I needed. The community is incredibly supportive and the platform's tools made showcasing my portfolio and skills effortless."
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Product Manager",
    company: "GrowthLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "I've tried many professional networking sites, but SoftConnect stands out with its clean interface and quality connections. It focuses on meaningful interactions rather than just adding contacts. Highly recommended for serious professionals."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who found success with our platform
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="testimonial-card flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent2-500 rounded-full flex items-center justify-center text-white">
                          <Quote size={18} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <blockquote className="italic text-gray-700 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.title} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-brand-600 transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-brand-600 transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-600' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
