import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Car, Scissors, Sparkles, Shield } from 'lucide-react';

const HomePage = ({ setActiveTab }: { setActiveTab: (tab: number) => void }) => {
  const [carSize, setCarSize] = useState<'sedan' | 'suv' | 'large'>('sedan');

  // Service data with pricing based on car size
  const services = [
    {
      id: 1,
      name: 'Полировка кузова',
      basePrice: 5000,
      icon: Sparkles,
      description: 'Профессиональная полировка для восстановления блеска'
    },
    {
      id: 2,
      name: 'Нанесение керамики',
      basePrice: 12000,
      icon: Shield,
      description: 'Защитное керамическое покрытие на 1 год'
    },
    {
      id: 3,
      name: 'Химчистка салона',
      basePrice: 4000,
      icon: Car,
      description: 'Глубокая очистка всех поверхностей салона'
    },
    {
      id: 4,
      name: 'Стандартная мойка',
      basePrice: 1500,
      icon: Scissors,
      description: 'Основная мойка кузова и колесных арок'
    }
  ];

  // Calculate price based on car size
  const calculatePrice = (basePrice: number) => {
    switch (carSize) {
      case 'suv': return Math.round(basePrice * 1.2);
      case 'large': return Math.round(basePrice * 1.4);
      default: return basePrice;
    }
  };

  return (
    <div className="px-4 pt-6 pb-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card mb-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl -z-10"></div>
        <div className="text-center py-8 px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Арт детейлинг
          </h1>
          <p className="text-gray-300 mb-6">Профессиональная забота о вашем автомобиле</p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="glass-button bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium text-lg py-3 px-8"
              onClick={() => setActiveTab(1)} // Navigate to Booking tab
            >
              Забронировать сейчас
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Loyalty Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="glass-card mb-6 p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="text-yellow-400 mr-2" size={20} />
            <h3 className="font-semibold">Карта лояльности</h3>
          </div>
          <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-1 rounded-full">
            3/10 штампов
          </span>
        </div>
        <div className="mt-3">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-400 h-2 rounded-full"
              style={{ width: '30%' }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-gray-300 mt-2">Еще 2 посещения до следующего бесплатного мытья</p>
      </motion.div>

      {/* Car Size Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-card mb-6 p-4"
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Размер автомобиля</h3>
          <div className="flex bg-gray-800 rounded-xl p-1">
            {(['sedan', 'suv', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setCarSize(size)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  carSize === size
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                    : 'text-gray-300'
                }`}
              >
                {size === 'sedan' ? 'Седан' : size === 'suv' ? 'Внедорожник' : 'Крупный'}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              className="glass-card p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
                    <IconComponent size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-xs text-gray-300">{service.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {calculatePrice(service.basePrice)} ₽
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;