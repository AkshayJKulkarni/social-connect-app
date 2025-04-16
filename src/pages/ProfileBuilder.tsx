
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Upload, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import TagInput from '@/components/TagInput';

const ProfileBuilder = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [name, setName] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [generatedSummary, setGeneratedSummary] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your professional profile has been updated successfully.",
      });
      setIsLoading(false);
    }, 1500);
  };
  
  const generateAISummary = () => {
    if (!name || !bio || skills.length === 0) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in your name, bio, and at least 3 skills.",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const summaries = [
        `${name} is a skilled professional with expertise in ${skills.slice(0, 3).join(", ")}. With a proven track record in delivering high-quality results, they excel at problem-solving and collaboration.`,
        `A dedicated ${skills[0]} specialist with extensive experience in ${skills.slice(1, 3).join(" and ")}. ${name} is passionate about delivering innovative solutions and driving results.`,
        `${name} brings ${experience ? experience + ' years of' : 'valuable'} experience in ${skills.slice(0, 3).join(", ")}. Known for attention to detail and commitment to excellence, they are a valuable addition to any team.`
      ];
      
      const randomSummary = summaries[Math.floor(Math.random() * summaries.length)];
      setGeneratedSummary(randomSummary);
      setIsGenerating(false);
      
      toast({
        title: "AI Summary Generated",
        description: "Your professional summary has been created.",
      });
    }, 2000);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File Uploaded",
        description: `${selectedFile.name} has been attached to your profile.`,
      });
    }
  };
  
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Build Your Professional Profile</h1>
          <p className="text-muted-foreground">
            Create a compelling profile to showcase your skills and experience
          </p>
        </div>
        
        <div className="glass p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <TagInput 
                placeholder="Add skills and press Enter" 
                tags={skills}
                setTags={setSkills}
                maxTags={10}
              />
              <p className="text-xs text-muted-foreground">Add up to 10 skills that showcase your expertise</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Write a short professional bio..." 
                value={bio} 
                onChange={(e) => setBio(e.target.value)} 
                rows={4}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input 
                id="experience" 
                type="number" 
                placeholder="5" 
                min="0"
                max="50"
                value={experience} 
                onChange={(e) => setExperience(e.target.value)} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resume">Resume (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <input 
                  type="file" 
                  id="resume" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange}
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <span className="text-sm font-medium">
                      {file ? file.name : 'Click to upload your resume'}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC or DOCX (max 5MB)
                    </p>
                  </div>
                </label>
              </div>
            </div>
            
            {generatedSummary && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-brand-50 border border-brand-200 rounded-lg"
              >
                <h3 className="font-medium mb-2 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-brand-500" />
                  AI-Generated Summary
                </h3>
                <p className="text-sm">{generatedSummary}</p>
              </motion.div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="submit"
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Profile
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={generateAISummary}
                disabled={isGenerating}
                className="flex-1"
              >
                {isGenerating ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate AI Summary
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileBuilder;
