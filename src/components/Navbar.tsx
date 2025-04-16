
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="sticky top-0 z-50 glass-darker py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-xl">
            PC
          </div>
          <span className="ml-2 text-xl font-bold text-brand-700 hidden sm:inline-block dark:text-brand-300">ProConnect</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/">
            <Button variant={isActive('/') ? "default" : "ghost"} size="sm">
              Home
            </Button>
          </Link>
          <Link to="/profile-builder">
            <Button variant={isActive('/profile-builder') ? "default" : "ghost"} size="sm">
              Profile Builder
            </Button>
          </Link>
          <Link to="/job-board">
            <Button variant={isActive('/job-board') ? "default" : "ghost"} size="sm">
              Job Board
            </Button>
          </Link>
          <Link to="/networking">
            <Button variant={isActive('/networking') ? "default" : "ghost"} size="sm">
              Networking
            </Button>
          </Link>
        </div>
        
        {/* Search - Desktop */}
        <div className="hidden md:flex items-center relative max-w-md mx-8">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-2 pl-10 pr-4 border rounded-full border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        
        {/* User Actions - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} className="icon-primary" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-accent2-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <MessageCircle size={20} className="icon-primary" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-accent2-500 rounded-full"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full flex gap-2 items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="font-medium">John</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Connections</DropdownMenuItem>
              <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full py-2 pl-10 pr-4 border rounded-full border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant={isActive('/') ? "default" : "ghost"} 
                  className="w-full justify-start"
                >
                  Home
                </Button>
              </Link>
              <Link to="/profile-builder" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant={isActive('/profile-builder') ? "default" : "ghost"} 
                  className="w-full justify-start"
                >
                  Profile Builder
                </Button>
              </Link>
              <Link to="/job-board" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant={isActive('/job-board') ? "default" : "ghost"} 
                  className="w-full justify-start"
                >
                  Job Board
                </Button>
              </Link>
              <Link to="/networking" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant={isActive('/networking') ? "default" : "ghost"} 
                  className="w-full justify-start"
                >
                  Networking
                </Button>
              </Link>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-red-500">
                  <span>Log out</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
