import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Ringo eSIM"
        description="Read Ringo's privacy policy to understand how we collect, use, and protect your personal information."
      />
      <Navigation />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At Ringo, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our eSIM service.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Account credentials</li>
              <li>Device information and eSIM activation data</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect certain information about your use of our service, including:</p>
            <ul>
              <li>Data usage statistics</li>
              <li>Call and SMS logs</li>
              <li>Device and network information</li>
              <li>Location data (for service provision)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2>Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul>
              <li>With service providers who assist us in operating our service</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate data</li>
              <li>The right to erasure</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:info@ringoesim.com" className="text-orange-600 hover:text-orange-700">info@ringoesim.com</a><br />
              Website: <a href="/contact" className="text-orange-600 hover:text-orange-700">Contact Form</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;

