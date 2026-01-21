import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calendar, Image, Phone, Scissors, Star, Gift } from 'lucide-react';

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
    { id: 1, label: 'Запись', icon: Calendar },
    { id: 2, label: 'Портфолио', icon: Image },
    { id: 3, label: 'Контакты', icon: Phone },
  ];

  // Render the active page based on selected tab
  const renderPage = () => {
    switch (activeTab) {
      case 0:
        return <HomePage setActiveTab={setActiveTab} />;
      case 1:
        return <BookingPage />;
      case 2:
        return <PortfolioPage />;
      case 3:
        return <ContactsPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white max-w-md mx-auto">
      {/* Animated background with gradient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[10%] left-[40%] w-56 h-56 bg-slate-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab > 0 ? 20 : -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: activeTab > 0 ? -20 : 20, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced floating bottom navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-20">
        <div className="glass-container bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-2">
          <div className="flex justify-around items-center">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center justify-center space-y-1 px-3 py-3 rounded-2xl transition-all duration-300 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-300'
                  }`}
                >
                  {/* Active indicator with gradient */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl z-[-1] ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600/30 to-blue-500/30'
                        : 'opacity-0'
                    }`}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />

                  <motion.div
                    animate={{
                      y: isActive ? -5 : 0,
                      scale: isActive ? 1.1 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <IconComponent
                      size={22}
                      className={isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" : "text-gray-300"}
                    />
                  </motion.div>
                  <motion.span
                    className="text-xs"
                    animate={{
                      fontSize: isActive ? "12px" : "10px",
                      fontWeight: isActive ? "bold" : "normal",
                      y: isActive ? -2 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {tab.label}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;