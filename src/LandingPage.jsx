import React, { useState, useEffect } from 'react';
import logo from './images/logo.jpg';
import landing1 from './images/landing1.jpg';
import landing2 from './images/landing2.jpg';
import landing3 from './images/landing3.jpg';
import landing4 from './images/landing4.jpg';
import landing5 from './images/landing5.jpg';

export default function LandingPage() {
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ONLY THIS LINE ADDED

  const bgImages = [landing1, landing2, landing3, landing4, landing5];
  const fullText = "Empowering Tanzanian Farmers with Smart Agriculture";

  const toggleLogoModal = () => {
    setIsLogoModalOpen(!isLogoModalOpen);
  };

  // ONLY THIS FUNCTION ADDED
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Background slideshow effect with enhanced transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Enhanced typewriter effect with completion state
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  // Reset animation when text changes
  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText('');
    setIsTypingComplete(false);
  }, [fullText]);

  return (
    <div className="min-h-screen text-gray-800 relative overflow-hidden">
      {/* Logo Modal - EXACTLY THE SAME */}
      {isLogoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg transition-all duration-300"
          onClick={toggleLogoModal}
        >
          <div className="relative max-w-2xl p-4" onClick={e => e.stopPropagation()}>
            <img 
              src={logo} 
              alt="SmartFarm Logo" 
              className="max-h-[90vh] max-w-full rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
            <button 
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-xl hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleLogoModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Background Slideshow - EXACTLY THE SAME */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {bgImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            style={{ 
              backgroundImage: `url(${image})`,
              filter: 'blur(4px) brightness(0.9)'
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </div>

      {/* Content Container - EXACTLY THE SAME STRUCTURE */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header - ONLY MODIFIED TO ADD HAMBURGER */}
        <header className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-lg shadow-lg sticky top-0 transition-all duration-300 hover:bg-white/20">
          <div className="flex items-center">
            <button 
              onClick={toggleLogoModal} 
              className="focus:outline-none transform transition-transform duration-300 hover:scale-110"
            >
              <img 
                src={logo} 
                alt="SmartFarm Logo" 
                className="h-12 w-12 rounded-full object-cover mr-3 border-2 border-white/80 shadow-lg"
              />
            </button>
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">SmartFarm TZ</h1>
          </div>

          {/* Desktop Navigation - EXACTLY THE SAME */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="/" className="text-white/90 hover:text-white transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/weather" className="text-white/90 hover:text-white transition-colors duration-200 relative group">
              Weather
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 relative group">
              Marketplace
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 relative group">
              Academy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 relative group">
              Crop Health
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 relative group">
              Chat
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="px-3 py-1 bg-green-600/90 rounded-lg text-white hover:bg-green-700 transition-colors duration-200">
              Login
            </a>
          </nav>

          {/* ONLY THIS HAMBURGER BUTTON ADDED */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* ONLY THIS MOBILE MENU ADDED (40% width) */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <div 
              className="absolute inset-0 bg-black/30"
              onClick={toggleMobileMenu}
            ></div>
            <div className="absolute right-0 top-0 h-full w-2/5 bg-green-800/95 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col p-4 space-y-4">
                <a href="/" className="text-white py-2 px-3 rounded-lg hover:bg-white/10" onClick={toggleMobileMenu}>
                  Home
                </a>
                <a href="/weather" className="text-white py-2 px-3 rounded-lg hover:bg-white/10" onClick={toggleMobileMenu}>
                  Weather
                </a>
                <a href="#" className="text-white py-2 px-3 rounded-lg hover:bg-white/10" onClick={toggleMobileMenu}>
                  Marketplace
                </a>
                <a href="#" className="text-white py-2 px-3 rounded-lg hover:bg-white/10" onClick={toggleMobileMenu}>
                  Academy
                </a>
                <a href="#" className="text-white py-2 px-3 rounded-lg hover:bg-white/10" onClick={toggleMobileMenu}>
                  Crop Health
                </a>
                <a href="#" className="text-white py-2 px-3 rounded-lg hover:bg-white/10" onClick={toggleMobileMenu}>
                  Chat
                </a>
                <a href="#" className="mt-4 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={toggleMobileMenu}>
                  Login
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ALL OTHER SECTIONS REMAIN EXACTLY THE SAME */}
        <section className="flex-grow flex items-center justify-center text-center py-16 px-4 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10"></div>
          <div className="relative z-10 max-w-4xl">
            <button 
              onClick={toggleLogoModal} 
              className="focus:outline-none mb-8 transform transition-transform duration-500 hover:scale-110"
            >
              <img 
                src={logo} 
                alt="SmartFarm Logo" 
                className="h-40 w-40 rounded-full object-cover mx-auto border-4 border-white/80 shadow-2xl"
              />
            </button>
            <div className="mb-8 min-h-[120px] flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
                {displayText}
                <span className={`inline-block w-1 h-12 ml-1 bg-white ${isTypingComplete ? 'animate-pulse' : 'opacity-0'}`}></span>
              </h2>
            </div>
            <p className="mb-10 text-xl text-white/90 max-w-2xl mx-auto animate-fade-in delay-1000">
              Join us to revolutionize farming with technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-green-600/90 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-16 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10"></div>
          {[
            { title: 'Smart Weather Alerts', icon: 'sun', delay: 100 },
            { title: 'Agri Academy', icon: 'book', delay: 200 },
            { title: 'Farm Marketplace', icon: 'shopping-cart', delay: 300 },
            { title: 'Crop Diagnostics', icon: 'alert-triangle', delay: 400 },
            { title: 'Live Support', icon: 'message-circle', delay: 500 },
            { title: 'AI Planning', icon: 'cpu', delay: 600 },
            { title: 'Success Stories', icon: 'user', delay: 700 },
            { title: 'Rewards Program', icon: 'star', delay: 800 },
          ].map(({ title, icon, delay }) => (
            <div 
              key={title}
              className={`p-8 bg-white/15 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="text-4xl mb-6 text-white flex justify-center">
                <i className={`lucide-${icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
            </div>
          ))}
        </section>

        <section className="px-6 py-24 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16 text-white">What Farmers Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "SmartFarm TZ has transformed how I plan and grow my crops. The weather alerts saved my harvest last season!",
                  author: "Juma, Farmer in Dodoma",
                  role: "Maize Farmer"
                },
                {
                  quote: "The marketplace connected me directly with buyers. I got 30% better prices than through middlemen!",
                  author: "Neema, Farmer in Arusha",
                  role: "Vegetable Grower"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/15 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-[1.02]"
                >
                  <p className="italic text-white/90 text-lg mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="text-white text-xl">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-green-800/70 backdrop-blur-lg text-white border-t border-white/20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center mb-4">
                  <img 
                    src={logo} 
                    alt="SmartFarm Logo" 
                    className="h-12 w-12 rounded-full object-cover mr-3 border-2 border-white/80"
                  />
                  <h4 className="text-xl font-bold">SmartFarm TZ</h4>
                </div>
                <p className="text-white/80">Cultivating a brighter future for Tanzanian agriculture through technology and innovation.</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  {['About Us', 'Services', 'Marketplace', 'Academy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Resources</h5>
                <ul className="space-y-2">
                  {['Blog', 'FAQs', 'Weather Data', 'Crop Calendar'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="lucide-phone mr-2"></i>
                    <span className="text-white/80">+255 123 456 789</span>
                  </li>
                  <li className="flex items-center">
                    <i className="lucide-mail mr-2"></i>
                    <span className="text-white/80">info@smartfarmtz.com</span>
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                    <a key={social} href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                      <i className={`lucide-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 SmartFarm TZ. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}