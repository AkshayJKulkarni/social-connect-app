
import React from 'react';
import { UserPlus, ExternalLink, Briefcase, MapPin, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Profile {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  image: string;
  skills: string[];
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
    skills: ["UX Research", "Figma", "User Testing", "Prototyping"],
    connectionStatus: 'connect'
  },
  {
    id: 2,
    name: "James Wilson",
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    skills: ["React", "Node.js", "TypeScript", "GraphQL"],
    connectionStatus: 'pending'
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Product Manager",
    company: "Google",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    skills: ["Product Strategy", "User Analytics", "A/B Testing", "Roadmapping"],
    connectionStatus: 'connected'
  },
  {
    id: 4,
    name: "David Chen",
    title: "Data Scientist",
    company: "Netflix",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    skills: ["Python", "Machine Learning", "Data Visualization", "SQL"],
    connectionStatus: 'connect'
  }
];

const ProfileCard = ({ profile }: { profile: Profile }) => {
  let buttonContent;
  switch (profile.connectionStatus) {
    case 'connect':
      buttonContent = (
        <button className="btn-outline flex items-center gap-2">
          <UserPlus size={16} />
          <span>Connect</span>
        </button>
      );
      break;
    case 'pending':
      buttonContent = (
        <button className="text-gray-500 border-2 border-gray-300 px-5 py-2.5 rounded-full font-medium transition-colors">
          Pending
        </button>
      );
      break;
    case 'connected':
      buttonContent = (
        <button className="text-brand-600 border-2 border-brand-200 bg-brand-50 px-5 py-2.5 rounded-full font-medium hover:bg-brand-100 transition-colors">
          Message
        </button>
      );
      break;
  }

  return (
    <div className="profile-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Profile image */}
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
        <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-gray-600">
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
          {profile.skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Connect button */}
      <div className="mt-auto pt-2">
        {buttonContent}
      </div>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-brand-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Professionals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with industry experts and expand your professional network
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View More Professionals
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
