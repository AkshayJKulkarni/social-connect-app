
import React, { useState } from 'react';
import { Building, Clock, MapPin, Briefcase, Search, Filter, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  postedTime: string;
  salary: string;
  tags: string[];
  role: 'Engineering' | 'Design' | 'Product' | 'Marketing' | 'Sales';
}

const JOBS: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Airbnb",
    logo: "https://placeholder.svg",
    location: "San Francisco, CA",
    type: "Full-time",
    postedTime: "2 days ago",
    salary: "$120K - $150K",
    tags: ["React", "TypeScript", "CSS"],
    role: "Engineering"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Dropbox",
    logo: "https://placeholder.svg",
    location: "Remote",
    type: "Full-time",
    postedTime: "1 week ago",
    salary: "$90K - $120K",
    tags: ["UI/UX", "Figma", "Design Systems"],
    role: "Design"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Shopify",
    logo: "https://placeholder.svg",
    location: "Toronto, Canada",
    type: "Full-time",
    postedTime: "3 days ago",
    salary: "$110K - $140K",
    tags: ["Analytics", "Product Strategy", "Agile"],
    role: "Product"
  },
  {
    id: 4,
    title: "Marketing Specialist",
    company: "Stripe",
    logo: "https://placeholder.svg",
    location: "Remote",
    type: "Contract",
    postedTime: "Just now",
    salary: "$80K - $100K",
    tags: ["Content Strategy", "SEO", "Analytics"],
    role: "Marketing"
  }
];

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="job-card">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-white rounded-md shadow-sm flex items-center justify-center overflow-hidden">
            <img src={job.logo} alt={job.company} className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-gray-600 flex items-center gap-1.5 text-sm">
              <Building size={14} />
              <span>{job.company}</span>
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-gray-600">
          <ArrowUpRight size={18} />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 my-3">
        <div className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
          <MapPin size={12} />
          <span>{job.location}</span>
        </div>
        <div className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
          <Briefcase size={12} />
          <span>{job.type}</span>
        </div>
        <div className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
          <Clock size={12} />
          <span>{job.postedTime}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-brand-700 font-medium">{job.salary}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {job.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2.5 py-1 rounded-full bg-accent1-50 text-accent1-700 border border-accent1-100"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <button className="btn-primary w-full">Apply Now</button>
    </div>
  );
};

const JobBoard = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [isRemote, setIsRemote] = useState<boolean>(false);
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Next Opportunity</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover jobs that match your experience and career goals
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-soft p-4 md:p-6 mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Job title or keyword" 
                className="w-full py-2.5 pl-10 pr-4 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
            </div>
            
            <div className="flex gap-3 flex-col sm:flex-row">
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center gap-2">
                    <Filter size={16} className="text-gray-500" />
                    <SelectValue placeholder="Role" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    <SelectValue placeholder="Location" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="toronto">Toronto</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex items-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                    checked={isRemote}
                    onChange={() => setIsRemote(!isRemote)}
                  />
                  <span className="text-gray-700">Remote Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Job listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOBS.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Browse All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobBoard;
