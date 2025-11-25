import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NavigationProps {
  currentPage?: string;
  onWaitlistOpen?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onWaitlistOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Plans', path: '/#pricing', id: 'plans' },
    { name: 'Use Cases', path: '/use-cases', id: 'use-cases' },
    { name: 'About', path: '/how-it-works', id: 'about' },
    { name: 'Contact', path: '/contact', id: 'contact' }
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.includes('#pricing')) {
      // Handle pricing scroll
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Ringo
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  currentPage === item.id ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          {/* Desktop Join Waitlist Button */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
              onClick={onWaitlistOpen}
              data-waitlist-trigger
            >
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-orange-500 hover:bg-gray-50 rounded-md ${
                    currentPage === item.id ? 'text-orange-500 bg-orange-50' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onWaitlistOpen?.();
                  }}
                  data-waitlist-trigger
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;