import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, MapPin, Info, ChevronRight, X } from 'lucide-react';
import { ServicesSection, AboutSection, LoyaltySection } from './ServicesAboutLoyalty';

const HomeScreen = ({ setActiveTab }: { setActiveTab: (tab: number) => void }) => {
  const [showExtendedContent, setShowExtendedContent] = useState<string | null>(null);

  // Navigation menu items with corresponding tab indices
  const menuItems = [
    { id: 1, label: 'Услуги', icon: Sparkles, tab: 0, action: 'services' },
    { id: 2, label: 'Наши работы', icon: ImageIcon, tab: 2, action: 'portfolio' },
    { id: 3, label: 'Контакты', icon: MapPin, tab: 3, action: 'contacts' },
    { id: 4, label: 'О нас / Лояльность', icon: Info, tab: 0, action: 'about' },
  ];

  const handleItemClick = (action: string, tab: number) => {
    if (action === 'services') {
      setShowExtendedContent('services');
    } else if (action === 'about') {
      setShowExtendedContent('about');
    } else if (action === 'portfolio') {
      setActiveTab(2);
    } else if (action === 'contacts') {
      setActiveTab(3);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Rotating gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-conic from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-spin-slow"></div>
      </div>

      {showExtendedContent ? (
        <div className="relative z-10">
          <div className="absolute top-4 right-4 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowExtendedContent(null)}
              className="p-2 rounded-full bg-white/10 backdrop-blur-lg"
            >
              <X size={20} />
            </motion.button>
          </div>
          {showExtendedContent === 'services' && <ServicesSection />}
          {showExtendedContent === 'about' && (
            <div className="pb-24">
              <AboutSection />
              <LoyaltySection />
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
          {/* Top Section - Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            {/* Logo Container */}
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 backdrop-blur-sm">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-500/30">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AD</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              ART DETAILING
            </h1>
            <p className="text-gray-400 text-sm">Premium Car Care</p>
          </motion.div>

          {/* Hero Action - Main Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg relative overflow-hidden"
              onClick={() => setActiveTab(1)} // Redirect to booking tab
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Записаться онлайн</span>
            </motion.button>
          </motion.div>

          {/* Navigation Menu - Secondary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-md space-y-4"
          >
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-between p-4 glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                    onClick={() => handleItemClick(item.action, item.tab)}
                  >
                    <div className="flex items-center">
                      <IconComponent className="text-gray-300 mr-4" size={20} />
                      <span className="text-gray-200">{item.label}</span>
                    </div>
                    <ChevronRight className="text-gray-400" size={20} />
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;