
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserPlus, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { mockUsers } from '@/data/users';

interface User {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  location: string;
  skills: string[];
  connections: number;
}

const UserCard = ({ user }: { user: User }) => {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  
  const handleConnect = () => {
    if (!isConnected) {
      setIsConnected(true);
      toast({
        title: "Connection Request Sent",
        description: `You sent a connection request to ${user.name}`,
      });
    }
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <motion.div 
      className="profile-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center mb-4">
        <Avatar className="h-12 w-12 mr-3">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.role} at {user.company}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">{user.location}</p>
        <p className="text-sm text-gray-500">{user.connections} connections</p>
      </div>
      
      <div className="mb-5 flex flex-wrap gap-1.5">
        {user.skills.slice(0, 3).map((skill, index) => (
          <Badge key={index} variant="secondary" className="font-normal">
            {skill}
          </Badge>
        ))}
        {user.skills.length > 3 && (
          <Badge variant="outline" className="font-normal">
            +{user.skills.length - 3} more
          </Badge>
        )}
      </div>
      
      <Button 
        variant={isConnected ? "secondary" : "default"}
        className="w-full"
        onClick={handleConnect}
        disabled={isConnected}
      >
        {isConnected ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Connected
          </>
        ) : (
          <>
            <UserPlus className="mr-2 h-4 w-4" />
            Connect
          </>
        )}
      </Button>
    </motion.div>
  );
};

const Networking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFilteredUsers(mockUsers as User[]);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (searchTerm) {
      const results = (mockUsers as User[]).filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredUsers(results);
    } else {
      setFilteredUsers(mockUsers as User[]);
    }
  }, [searchTerm]);
  
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Grow Your Professional Network</h1>
          <p className="text-muted-foreground">
            Connect with like-minded professionals in your industry
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input 
            type="text" 
            placeholder="Search by name, role, company, or skills" 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500"></div>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-600">
              {filteredUsers.length} {filteredUsers.length === 1 ? 'professional' : 'professionals'} found
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredUsers.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </AnimatePresence>
            </div>
            
            {filteredUsers.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-semibold mb-2">No professionals found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or check back later
                </p>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Networking;
