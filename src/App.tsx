import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, Image, Phone } from 'lucide-react';

// Import individual pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactsPage from './pages/ContactsPage';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define tabs with their properties
  const tabs = [
    { id: 0, label: 'Главная', icon: Home },
    { id: 1, label: 'Бронирование', icon: Calendar },
    { id: 2, label: 'Портфолио', icon: Image },
    { id: 3, label: 'Контакты', icon: Phone },
  ];

  // Render the active page based on selected tab
  const renderPage = () => {
    switch (activeTab) {
      case 0:
        return <HomePage />;
      case 1:
        return <BookingPage />;
      case 2:
        return <PortfolioPage />;
      case 3:
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Animated background with gradient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-[10%] left-[40%] w-56 h-56 bg-slate-400/20 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 pb-24">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {renderPage()}
        </motion.div>
      </div>

      {/* Floating bottom navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-20">
        <div className="floating-nav bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-3">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-2xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white bg-gradient-to-r from-purple-600/30 to-blue-500/30 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;