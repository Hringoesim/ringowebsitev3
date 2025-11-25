import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import { Briefcase, Plane, Home, Users, Globe } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Frequent Travelers",
      description: "Stay connected across continents without switching SIM cards or worrying about roaming charges.",
      benefits: [
        "No need to buy local SIM cards",
        "Same number works everywhere",
        "Instant connectivity upon arrival"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Professionals",
      description: "Reliable connectivity for remote work, video calls, and business communications worldwide.",
      benefits: [
        "Professional number for business",
        "Reliable data for video calls",
        "Seamless international communication"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Digital Nomads",
      description: "Perfect for location-independent workers who need consistent internet access wherever they go.",
      benefits: [
        "Unlimited data for remote work",
        "No country-specific restrictions",
        "Cost-effective global solution"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "International Students",
      description: "Affordable connectivity for students studying abroad, keeping in touch with family and friends.",
      benefits: [
        "Budget-friendly monthly plan",
        "Stay connected with home country",
        "Easy setup and management"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Expatriates",
      description: "Maintain your home number while living abroad, with seamless connectivity in your new country.",
      benefits: [
        "Keep your existing number",
        "Local and international coverage",
        "No need for multiple SIM cards"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Use Cases - Who Benefits from Ringo eSIM"
        description="Discover how Ringo eSIM benefits travelers, business professionals, digital nomads, students, and expatriates with global connectivity."
      />
      <Navigation currentPage="use-cases" />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Perfect For Everyone
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Whether you're a frequent traveler, digital nomad, or living abroad, Ringo keeps you connected.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4 text-orange-600">
                    {useCase.icon}
                  </div>
                  <h2 className="text-xl font-bold mb-3">{useCase.title}</h2>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of users who trust Ringo for their global connectivity needs.
            </p>
            <a 
              href="/#pricing" 
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              View Pricing
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default UseCases;

