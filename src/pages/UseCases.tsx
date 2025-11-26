import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import WaitlistForm from '@/components/WaitlistForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Briefcase, Plane, Home, Users, Globe, Calculator, TrendingDown, AlertCircle } from 'lucide-react';

const UseCases = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<'eu-outside' | 'global'>('eu-outside');

  const carriers = {
    eu: [
      {
        name: "Deutsche Telekom (Germany)",
        basePlan: "€40/month",
        data: "€9.90/GB",
        voice: "€2.99/min",
        sms: "€0.69/msg",
        dayPass: "€4.99/day (Travel & Surf Pass)"
      },
      {
        name: "Orange (France)",
        basePlan: "€45/month",
        data: "€10.24/GB",
        voice: "€2.50/min",
        sms: "€0.60/msg",
        dayPass: "€8/day (Travel Europe/World Pass)"
      },
      {
        name: "Movistar (Spain)",
        basePlan: "€38/month",
        data: "€8.50/GB",
        voice: "€2.20/min",
        sms: "€0.50/msg",
        dayPass: "€6/day (Roaming Plus)"
      },
      {
        name: "KPN (Netherlands)",
        basePlan: "€42/month",
        data: "€10/GB",
        voice: "€2.75/min",
        sms: "€0.65/msg",
        dayPass: "€7/day (Wereldpas)"
      }
    ],
    nonEu: [
      {
        name: "AT&T (USA)",
        basePlan: "$65/month (€60)",
        data: "$10/GB (€9.20)",
        voice: "$10/min (€9.20)",
        sms: "$0.50/SMS (€0.46)",
        dayPass: "$12/day (€11) International Day Pass"
      },
      {
        name: "Verizon (USA)",
        basePlan: "$70/month (€64)",
        data: "$20/GB",
        voice: "$10/min",
        sms: "$0.50/SMS",
        dayPass: "$12/day (€11) TravelPass"
      },
      {
        name: "T-Mobile (USA)",
        basePlan: "$65/month (€60)",
        data: "2G speeds (slow) or $5/day",
        voice: "Included (slow)",
        sms: "Included",
        dayPass: "$35/month international pass"
      },
      {
        name: "EE (UK)",
        basePlan: "£40/month (€47)",
        data: "Included in pass",
        voice: "Included in pass",
        sms: "Included in pass",
        dayPass: "£2/day (Europe), £6/day (Worldwide)"
      },
      {
        name: "Vodafone (UK)",
        basePlan: "£35/month (€41)",
        data: "€10/GB (pay-per-use)",
        voice: "€6/min (pay-per-use)",
        sms: "Included in pass",
        dayPass: "£2/day (Europe), £6/day (Worldwide)"
      },
      {
        name: "Telstra (Australia)",
        basePlan: "AU$65/month (€40)",
        data: "AU$10/GB",
        voice: "AU$3/min",
        sms: "Included in pass",
        dayPass: "AU$10/day (€6.20) International Day Pass"
      }
    ]
  };

  const ringoPricing = [
    { duration: "1-3 days", plan: "DayPass", price: "€3.90/day" },
    { duration: "4-7 days", plan: "Week Explorer", price: "€19.90" },
    { duration: "8-30 days", plan: "Nomad", price: "€34.90/month" }
  ];

  const calculateSavings = (days: number, carrier: string) => {
    // Example calculation for a typical usage scenario
    const carrierCost = days * 7; // Average €7/day with pass
    const ringoCost = days <= 3 ? days * 3.90 : days <= 7 ? 19.90 : 34.90;
    return Math.round(carrierCost - ringoCost);
  };

  return (
    <>
      <SEO
        title="Use Cases & Pricing Comparison - Ringo vs Traditional Carriers"
        description="Compare Ringo eSIM pricing with traditional carriers. See how much you can save on international roaming with our transparent pricing."
      />
      <Navigation currentPage="use-cases" onWaitlistOpen={() => setIsWaitlistOpen(true)} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800 mb-6">
                <Calculator className="h-4 w-4 mr-2" />
                Real Carrier Pricing Comparison
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Stop paying <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">roaming fees</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                See exactly how much you'll save compared to traditional carriers when traveling internationally.
              </p>
            </div>
          </div>
        </section>

        {/* Scenario Selector */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedScenario('eu-outside')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedScenario === 'eu-outside'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                EU Residents Traveling Outside EU
              </button>
              <button
                onClick={() => setSelectedScenario('global')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedScenario === 'global'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Global Travelers
              </button>
            </div>
          </div>
        </section>

        {/* EU Carriers Pricing */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                EU Carrier Rates (Traveling Outside EU)
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                These are the actual rates charged by major European carriers when you travel outside the EU.
                <span className="font-semibold text-orange-600"> You still pay your base plan!</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {carriers.eu.map((carrier, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{carrier.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <span className="text-slate-600">Base Plan</span>
                      <span className="font-semibold text-slate-900">{carrier.basePlan}</span>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Data</span>
                        <span className="font-semibold text-red-700">{carrier.data}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Voice</span>
                        <span className="font-semibold text-red-700">{carrier.voice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">SMS</span>
                        <span className="font-semibold text-red-700">{carrier.sms}</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                      <div className="text-xs text-orange-700 font-medium mb-1">Day Pass Option</div>
                      <div className="text-sm font-semibold text-orange-900">{carrier.dayPass}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Non-EU Carriers */}
            <div className="text-center mb-12 mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Non-EU Carrier Rates
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                International roaming rates from carriers in the USA, UK, and Australia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carriers.nonEu.map((carrier, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{carrier.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <span className="text-sm text-slate-600">Base Plan</span>
                      <span className="font-semibold text-sm text-slate-900">{carrier.basePlan}</span>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-600">Data</span>
                        <span className="font-semibold text-xs text-red-700">{carrier.data}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-600">Voice</span>
                        <span className="font-semibold text-xs text-red-700">{carrier.voice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-600">SMS</span>
                        <span className="font-semibold text-xs text-red-700">{carrier.sms}</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-2">
                      <div className="text-xs font-semibold text-orange-900">{carrier.dayPass}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ringo Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 mb-4">
                <TrendingDown className="h-4 w-4 mr-2" />
                Save up to 80% on roaming
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ringo's Simple Pricing
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                No base plan required. No hidden fees. Just pay for what you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {ringoPricing.map((plan, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border-2 border-orange-200">
                  <div className="text-sm font-semibold text-orange-600 mb-2">{plan.duration}</div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</div>
                  <div className="text-3xl font-bold text-orange-600 mb-4">{plan.price}</div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Unlimited Data
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      300 Minutes
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Unlimited SMS
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      190+ Countries
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Port Your Number & Cancel Your Carrier</h3>
                  <p className="text-blue-800">
                    Keep your existing phone number and cancel your expensive carrier plan entirely.
                    With Ringo, you can save <span className="font-bold">€300-€600 per year</span> by eliminating
                    your base carrier costs while getting better global coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Calculator Example */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Real Savings Example
              </h2>
              <p className="text-lg text-slate-600">
                2-week trip to Asia with typical usage (5GB data, 100 minutes, 50 SMS)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-6">Traditional Carrier (Deutsche Telekom)</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Base Plan (still charged)</span>
                    <span className="font-semibold">€40.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">14-day Travel Pass</span>
                    <span className="font-semibold">€69.86</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Extra data charges</span>
                    <span className="font-semibold">€19.80</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Voice overages</span>
                    <span className="font-semibold">€29.90</span>
                  </div>
                </div>
                <div className="border-t-2 border-red-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">Total Cost</span>
                    <span className="text-3xl font-bold text-red-700">€159.56</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-6">Ringo eSIM</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Nomad Plan (8-30 days)</span>
                    <span className="font-semibold">€34.90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Unlimited Data</span>
                    <span className="font-semibold text-green-600">€0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">300 Minutes Included</span>
                    <span className="font-semibold text-green-600">€0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Unlimited SMS</span>
                    <span className="font-semibold text-green-600">€0.00</span>
                  </div>
                </div>
                <div className="border-t-2 border-green-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-slate-900">Total Cost</span>
                    <span className="text-3xl font-bold text-green-700">€34.90</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 text-center">
                    <div className="text-sm text-green-700 font-medium">You Save</div>
                    <div className="text-2xl font-bold text-green-800">€124.66 (78%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Overpaying?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of travelers who have switched to Ringo and are saving hundreds of euros per year.
            </p>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="btn-primary text-lg px-10 py-4 shadow-xl shadow-orange-500/20"
            >
              Join the Waitlist
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
          </DialogHeader>
          <WaitlistForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UseCases;
