
import React from 'react';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmptyJobsState = () => {
  return (
    <motion.div 
      className="text-center py-20 px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <SearchX size={32} className="text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">No jobs found</h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-6">
        We couldn't find any jobs matching your current filters. Try adjusting your search criteria or check back later for new opportunities.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="outline">Clear Filters</Button>
        <Button variant="default">Browse All Jobs</Button>
      </div>
    </motion.div>
  );
};

export default EmptyJobsState;
