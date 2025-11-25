import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import ContactForm from '@/components/ContactForm';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Ringo eSIM Support"
        description="Get in touch with Ringo customer support. Have questions? We're here to help with your eSIM needs."
      />
      <Navigation currentPage="contact" />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Have questions about Ringo? We'd love to hear from you!
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-lg p-3 mr-4">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:info@ringoesim.com" 
                        className="text-orange-600 hover:text-orange-700"
                      >
                        info@ringoesim.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-lg p-3 mr-4">
                      <MessageSquare className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Support</h3>
                      <p className="text-gray-600">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Why Contact Us?</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Questions about device compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Help with eSIM activation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Billing and account inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Business or partnership inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Feedback and suggestions</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;

