
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mockJobs } from '@/data/jobs';
import JobFilters from '@/components/job/JobFilters';
import JobList from '@/components/job/JobList';

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
  description: string;
}

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [isRemote, setIsRemote] = useState<boolean>(false);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Initialize with mockJobs
      setFilteredJobs(mockJobs as Job[]);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    let results = mockJobs as Job[];
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by role
    if (selectedRole) {
      results = results.filter(job => job.role.toLowerCase() === selectedRole.toLowerCase());
    }
    
    // Filter by location
    if (selectedLocation) {
      results = results.filter(job => job.location.toLowerCase().includes(selectedLocation.toLowerCase()));
    }
    
    // Filter by remote
    if (isRemote) {
      results = results.filter(job => job.type === 'Remote' || job.location.toLowerCase() === 'remote');
    }
    
    setFilteredJobs(results);
  }, [searchTerm, selectedRole, selectedLocation, isRemote]);
  
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Find Your Next Opportunity</h1>
          <p className="text-muted-foreground">
            Discover jobs that match your experience and career goals
          </p>
        </div>
        
        <JobFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          isRemote={isRemote}
          setIsRemote={setIsRemote}
        />
        
        <JobList jobs={filteredJobs} isLoading={isLoading} />
      </motion.div>
    </div>
  );
};

export default JobBoard;
