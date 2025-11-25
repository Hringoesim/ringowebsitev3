import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEOComponents';
import { CheckCircle, XCircle } from 'lucide-react';

const DeviceCompatibility = () => {
  const compatibleDevices = [
    {
      brand: "Apple iPhone",
      models: [
        "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
        "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
        "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
        "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
        "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
        "iPhone XS Max", "iPhone XS", "iPhone XR"
      ]
    },
    {
      brand: "Samsung",
      models: [
        "Galaxy S24 series", "Galaxy S23 series", "Galaxy S22 series",
        "Galaxy S21 series", "Galaxy S20 series",
        "Galaxy Note 20 series", "Galaxy Note 10 series",
        "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3",
        "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3"
      ]
    },
    {
      brand: "Google Pixel",
      models: [
        "Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7",
        "Pixel 6 Pro", "Pixel 6", "Pixel 6a",
        "Pixel 5", "Pixel 4", "Pixel 3"
      ]
    },
    {
      brand: "Other Android",
      models: [
        "OnePlus 11", "OnePlus 10 Pro", "OnePlus 9 Pro",
        "Motorola Razr 2023", "Motorola Edge+",
        "Huawei P40 Pro", "Huawei Mate 40 Pro",
        "Xiaomi 13 Pro", "Xiaomi 12 Pro"
      ]
    }
  ];

  const requirements = [
    "Your device must be unlocked (not carrier-locked)",
    "Your device must support eSIM technology",
    "Your device must be running the latest or recent OS version",
    "You must have an active internet connection for initial setup"
  ];

  return (
    <>
      <SEO 
        title="Device Compatibility - Ringo eSIM Supported Devices"
        description="Check if your device is compatible with Ringo eSIM. See our list of supported iPhone, Android, and other eSIM-enabled devices."
      />
      <Navigation />
      
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Device Compatibility
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Check if your device supports Ringo eSIM technology
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Supported Devices</h2>
              <p className="text-gray-600 mb-8">
                Ringo eSIM works with most modern smartphones that support eSIM technology. Below is a comprehensive list of compatible devices.
              </p>
            </div>

            <div className="space-y-8">
              {compatibleDevices.map((device, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4">{device.brand}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {device.models.map((model, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{model}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Requirements</h2>
            <div className="space-y-4 mb-8">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Not sure if your device is compatible?</h3>
              <p className="text-gray-700 mb-4">
                If you don't see your device listed above, it may still be compatible. Most devices released in the last 3-4 years with eSIM support should work with Ringo.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us to Verify
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">How to Check eSIM Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">iPhone</h3>
                <p className="text-gray-600 mb-2">
                  Go to <strong>Settings → Cellular → Add Cellular Plan</strong>
                </p>
                <p className="text-gray-600">
                  If you see "Add Cellular Plan" option, your iPhone supports eSIM.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Android</h3>
                <p className="text-gray-600 mb-2">
                  Go to <strong>Settings → Network & Internet → Mobile network</strong>
                </p>
                <p className="text-gray-600">
                  Look for "Add carrier" or "Download a SIM" option. If available, your device supports eSIM.
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

export default DeviceCompatibility;

