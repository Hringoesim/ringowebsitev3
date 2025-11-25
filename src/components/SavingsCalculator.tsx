import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from 'lucide-react';

// Simplified carrier data with realistic roaming pass prices
const CARRIERS = [
  { name: "Verizon (US)", flag: "🇺🇸", dailyPass: 12, region: "USA" },
  { name: "T-Mobile (US)", flag: "🇺🇸", dailyPass: 15, region: "USA" },
  { name: "Vodafone (UK)", flag: "🇬🇧", dailyPass: 8, region: "Europe" },
  { name: "Three (UK)", flag: "🇬🇧", dailyPass: 5, region: "Europe" },
  { name: "Orange (France)", flag: "🇫🇷", dailyPass: 10, region: "Europe" },
  { name: "Telekom (Germany)", flag: "🇩🇪", dailyPass: 12, region: "Europe" },
  { name: "Rogers (Canada)", flag: "🇨🇦", dailyPass: 14, region: "Canada" },
  { name: "Telstra (Australia)", flag: "🇦🇺", dailyPass: 10, region: "Australia" },
];

const SavingsCalculator: React.FC = () => {
  const [selectedCarrier, setSelectedCarrier] = useState(CARRIERS[0]);
  const [tripDays, setTripDays] = useState(7);
  const [ringoOption, setRingoOption] = useState<'monthly' | 'daily'>('daily');

  // Calculate costs
  const traditionalCost = selectedCarrier.dailyPass * tripDays;
  const ringoCost = ringoOption === 'monthly' ? 39.90 : 4.90 * tripDays;
  const savings = Math.max(0, traditionalCost - ringoCost);
  const savingsPercentage = traditionalCost > 0 ? ((savings / traditionalCost) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          💰 Quick Savings Calculator
        </h2>
        <p className="text-lg text-gray-600">
          See how much you save with Ringo vs traditional roaming passes
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calculate Your Savings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Controls */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Carrier Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Carrier</label>
              <Select 
                value={selectedCarrier.name} 
                onValueChange={(value) => {
                  const carrier = CARRIERS.find(c => c.name === value);
                  if (carrier) setSelectedCarrier(carrier);
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CARRIERS.map((carrier) => (
                    <SelectItem key={carrier.name} value={carrier.name}>
                      <div className="flex items-center gap-2">
                        <span>{carrier.flag}</span>
                        <span>{carrier.name}</span>
                        <Badge variant="outline" className="text-xs">
                          €{carrier.dailyPass}/day
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Trip Duration */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Trip Duration</label>
              <Select 
                value={tripDays.toString()} 
                onValueChange={(value) => setTripDays(parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 days</SelectItem>
                  <SelectItem value="7">1 week</SelectItem>
                  <SelectItem value="14">2 weeks</SelectItem>
                  <SelectItem value="21">3 weeks</SelectItem>
                  <SelectItem value="30">1 month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ringo Option */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Ringo Plan</label>
              <Select 
                value={ringoOption} 
                onValueChange={(value: 'monthly' | 'daily') => setRingoOption(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Day Pass (€4.90/day)</SelectItem>
                  <SelectItem value="monthly">Monthly (€39.90/month)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {/* Traditional Cost */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-red-800 mb-2">{selectedCarrier.name}</div>
                <div className="text-2xl font-bold text-red-600 mb-1">
                  €{traditionalCost}
                </div>
                <div className="text-xs text-red-600">
                  {tripDays} days × €{selectedCarrier.dailyPass}/day
                </div>
              </CardContent>
            </Card>

            {/* Ringo Cost */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-green-800 mb-2">
                  Ringo {ringoOption === 'monthly' ? 'Monthly' : 'Day Pass'}
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  €{ringoCost.toFixed(2)}
                </div>
                <div className="text-xs text-green-600">
                  {ringoOption === 'monthly' 
                    ? 'Fixed monthly rate' 
                    : `${tripDays} days × €4.90/day`
                  }
                </div>
              </CardContent>
            </Card>

            {/* Savings */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-blue-800 mb-2">You Save</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  €{savings.toFixed(2)}
                </div>
                <div className="text-xs text-blue-600">
                  {savingsPercentage.toFixed(0)}% savings
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendation */}
          {tripDays >= 8 && ringoOption === 'daily' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Tip:</strong> For trips longer than 8 days, the monthly plan (€39.90) 
                  is more cost-effective than day passes (€{(4.90 * tripDays).toFixed(2)}).
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8"
              onClick={() => {
                // Scroll to waitlist or open waitlist dialog
                const waitlistButton = document.querySelector('[data-waitlist-trigger]') as HTMLElement;
                if (waitlistButton) {
                  waitlistButton.click();
                } else {
                  // Fallback: scroll to top where join waitlist button is
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Save €{savings.toFixed(0)} - Join Waitlist! 🚀
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="mt-6">
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-800">
                <strong>Pricing Projection:</strong> Ringo pricing is projected for the upcoming product. 
                Traditional carrier rates are typical roaming pass prices and may vary by destination and plan.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SavingsCalculator;