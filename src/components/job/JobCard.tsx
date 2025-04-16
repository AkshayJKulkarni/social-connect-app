
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Clock, MapPin, Briefcase, BookmarkPlus, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

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

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: `You've applied to ${job.title} at ${job.company}`,
    });
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job Removed" : "Job Saved",
      description: isSaved
        ? `${job.title} has been removed from your bookmarks`
        : `${job.title} has been saved to your bookmarks`,
    });
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Determine badge color based on job type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-300';
      case 'Part-time':
        return 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Contract':
        return 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-300';
      case 'Remote':
        return 'bg-brand-50 text-brand-700 border-brand-100 dark:bg-brand-900/20 dark:text-brand-300';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-800 dark:text-gray-300';
    }
  };
  
  return (
    <motion.div 
      className="job-card"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      layout
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-md shadow-sm flex items-center justify-center overflow-hidden">
            <img src={job.logo} alt={job.company} className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1.5 text-sm">
              <Building size={14} />
              <span>{job.company}</span>
            </p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`rounded-full ${isSaved ? 'text-brand-500' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
          onClick={handleSave}
        >
          <BookmarkPlus size={18} />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 my-3">
        <Badge variant="outline" className={getBadgeVariant(job.type)}>
          <Briefcase size={12} className="mr-1" />
          {job.type}
        </Badge>
        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-800 dark:text-gray-300">
          <MapPin size={12} className="mr-1" />
          {job.location}
        </Badge>
        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-800 dark:text-gray-300">
          <Clock size={12} className="mr-1" />
          {job.postedTime}
        </Badge>
      </div>
      
      <div className="mb-2">
        <p className="text-brand-700 dark:text-brand-300 font-medium">{job.salary}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {job.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2.5 py-1 rounded-full bg-accent1-50 text-accent1-700 border border-accent1-100 dark:bg-accent1-900/10 dark:text-accent1-300 dark:border-accent1-800"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-3 mt-2"
        >
          <p>{job.description}</p>
        </motion.div>
      )}
      
      <div className="flex flex-col gap-2">
        <Button className="w-full" onClick={handleApply}>Apply Now</Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span>Show more</span>
              <ChevronDown size={16} />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default JobCard;
