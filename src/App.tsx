
import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import LoadingFallback from './components/LoadingFallback';
import ErrorFallback from './components/ErrorFallback';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ProfileBuilder = lazy(() => import('./pages/ProfileBuilder'));
const JobBoard = lazy(() => import('./pages/JobBoard'));
const Networking = lazy(() => import('./pages/Networking'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Create a QueryClient instance outside the component
const queryClient = new QueryClient();

const AppContent = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-builder" element={<ProfileBuilder />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/networking" element={<Networking />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
