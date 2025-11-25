import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Ringo eSIM"
        description="Read Ringo's terms of service to understand the rules and regulations for using our eSIM service."
      />
      <Navigation />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Ringo's eSIM service, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
            </p>

            <h2>Service Description</h2>
            <p>
              Ringo provides eSIM connectivity services, allowing users to access mobile data, voice, and SMS services globally. Our service includes:
            </p>
            <ul>
              <li>eSIM profile provisioning and activation</li>
              <li>Global mobile network connectivity</li>
              <li>Account management and billing services</li>
              <li>Customer support</li>
            </ul>

            <h2>Eligibility</h2>
            <p>
              To use Ringo's service, you must:
            </p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Have a compatible eSIM-enabled device</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
            </ul>

            <h2>Account Registration</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding your account password and for all activities that occur under your account.
            </p>

            <h2>Service Availability</h2>
            <p>
              While we strive to provide reliable service, we cannot guarantee uninterrupted or error-free service. Service availability may vary by location and may be affected by factors beyond our control, including network outages and device compatibility.
            </p>

            <h2>Billing and Payments</h2>
            <p>
              Our service is billed on a monthly basis. By subscribing, you agree to pay the fees associated with your chosen plan. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days' notice.
            </p>

            <h2>Cancellation</h2>
            <p>
              You may cancel your subscription at any time through your account dashboard or by contacting customer support. Cancellation will take effect at the end of your current billing period. No refunds will be provided for partial billing periods.
            </p>

            <h2>Acceptable Use</h2>
            <p>You agree not to use the service:</p>
            <ul>
              <li>For any illegal purpose or in violation of any laws</li>
              <li>To transmit harmful, offensive, or inappropriate content</li>
              <li>To interfere with or disrupt the service or servers</li>
              <li>To attempt to gain unauthorized access to any part of the service</li>
              <li>For any commercial purpose without our express written consent</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by Ringo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Ringo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Ringo from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the service or violation of these Terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;

