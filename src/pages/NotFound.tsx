import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />
      <Navigation />
      
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
              >
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 mb-4">Or visit one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/how-it-works" className="text-orange-600 hover:text-orange-700 font-medium">
                How It Works
              </Link>
              <Link to="/pricing" className="text-orange-600 hover:text-orange-700 font-medium">
                Pricing
              </Link>
              <Link to="/use-cases" className="text-orange-600 hover:text-orange-700 font-medium">
                Use Cases
              </Link>
              <Link to="/contact" className="text-orange-600 hover:text-orange-700 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;

