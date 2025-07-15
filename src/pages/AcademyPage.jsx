import React from 'react';

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">SmartFarm Academy</h1>
        
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Learn Modern Farming Techniques</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Crop Management</h3>
              <p className="text-gray-700 mb-4">
                Learn best practices for planting, growing, and harvesting your crops.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Start Learning
              </button>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Sustainable Farming</h3>
              <p className="text-gray-700 mb-4">
                Discover eco-friendly farming methods that protect the environment.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Explore
              </button>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-700">Technology in Agriculture</h3>
              <p className="text-gray-700 mb-4">
                Learn how to use modern technology to improve your farming.
              </p>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                Discover
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">Educational content and courses are coming soon. Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
