import React from 'react';

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Farm Marketplace</h1>
        
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-green-800">Connect with Buyers and Sellers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Sell Your Crops</h3>
              <p className="text-gray-700 mb-4">
                List your farm produce directly to buyers and get better prices for your harvest.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Start Selling
              </button>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Buy Farm Products</h3>
              <p className="text-gray-700 mb-4">
                Find quality farm products directly from farmers at competitive prices.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Browse Products
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">This marketplace feature is coming soon. Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
