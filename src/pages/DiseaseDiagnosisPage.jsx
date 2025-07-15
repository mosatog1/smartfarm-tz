import React from 'react';

export default function DiseaseDiagnosisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">Crop Health Diagnosis</h1>
        
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-red-800">AI-Powered Disease Detection</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Upload Crop Photos</h3>
              <p className="text-gray-700 mb-4">
                Take photos of your crops and let our AI analyze them for diseases and pests.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Upload Photo
              </button>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Get Treatment Advice</h3>
              <p className="text-gray-700 mb-4">
                Receive personalized recommendations for treating detected diseases.
              </p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Common Crop Diseases</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">Leaf Spot</h4>
                <p className="text-sm text-gray-600">Common fungal disease affecting leaves</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">Rust</h4>
                <p className="text-sm text-gray-600">Fungal infection causing orange spots</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">Blight</h4>
                <p className="text-sm text-gray-600">Rapid plant tissue death</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">AI diagnosis feature is coming soon. Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
