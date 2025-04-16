
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ExternalLink, Briefcase, MapPin, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProfileModal from './ProfileModal';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  image: string;
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
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  connectionStatus: 'connect' | 'pending' | 'connected';
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Olivia Martinez",
    title: "UX Designer",
    company: "Adobe",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "olivia.martinez@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate UX Designer with 5+ years of experience creating user-centered digital products. I specialize in interaction design and user research, always striving to balance beautiful aesthetics with functionality.",
    skills: ["UX Research", "Figma", "User Testing", "Prototyping", "Wireframing", "UI Design", "Adobe XD"],
    experience: [
      {
        role: "Senior UX Designer",
        company: "Adobe",
        period: "2021 - Present",
        description: "Lead UX design for Creative Cloud products, conducting user research and creating wireframes and prototypes."
      },
      {
        role: "UX Designer",
        company: "Dropbox",
        period: "2018 - 2021",
        description: "Redesigned key user journeys resulting in 25% improvement in task completion rates."
      }
    ],
    education: [
      {
        degree: "Master of Design",
        institution: "Rhode Island School of Design",
        year: "2018"
      },
      {
        degree: "BA, Visual Communication",
        institution: "University of California, Berkeley",
        year: "2016"
      }
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    connectionStatus: 'connect'
  },
  {
    id: 2,
    name: "James Wilson",
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "james.wilson@example.com",
    phone: "+1 (555) 987-6543",
    bio: "Full stack developer specialized in React and Node.js with a passion for building scalable applications. I enjoy solving complex problems and mentoring junior developers.",
    skills: ["React", "Node.js", "TypeScript", "GraphQL", "MongoDB", "AWS", "Docker"],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Microsoft",
        period: "2020 - Present",
        description: "Develop and maintain cloud services using Azure and TypeScript."
      },
      {
        role: "Software Engineer",
        company: "Amazon",
        period: "2017 - 2020",
        description: "Built microservices for the e-commerce platform, improving system reliability."
      }
    ],
    education: [
      {
        degree: "MS, Computer Science",
        institution: "University of Washington",
        year: "2017"
      },
      {
        degree: "BS, Computer Engineering",
        institution: "Georgia Tech",
        year: "2015"
      }
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    connectionStatus: 'pending'
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Product Manager",
    company: "Google",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "emma.thompson@example.com",
    phone: "+1 (555) 456-7890",
    bio: "Product manager focused on data-driven decision making and user-centric product development. I have a track record of launching successful products that solve real user problems.",
    skills: ["Product Strategy", "User Analytics", "A/B Testing", "Roadmapping", "Agile", "Stakeholder Management"],
    experience: [
      {
        role: "Senior Product Manager",
        company: "Google",
        period: "2019 - Present",
        description: "Led product development for Google Workspace, resulting in 30% user growth."
      },
      {
        role: "Product Manager",
        company: "Facebook",
        period: "2016 - 2019",
        description: "Managed the news feed experience team, implementing key engagement features."
      }
    ],
    education: [
      {
        degree: "MBA",
        institution: "Harvard Business School",
        year: "2016"
      },
      {
        degree: "BA, Economics",
        institution: "Yale University",
        year: "2013"
      }
    ],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    connectionStatus: 'connected'
  },
  {
    id: 4,
    name: "David Chen",
    title: "Data Scientist",
    company: "Netflix",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "david.chen@example.com",
    phone: "+1 (555) 234-5678",
    bio: "Data scientist with expertise in machine learning and recommendation systems. I combine statistical analysis with engineering skills to build ML models that drive business value.",
    skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "TensorFlow", "Statistical Analysis"],
    experience: [
      {
        role: "Lead Data Scientist",
        company: "Netflix",
        period: "2018 - Present",
        description: "Developed recommendation algorithms that increased user engagement by 15%."
      },
      {
        role: "Data Scientist",
        company: "Spotify",
        period: "2015 - 2018",
        description: "Built models for music recommendation and user behavior prediction."
      }
    ],
    education: [
      {
        degree: "PhD, Computer Science",
        institution: "Stanford University",
        year: "2015"
      },
      {
        degree: "BS, Mathematics",
        institution: "MIT",
        year: "2011"
      }
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    connectionStatus: 'connect'
  }
];

const ProfileCard = ({ profile, onClick }: { profile: Profile, onClick: () => void }) => {
  const { toast } = useToast();
  
  const handleConnect = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    toast({
      title: "Connection Request Sent",
      description: `Your request to connect with ${profile.name} has been sent.`,
    });
  };
  
  let buttonContent;
  switch (profile.connectionStatus) {
    case 'connect':
      buttonContent = (
        <Button onClick={handleConnect} variant="outline" size="sm" className="flex items-center gap-2">
          <UserPlus size={14} />
          <span>Connect</span>
        </Button>
      );
      break;
    case 'pending':
      buttonContent = (
        <Button disabled variant="outline" size="sm" className="text-gray-500">
          Pending
        </Button>
      );
      break;
    case 'connected':
      buttonContent = (
        <Button variant="outline" size="sm" className="text-brand-600 border-brand-200 bg-brand-50 hover:bg-brand-100">
          Message
        </Button>
      );
      break;
  }

  return (
    <motion.div 
      className="profile-card group cursor-pointer"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-100">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{profile.name}</h3>
            <p className="text-gray-600 text-sm flex items-center gap-1.5">
              <Briefcase size={14} />
              <span>{profile.title} at {profile.company}</span>
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={18} />
        </Button>
      </div>
      
      {/* Skills */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-2">
          <Layers size={14} className="text-brand-600" />
          <span className="text-sm font-medium text-gray-700">Skills</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          {profile.skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index} 
              className="text-xs px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100"
            >
              {skill}
            </span>
          ))}
          {profile.skills.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
              +{profile.skills.length - 4} more
            </span>
          )}
        </div>
      </div>
      
      {/* Connect button */}
      <div className="mt-auto pt-2">
        {buttonContent}
      </div>
    </motion.div>
  );
};

const ProfileSection = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-brand-50 dark:from-background dark:to-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Discover Professionals</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with industry experts and expand your professional network
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map(profile => (
            <ProfileCard 
              key={profile.id} 
              profile={profile} 
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary" className="btn-secondary">
            View More Professionals
          </Button>
        </div>
      </div>
      
      {selectedProfile && (
        <ProfileModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          profile={selectedProfile}
        />
      )}
    </section>
  );
};

export default ProfileSection;
