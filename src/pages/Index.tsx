import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import WaitlistForm from '@/components/WaitlistForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Globe, Smartphone, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Ringo - Global eSIM Connectivity | One Number, One Plan, Everywhere"
        description="Stay connected globally with Ringo's revolutionary eSIM service. €39.90/month for unlimited data, 300 minutes, and unlimited SMS worldwide. No roaming fees, no country passes needed."
      />
      <Navigation onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                One Number. One Plan. Everywhere.
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Stay connected globally with Ringo's revolutionary eSIM service. No roaming fees, no country passes needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg px-8 py-6"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Join the Waitlist</DialogTitle>
                    </DialogHeader>
                    <WaitlistForm />
                  </DialogContent>
                </Dialog>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Ringo?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <Globe className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                <p className="text-gray-600">Connect in over 190 countries with one simple plan.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl font-semibold mb-2">No Roaming Fees</h3>
                <p className="text-gray-600">One flat rate worldwide. No surprises, no hidden costs.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                <p className="text-gray-600">Activate your eSIM in minutes. No physical SIM needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Global Plan</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">€39.90</div>
                  <p className="text-gray-600">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>300 Minutes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Unlimited SMS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>190+ Countries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>No Roaming Fees</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stay Connected?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of travelers who trust Ringo for their global connectivity needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => setIsWaitlistOpen(true)}
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;

