
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import JobCard from './JobCard';
import EmptyJobsState from './EmptyJobsState';

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

interface JobListProps {
  jobs: Job[];
  isLoading: boolean;
}

const JobList = ({ jobs, isLoading }: JobListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 text-gray-600 dark:text-gray-300 font-medium">
        {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} found
      </div>
      
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <EmptyJobsState />
      )}
    </motion.div>
  );
};

export default JobList;
