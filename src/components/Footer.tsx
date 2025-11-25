import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Ringo
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              One Number. One Plan. Everywhere.
            </p>
            <p className="text-gray-400 text-sm">
              Ringo lets you keep your existing phone number and route calls over data. One global plan, local-quality calls, and no surprise roaming bills.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><a href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:info@ringoesim.com" className="hover:text-white transition-colors">info@ringoesim.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Ringo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;