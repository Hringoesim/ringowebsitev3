import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import WaitlistForm from '@/components/WaitlistForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Globe, Smartphone, Zap, CheckCircle, ArrowRight, Shield, Wifi, CreditCard } from 'lucide-react';

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <SEO
        title="Ringo - Global eSIM Connectivity | One Number, One Plan, Everywhere"
        description="Stay connected globally with Ringo's revolutionary eSIM service. €39.90/month for unlimited data, 300 minutes, and unlimited SMS worldwide. No roaming fees, no country passes needed."
      />
      <Navigation onWaitlistOpen={() => setIsWaitlistOpen(true)} />

      <main className="overflow-hidden">
        {/* Hero Section - Stripe Style */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden stripe-hero-bg">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            {/* Abstract background shapes */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-100/50 blur-3xl" />
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-pink-100/40 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2"></span>
                  Now in Pilot Program
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Global connectivity <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                    reimagined.
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  One eSIM. One flat rate. Unlimited data in 190+ countries.
                  Stop paying roaming fees and start connecting freely.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                    <DialogTrigger asChild>
                      <button className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
                        Join the Waitlist
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Join the Waitlist</DialogTitle>
                      </DialogHeader>
                      <WaitlistForm />
                    </DialogContent>
                  </Dialog>
                  <button
                    className="btn-secondary text-lg px-8 py-4"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing
                  </button>
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <p>Trusted by 2,000+ early access users</p>
                </div>
              </div>

              <div className="relative lg:h-[600px] w-full flex items-center justify-center">
                {/* 3D-ish Card Stack Visualization */}
                <div className="relative w-full max-w-md aspect-[3/4] perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl transform rotate-y-12 rotate-z-6 border border-slate-700/50 p-6 flex flex-col justify-between text-white z-10 transition-transform hover:rotate-y-0 hover:rotate-z-0 duration-500">
                    <div className="flex justify-between items-start">
                      <Wifi className="h-8 w-8 text-orange-500" />
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">5G Active</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">Unlimited</div>
                      <div className="text-slate-400 text-sm">Global Data</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-pink-500" />
                      </div>
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>Usage</span>
                        <span>75GB / ∞</span>
                      </div>
                    </div>
                  </div>

                  {/* Background decoration card */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform translate-x-12 translate-y-12 -z-10 border border-slate-200 p-6 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Stripe Style */}
        <section className="py-24 bg-slate-50 section-angle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Everything you need to stay connected.
              </h3>
              <p className="text-xl text-slate-600">
                We've removed the complexity of international roaming. No more SIM swapping, no more hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                  title: "Global Coverage",
                  desc: "Instant access to top-tier networks in over 190 countries. Your phone works where you do."
                },
                {
                  icon: Zap,
                  color: "text-orange-500",
                  bg: "bg-orange-50",
                  title: "Zero Roaming Fees",
                  desc: "Forget about bill shock. Pay one flat monthly rate for truly unlimited global access."
                },
                {
                  icon: Shield,
                  color: "text-green-500",
                  bg: "bg-green-50",
                  title: "Secure & Private",
                  desc: "Enterprise-grade security for your data. Safer than public Wi-Fi, easier than a local SIM."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
                  <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Clean & Modern */}
        <section id="pricing" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Simple, transparent pricing.
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  No contracts, no hidden fees. Cancel anytime. Just pure connectivity.
                </p>

                <div className="space-y-6">
                  {[
                    "Unlimited Data worldwide",
                    "300 Minutes of global calls",
                    "Unlimited global SMS",
                    "Keep your existing number",
                    "24/7 Priority Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 blur-3xl opacity-30 transform rotate-3 rounded-3xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                  <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-slate-900">Global Plan</h3>
                      <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-900">€39.90</span>
                      <span className="text-slate-500 font-medium">/month</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-2">Billed monthly. Cancel anytime.</p>
                  </div>
                  <div className="p-8">
                    <button
                      className="w-full btn-primary py-4 text-lg shadow-lg shadow-orange-500/20"
                      onClick={() => setIsWaitlistOpen(true)}
                    >
                      Get Started Now
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      No credit card required for waitlist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mesh Gradient */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Ready to experience the future of travel?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join thousands of digital nomads and business travelers who have switched to Ringo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-primary text-lg px-10 py-4 shadow-xl shadow-orange-500/20"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join the Waitlist
              </button>
              <button className="btn-secondary text-lg px-10 py-4 bg-white">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;


