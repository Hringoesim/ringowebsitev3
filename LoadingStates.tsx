import React from 'react';
import { Loader2, Wifi, Globe, Zap } from 'lucide-react';

interface LoadingStateProps {
  type?: 'spinner' | 'skeleton' | 'pulse' | 'dots';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  type = 'spinner', 
  message, 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  const containerClasses = {
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12'
  };

  if (type === 'skeleton') {
    return (
      <div className={`animate-pulse space-y-4 ${containerClasses[size]} ${className}`}>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`flex items-center justify-center ${containerClasses[size]} ${className}`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`flex flex-col items-center justify-center ${containerClasses[size]} ${className}`}>
        <div className="flex space-x-1 mb-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        {message && <p className="text-gray-600 text-sm">{message}</p>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${containerClasses[size]} ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-orange-500 mb-4`} />
      {message && <p className="text-gray-600 animate-pulse">{message}</p>}
    </div>
  );
};

// Animated icons for different states
export const AnimatedIcon: React.FC<{ 
  type: 'connecting' | 'success' | 'error' | 'loading';
  size?: 'sm' | 'md' | 'lg';
}> = ({ type, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  switch (type) {
    case 'connecting':
      return <Wifi className={`${sizeClasses[size]} text-blue-500 animate-pulse`} />;
    case 'success':
      return <Globe className={`${sizeClasses[size]} text-green-500 animate-bounce`} />;
    case 'error':
      return <Zap className={`${sizeClasses[size]} text-red-500 animate-pulse`} />;
    case 'loading':
      return <Loader2 className={`${sizeClasses[size]} text-orange-500 animate-spin`} />;
    default:
      return <Loader2 className={`${sizeClasses[size]} text-gray-500 animate-spin`} />;
  }
};

// Progress indicator
export const ProgressIndicator: React.FC<{
  progress: number;
  message?: string;
  showPercentage?: boolean;
}> = ({ progress, message, showPercentage = true }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        {message && <span className="text-sm text-gray-600">{message}</span>}
        {showPercentage && <span className="text-sm font-medium text-gray-900">{Math.round(progress)}%</span>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        ></div>
      </div>
    </div>
  );
};