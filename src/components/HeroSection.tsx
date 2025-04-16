
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="People networking" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-800/90 to-accent1-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-white mb-4 animate-fade-in">
            Connect, Collaborate,<br />
            <span className="text-brand-300">Advance Your Career</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Join thousands of professionals in building meaningful connections, 
            discovering opportunities, and growing your network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "200ms" }}>
            <button className="btn-primary group">
              Join Now
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 text-white/80 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <p className="text-sm font-medium mb-3">TRUSTED BY PROFESSIONALS FROM</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
              <img src="https://placeholder.svg" alt="Company logo" className="h-6 opacity-80" />
              <img src="https://placeholder.svg" alt="Company logo" className="h-6 opacity-80" />
              <img src="https://placeholder.svg" alt="Company logo" className="h-8 opacity-80" />
              <img src="https://placeholder.svg" alt="Company logo" className="h-6 opacity-80" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Glass card stats - shown only on larger screens */}
      <div className="hidden lg:block absolute bottom-0 right-0 translate-y-1/2 lg:mr-8 xl:mr-20 animate-slide-from-right">
        <div className="glass rounded-xl p-6 grid grid-cols-3 gap-8 w-max">
          <div className="text-center">
            <p className="text-3xl font-bold text-brand-700">2.3M+</p>
            <p className="text-sm text-gray-600 mt-1">Professionals</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-brand-700">18K+</p>
            <p className="text-sm text-gray-600 mt-1">Companies</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-brand-700">35K+</p>
            <p className="text-sm text-gray-600 mt-1">Jobs Posted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
