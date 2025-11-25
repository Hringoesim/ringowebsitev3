import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import { Briefcase, Users, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Career = () => {
  const benefits = [
    { icon: <Zap className="h-6 w-6" />, title: "Remote Work", description: "Work from anywhere in the world" },
    { icon: <Users className="h-6 w-6" />, title: "Great Team", description: "Collaborate with talented people" },
    { icon: <Heart className="h-6 w-6" />, title: "Work-Life Balance", description: "Flexible hours and time off" },
    { icon: <Briefcase className="h-6 w-6" />, title: "Growth Opportunities", description: "Learn and grow your career" }
  ];

  return (
    <>
      <SEO 
        title="Careers - Join the Ringo Team"
        description="Join Ringo and help revolutionize global connectivity. We're looking for talented individuals to join our growing team."
      />
      <Navigation />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Join the Ringo Team
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Help us revolutionize global connectivity and make staying connected easier for everyone.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work at Ringo?</h2>
              <p className="text-lg text-gray-600">
                We're building the future of mobile connectivity, and we need passionate people to join us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4 text-orange-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
              <p className="mb-6 opacity-90">
                We're always looking for talented individuals. Even if you don't see a position that matches your skills, we'd love to hear from you.
              </p>
              <p className="mb-6 text-lg">
                Currently, we're not actively hiring, but we're always open to connecting with exceptional talent.
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => window.location.href = '/contact'}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What We're Looking For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3">Passion for Innovation</h3>
                <p className="text-gray-600">
                  We're disrupting the telecommunications industry. We need people who are excited about building the future.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Everything we do is centered around making our customers' lives easier. We need team members who share this commitment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3">Collaborative Spirit</h3>
                <p className="text-gray-600">
                  We work as a team. Great ideas come from great collaboration, and we value every team member's input.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3">Growth Mindset</h3>
                <p className="text-gray-600">
                  We're a fast-growing company. We need people who are adaptable, eager to learn, and ready to take on new challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Career;

