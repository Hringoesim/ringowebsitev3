import React, { Suspense, lazy } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load heavy components for better performance
const SavingsCalculator = lazy(() => import('@/components/SavingsCalculator'));
const CountrySelector = lazy(() => import('@/components/CountrySelector'));

// Loading component for suspense fallbacks
export const LoadingSpinner: React.FC<{ message?: string }> = ({ message = "Loading..." }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <Loader2 className="h-8 w-8 animate-spin text-orange-500 mb-4" />
    <p className="text-gray-600 animate-pulse">{message}</p>
  </div>
);

// Error boundary component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">Something went wrong. Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Optimized lazy loading wrapper
export const LazySection: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}> = ({ children, fallback, errorFallback }) => (
  <ErrorBoundary fallback={errorFallback}>
    <Suspense fallback={fallback || <LoadingSpinner />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export { SavingsCalculator, CountrySelector };