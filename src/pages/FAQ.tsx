import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is an eSIM?",
      answer: "An eSIM (embedded SIM) is a digital SIM card that's built into your device. Unlike traditional SIM cards, you don't need a physical card - you simply download your eSIM profile and activate it on your device. eSIMs make it easy to switch between carriers and manage multiple phone numbers on one device."
    },
    {
      question: "Is my device compatible with eSIM?",
      answer: "Most modern smartphones support eSIM technology. This includes iPhone XS and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer, and many other recent Android devices. Check our Device Compatibility page for a complete list, or contact us if you're unsure about your device."
    },
    {
      question: "How do I activate my Ringo eSIM?",
      answer: "After signing up, you'll receive your eSIM profile via email or through the Ringo app. On iPhone, go to Settings > Cellular > Add Cellular Plan, then scan the QR code or enter the activation code. On Android, go to Settings > Network & Internet > Mobile network > Add carrier, then follow the prompts. The whole process takes just a few minutes."
    },
    {
      question: "Can I keep my existing phone number?",
      answer: "Yes! Ringo supports number porting, so you can transfer your existing phone number to Ringo. The porting process typically takes 1-3 business days. Alternatively, you can get a new number from Ringo and keep your old number active on another SIM card."
    },
    {
      question: "What happens if I exceed my data or minutes?",
      answer: "If you exceed your monthly allowance, you can purchase additional data or minutes at competitive rates. We'll notify you before you reach your limits so you can manage your usage. Unlimited SMS is truly unlimited with no overage charges."
    },
    {
      question: "Do I need to buy country-specific passes?",
      answer: "No! That's one of the best things about Ringo. Your Global Plan works in all 190+ countries we support - no need to purchase separate passes for different countries. One plan, one price, everywhere."
    },
    {
      question: "Can I use Ringo as my primary phone service?",
      answer: "Yes, many of our customers use Ringo as their primary mobile service. However, coverage quality may vary by location. We recommend checking coverage in your primary location before making the switch. You can always keep your existing service as a backup."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your Ringo subscription at any time through your account dashboard or by contacting customer support. There are no cancellation fees or penalties. Your service will remain active until the end of your current billing period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) and debit cards. Payment is processed securely and automatically each month. We're working on adding more payment options in the future."
    },
    {
      question: "Is there customer support available?",
      answer: "Yes! Our customer support team is available via email at info@ringoesim.com and through our contact form. We typically respond within 24 hours. We're also working on adding live chat support for even faster assistance."
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions about Ringo eSIM"
        description="Find answers to common questions about Ringo eSIM, device compatibility, activation, pricing, and more."
      />
      <Navigation />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700">
              Everything you need to know about Ringo eSIM
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;

