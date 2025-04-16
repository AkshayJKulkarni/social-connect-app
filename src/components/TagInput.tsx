
import React, { useState, KeyboardEvent, useRef } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface TagInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: string;
  maxTags?: number;
}

const TagInput: React.FC<TagInputProps> = ({ 
  tags, 
  setTags, 
  placeholder = "Add a tag...", 
  maxTags = 10 
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      e.preventDefault();
      if (tags.length < maxTags) {
        const newTag = input.trim();
        if (!tags.includes(newTag)) {
          setTags([...tags, newTag]);
        }
        setInput('');
      }
    } else if (e.key === 'Backspace' && input === '' && tags.length > 0) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };
  
  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
    inputRef.current?.focus();
  };
  
  return (
    <div 
      className="flex flex-wrap gap-2 p-2 border rounded-md focus-within:ring-2 focus-within:ring-brand-500/50 focus-within:border-brand-500"
      onClick={() => inputRef.current?.focus()}
    >
      {tags.map((tag, index) => (
        <div 
          key={index} 
          className="flex items-center bg-brand-100 text-brand-800 rounded-md px-2 py-1 text-sm"
        >
          <span>{tag}</span>
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="ml-1 text-brand-600 hover:text-brand-800 focus:outline-none"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={tags.length < maxTags ? placeholder : `Maximum ${maxTags} tags`}
        className="flex-1 min-w-[120px] border-none shadow-none focus-visible:ring-0 p-1 h-8"
        disabled={tags.length >= maxTags}
      />
    </div>
  );
};

export default TagInput;
