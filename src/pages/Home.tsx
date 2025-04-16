
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import ProfileSection from '@/components/profile/ProfileSection';

const Home = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/90 to-accent1-900/70"></div>
          <img 
            src="/assets/hero-background.jpg" 
            alt="Professionals networking" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          
          <motion.div 
            className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-white mb-4">
              Build Your Future with <span className="text-brand-300">ProConnect</span>
            </h1>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Connect with industry professionals, showcase your skills, and discover
              opportunities that match your career goals.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button 
                onClick={() => navigate('/profile-builder')}
                className="btn-primary group"
              >
                Create Profile
              </Button>
              <Button 
                onClick={() => navigate('/job-board')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Explore Jobs
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <div className="flex flex-col items-center cursor-pointer" onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}>
            <p className="text-white mb-2">Scroll to learn more</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose ProConnect?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-brand-100 flex items-center justify-center">
                <div className="w-8 h-8 text-brand-600">🔍</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Discover Opportunities</h3>
              <p className="text-muted-foreground">
                Find jobs that match your skills and career goals with our intelligent matching system.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-accent1-100 flex items-center justify-center">
                <div className="w-8 h-8 text-accent1-600">👥</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Build Your Network</h3>
              <p className="text-muted-foreground">
                Connect with industry professionals and expand your network with meaningful connections.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-accent2-100 flex items-center justify-center">
                <div className="w-8 h-8 text-accent2-600">🚀</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Showcase Your Skills</h3>
              <p className="text-muted-foreground">
                Create a professional profile that highlights your experience, skills, and accomplishments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Profile Section */}
      <ProfileSection />
    </div>
  );
};

export default Home;
