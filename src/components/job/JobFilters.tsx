
import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface JobFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedRole: string;
  setSelectedRole: (value: string) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  isRemote: boolean;
  setIsRemote: (value: boolean) => void;
}

const JobFilters = ({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  selectedLocation,
  setSelectedLocation,
  isRemote,
  setIsRemote,
}: JobFiltersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-4 md:p-6 mb-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input 
            type="text" 
            placeholder="Job title, company, or skills" 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
              <SelectItem value="">All Roles</SelectItem>
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
              <SelectItem value="">All Locations</SelectItem>
              <SelectItem value="san francisco">San Francisco</SelectItem>
              <SelectItem value="new york">New York</SelectItem>
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
  );
};

export default JobFilters;
