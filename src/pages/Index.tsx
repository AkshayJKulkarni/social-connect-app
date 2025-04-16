
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProfileSection from '../components/ProfileSection';
import JobBoard from '../components/JobBoard';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProfileSection />
        <JobBoard />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
