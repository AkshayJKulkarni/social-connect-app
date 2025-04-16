
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full p-8 glass rounded-xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">
            We encountered an error while loading this page
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg w-full mb-6 overflow-auto">
            <pre className="text-sm text-red-600 whitespace-pre-wrap break-words">
              {error.message}
            </pre>
          </div>
          
          <Button onClick={resetErrorBoundary}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
