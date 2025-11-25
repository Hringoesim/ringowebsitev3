import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import { Smartphone, Download, Globe, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <>
      <SEO 
        title="How It Works - Ringo eSIM"
        description="Learn how Ringo's eSIM technology works. Simple setup, global coverage, and no physical SIM card needed."
      />
      <Navigation currentPage="about" />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              How Ringo Works
            </h1>
            <p className="text-xl text-center text-gray-700 mb-12">
              Getting started with Ringo is simple. Here's how our eSIM technology keeps you connected worldwide.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">1</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Sign Up & Choose Your Plan</h2>
                  <p className="text-gray-600 mb-4">
                    Create your Ringo account and select the Global Plan that fits your needs. No long-term contracts, cancel anytime.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Simple online registration</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Instant account activation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg p-8 text-center">
                    <Smartphone className="h-24 w-24 mx-auto text-orange-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="bg-pink-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-pink-600">2</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Download Your eSIM</h2>
                  <p className="text-gray-600 mb-4">
                    Receive your eSIM profile via email or through the Ringo app. Your device downloads the eSIM automatically - no physical card needed.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Compatible with eSIM-enabled devices</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Works on iPhone, Android, and more</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-8 text-center">
                    <Download className="h-24 w-24 mx-auto text-pink-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Activate & Connect</h2>
                  <p className="text-gray-600 mb-4">
                    Activate your eSIM in your device settings. Once activated, you're connected to our global network in over 190 countries.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Activation takes just minutes</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Keep your existing number or get a new one</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg p-8 text-center">
                    <Globe className="h-24 w-24 mx-auto text-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">No Physical SIM Card</h3>
                <p className="text-gray-600">Everything is digital. No waiting for mail, no visiting stores.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Instant Activation</h3>
                <p className="text-gray-600">Start using your eSIM immediately after download.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Multiple Profiles</h3>
                <p className="text-gray-600">Store multiple eSIM profiles on one device for different regions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Easy Management</h3>
                <p className="text-gray-600">Manage your plan, usage, and settings through our app or website.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HowItWorks;

