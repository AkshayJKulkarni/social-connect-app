
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Briefcase, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from '@/hooks/use-toast';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    name: string;
    title: string;
    company: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    skills: string[];
    experience: {
      role: string;
      company: string;
      period: string;
      description: string;
    }[];
    education: {
      degree: string;
      institution: string;
      year: string;
    }[];
    image: string;
    social: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
}

const ProfileModal = ({ isOpen, onClose, profile }: ProfileModalProps) => {
  const { toast } = useToast();
  
  const handleConnect = () => {
    toast({
      title: "Connection Request Sent",
      description: `Your request to connect with ${profile.name} has been sent.`,
    });
  };
  
  const handleMessage = () => {
    toast({
      title: "Message Sent",
      description: `Your message to ${profile.name} has been sent.`,
    });
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-3xl overflow-y-auto rounded-xl bg-background shadow-lg"
            initial={{ opacity: 0, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, x: "-50%", y: "-40%" }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              className="absolute right-4 top-4 rounded-full"
            >
              <X size={20} />
            </Button>
            
            {/* Header */}
            <div className="relative">
              <div className="h-32 w-full bg-gradient-to-r from-brand-500 to-accent1-500 rounded-t-xl" />
              <div className="absolute -bottom-16 left-6">
                <Avatar className="h-32 w-32 border-4 border-background">
                  <AvatarImage src={profile.image} alt={profile.name} />
                  <AvatarFallback className="text-4xl">{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="pt-20 px-6 pb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Briefcase size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{profile.company}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{profile.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleConnect} variant="outline" size="sm">Connect</Button>
                  <Button onClick={handleMessage} size="sm">Message</Button>
                </div>
              </div>
              
              {/* Contact */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Mail size={14} className="text-muted-foreground" />
                  <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={14} className="text-muted-foreground" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
              </div>
              
              {/* Social */}
              <div className="flex gap-2 mb-6">
                {profile.social.github && (
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github size={18} />
                    </Button>
                  </a>
                )}
                {profile.social.linkedin && (
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin size={18} />
                    </Button>
                  </a>
                )}
                {profile.social.twitter && (
                  <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter size={18} />
                    </Button>
                  </a>
                )}
              </div>
              
              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{profile.bio}</p>
              </div>
              
              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Experience */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <div className="space-y-4">
                  {profile.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-brand-200 pl-4 py-1">
                      <div className="font-medium">{exp.role}</div>
                      <div className="text-sm text-muted-foreground">{exp.company} · {exp.period}</div>
                      <div className="text-sm mt-1">{exp.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <div className="space-y-4">
                  {profile.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-brand-200 pl-4 py-1">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">{edu.institution} · {edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
