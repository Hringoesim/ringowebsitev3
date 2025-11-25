import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COMPETITOR_PRICING, type CarrierPricing } from '@/data/competitorPricing';
import { Smartphone, Music, Camera, Video, Mail, MessageSquare } from 'lucide-react';

// Data usage examples for easy understanding
const DATA_USAGE_EXAMPLES = [
  {
    icon: <Mail className="h-5 w-5" />,
    activity: "Send 1 email with photo",
    size: "2 MB",
    color: "text-blue-600"
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    activity: "WhatsApp messages (100)",
    size: "1 MB", 
    color: "text-green-600"
  },
  {
    icon: <Camera className="h-5 w-5" />,
    activity: "Upload 1 Instagram photo",
    size: "3 MB",
    color: "text-pink-600"
  },
  {
    icon: <Music className="h-5 w-5" />,
    activity: "Stream 1 song (Spotify)",
    size: "4 MB",
    color: "text-purple-600"
  },
  {
    icon: <Video className="h-5 w-5" />,
    activity: "Watch 1 min YouTube video",
    size: "10 MB",
    color: "text-red-600"
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    activity: "Video call (5 minutes)",
    size: "25 MB",
    color: "text-orange-600"
  }
];

const CountrySelector: React.FC = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedCarrier, setSelectedCarrier] = useState<CarrierPricing | null>(null);

  // Get unique origin countries
  const originCountries = Array.from(new Set(COMPETITOR_PRICING.map(c => c.originCountry)))
    .map(country => {
      const carrier = COMPETITOR_PRICING.find(c => c.originCountry === country);
      return {
        code: country,
        name: carrier?.name || country,
        flag: carrier?.flag || '🌍'
      };
    });

  // Get carriers for selected origin
  const availableCarriers = selectedOrigin 
    ? COMPETITOR_PRICING.filter(c => c.originCountry === selectedOrigin)
    : [];

  // Calculate costs for data usage examples
  const calculateExampleCosts = (carrier: CarrierPricing) => {
    return DATA_USAGE_EXAMPLES.map(example => {
      const sizeInMB = parseFloat(example.size.replace(' MB', ''));
      const cost = carrier.perMB * sizeInMB;
      return {
        ...example,
        cost: cost,
        formattedCost: cost < 0.01 ? '< €0.01' : `€${cost.toFixed(2)}`
      };
    });
  };

  const getRegionColor = (region: string) => {
    switch (region) {
      case 'Europe': 
      case 'EU': 
      case 'EuropeNonEU':
      case 'Nordics':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'USA':
      case 'NorthAmerica': 
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Asia':
      case 'AsiaHub': 
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Africa': 
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Gulf':
      case 'Oceania':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ⚙️ Customize Your Trip
        </h2>
        <p className="text-lg text-gray-600">
          Select your home country and carrier to see exact roaming costs with real-world examples
        </p>
      </div>

      {/* Country and Carrier Selection */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Your Home Country</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your country" />
              </SelectTrigger>
              <SelectContent>
                {originCountries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Your Carrier</CardTitle>
          </CardHeader>
          <CardContent>
            <Select 
              value={selectedCarrier?.name || ''} 
              onValueChange={(value) => {
                const carrier = availableCarriers.find(c => c.name === value);
                setSelectedCarrier(carrier || null);
              }}
              disabled={!selectedOrigin}
            >
              <SelectTrigger>
                <SelectValue placeholder={selectedOrigin ? "Choose your carrier" : "Select country first"} />
              </SelectTrigger>
              <SelectContent>
                {availableCarriers.map((carrier) => (
                  <SelectItem key={carrier.name} value={carrier.name}>
                    <div className="flex items-center gap-2">
                      <span>{carrier.flag}</span>
                      <span>{carrier.name}</span>
                      <Badge className={getRegionColor(carrier.originRegion)}>
                        {carrier.originRegion}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Data Usage Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            📊 Easy Data Usage Examples
          </CardTitle>
          <p className="text-gray-600">Understanding how much data common activities use</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA_USAGE_EXAMPLES.map((example, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={example.color}>
                  {example.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{example.activity}</div>
                  <div className="text-xs text-gray-600">Uses {example.size}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected Carrier Analysis */}
      {selectedCarrier && (
        <Card className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="text-4xl">{selectedCarrier.flag}</span>
              <div>
                <div>{selectedCarrier.name} Roaming Analysis</div>
                <div className="text-sm font-normal text-gray-600">
                  Route: {selectedCarrier.originCountry} → International Destinations
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Traditional Carrier Costs */}
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  🚨 {selectedCarrier.name} Roaming Costs
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div><strong>Per MB:</strong></div>
                    <div className="text-red-600 font-bold">€{selectedCarrier.perMB.toFixed(3)}</div>
                    <div><strong>Per Minute:</strong></div>
                    <div className="text-red-600 font-bold">€{selectedCarrier.perMinute.toFixed(2)}</div>
                    <div><strong>Per SMS:</strong></div>
                    <div className="text-red-600 font-bold">€{selectedCarrier.perSMS.toFixed(2)}</div>
                  </div>
                  
                  <div className="bg-red-100 p-3 rounded mt-3">
                    <strong>Real Examples:</strong>
                    <div className="mt-2 space-y-1">
                      {calculateExampleCosts(selectedCarrier).slice(0, 3).map((example, index) => (
                        <div key={index} className="flex justify-between text-xs">
                          <span>{example.activity}:</span>
                          <span className="font-bold text-red-700">{example.formattedCost}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-600 mt-2">
                    <strong>Source:</strong> {selectedCarrier.source}
                    <br />
                    <strong>Updated:</strong> {selectedCarrier.lastUpdated}
                  </div>
                </div>
              </div>

              {/* Ringo Solution */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  ✨ Ringo Global Solution
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div><strong>Monthly Cost:</strong></div>
                    <div className="text-green-600 font-bold">€39.90*</div>
                    <div><strong>Data:</strong></div>
                    <div className="text-green-600 font-bold">Unlimited</div>
                    <div><strong>Calls:</strong></div>
                    <div className="text-green-600 font-bold">Included</div>
                    <div><strong>SMS:</strong></div>
                    <div className="text-green-600 font-bold">Included</div>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded mt-3">
                    <strong>Same Examples with Ringo:</strong>
                    <div className="mt-2 space-y-1">
                      {DATA_USAGE_EXAMPLES.slice(0, 3).map((example, index) => (
                        <div key={index} className="flex justify-between text-xs">
                          <span>{example.activity}:</span>
                          <span className="font-bold text-green-700">€0.00</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-xs text-green-600 mt-2">
                    *Projected pricing for upcoming product. Actual plans may vary.
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Cost Breakdown */}
            <div className="mt-6">
              <h4 className="font-bold text-gray-900 mb-4">💰 Complete Cost Breakdown</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-red-800 mb-2">{selectedCarrier.name} Costs:</h5>
                  <div className="space-y-2">
                    {calculateExampleCosts(selectedCarrier).map((example, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                        <div className="flex items-center gap-2">
                          <div className={example.color}>{example.icon}</div>
                          <span className="text-sm">{example.activity}</span>
                        </div>
                        <span className="font-bold text-red-600">{example.formattedCost}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-green-800 mb-2">Ringo Costs:</h5>
                  <div className="space-y-2">
                    {DATA_USAGE_EXAMPLES.map((example, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center gap-2">
                          <div className={example.color}>{example.icon}</div>
                          <span className="text-sm">{example.activity}</span>
                        </div>
                        <span className="font-bold text-green-600">€0.00</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Calculation */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">🎯 Your Potential Savings</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">
                    €{(selectedCarrier.perMB * 1024).toFixed(0)}
                  </div>
                  <div className="text-sm text-gray-600">Cost per GB with {selectedCarrier.name}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">€39.90</div>
                  <div className="text-sm text-gray-600">Ringo monthly cost*</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {selectedCarrier.perMB > 0.039 ? 
                      `${(((selectedCarrier.perMB * 1024 - 39.90) / (selectedCarrier.perMB * 1024)) * 100).toFixed(0)}%` : 
                      '0%'
                    }
                  </div>
                  <div className="text-sm text-gray-600">Potential savings</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8"
                asChild
              >
                <a href="/#pricing">
                  Join Waitlist - Save with Ringo! 🚀
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        <Card className="text-center p-4 bg-blue-50">
          <div className="text-2xl font-bold text-blue-600">{COMPETITOR_PRICING.length}</div>
          <div className="text-sm text-gray-600">Carriers Analyzed</div>
        </Card>
        <Card className="text-center p-4 bg-red-50">
          <div className="text-2xl font-bold text-red-600">
            €{Math.max(...COMPETITOR_PRICING.map(c => c.perMB * 1024)).toFixed(0)}
          </div>
          <div className="text-sm text-gray-600">Highest Cost per GB</div>
        </Card>
        <Card className="text-center p-4 bg-green-50">
          <div className="text-2xl font-bold text-green-600">€39.90*</div>
          <div className="text-sm text-gray-600">Ringo Fixed Price</div>
        </Card>
        <Card className="text-center p-4 bg-purple-50">
          <div className="text-2xl font-bold text-purple-600">
            {Math.max(...COMPETITOR_PRICING.map(c => 
              c.perMB > 0.039 ? ((c.perMB * 1024 - 39.90) / (c.perMB * 1024)) * 100 : 0
            )).toFixed(0)}%
          </div>
          <div className="text-sm text-gray-600">Max Savings</div>
        </Card>
      </div>
    </div>
  );
};

export default CountrySelector;