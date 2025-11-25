import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import WaitlistForm from '@/components/WaitlistForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Pricing - Ringo eSIM Plans"
        description="Simple, transparent pricing for global eSIM connectivity. €39.90/month for unlimited data, 300 minutes, and unlimited SMS worldwide."
      />
      <Navigation />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              One plan. One price. Global coverage. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-xl shadow-2xl p-8 border-2 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Global Plan</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-orange-500">€39.90</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">Billed monthly, cancel anytime</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Unlimited Data</span>
                      <p className="text-sm text-gray-600">High-speed data in 190+ countries</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">300 Minutes</span>
                      <p className="text-sm text-gray-600">Voice calls included monthly</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Unlimited SMS</span>
                      <p className="text-sm text-gray-600">Text anywhere in the world</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">190+ Countries</span>
                      <p className="text-sm text-gray-600">Global coverage included</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">No Roaming Fees</span>
                      <p className="text-sm text-gray-600">Same price everywhere you go</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Keep Your Number</span>
                      <p className="text-sm text-gray-600">Port your existing number or get a new one</p>
                    </div>
                  </li>
                </ul>

                <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg"
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
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Are there any hidden fees?</h3>
                <p className="text-gray-600">No. The price you see is the price you pay. No activation fees, no roaming charges, no surprise bills.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">Yes. There are no long-term contracts. Cancel your subscription at any time with no penalties.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">What happens if I exceed my minutes?</h3>
                <p className="text-gray-600">Additional minutes are available at competitive rates. You'll be notified before reaching your limit.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Is there a family plan?</h3>
                <p className="text-gray-600">Family plans and business solutions are coming soon. Contact us for more information.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;

