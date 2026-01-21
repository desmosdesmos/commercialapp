import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const [carClass, setCarClass] = useState<'sedan' | 'suv' | 'jeep'>('sedan');

  // Service data with pricing based on car class
  const services = [
    {
      id: 1,
      name: 'Полировка кузова',
      price: { sedan: 5000, suv: 6500, jeep: 7000 },
      description: 'Профессиональная полировка для восстановления блеска',
      icon: '✨'
    },
    {
      id: 2,
      name: 'Нанесение керамики',
      price: { sedan: 12000, suv: 15000, jeep: 16000 },
      description: 'Защитное керамическое покрытие на 1 год',
      icon: '🛡️'
    },
    {
      id: 3,
      name: 'Химчистка салона',
      price: { sedan: 4000, suv: 5500, jeep: 6000 },
      description: 'Глубокая очистка всех поверхностей салона',
      icon: '🧽'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card mb-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl -z-10"></div>
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold mb-2">Арт детейлинг</h1>
          <p className="text-gray-300 mb-6">Профессиональная забота о вашем автомобиле</p>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="glass-button bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium"
          >
            Записаться
          </motion.button>
        </div>
      </motion.div>

      {/* Loyalty Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card mb-6"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Уровень: Silver</h3>
          <Award className="text-yellow-400" size={20} />
        </div>
        <div className="mb-2">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-500 to-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
        <p className="text-sm text-gray-300">Еще 2 посещения до следующего бесплатного мытья</p>
      </motion.div>

      {/* Car Class Toggle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card mb-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Класс автомобиля</h3>
          <div className="flex bg-gray-800 rounded-xl p-1">
            {(['sedan', 'suv', 'jeep'] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => setCarClass(cls)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  carClass === cls 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'text-gray-300'
                }`}
              >
                {cls === 'sedan' ? 'Седан' : cls === 'suv' ? 'Внедорожник' : 'Джип'}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 gap-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-card flex items-center justify-between p-4"
          >
            <div className="flex items-center">
              <div className="text-2xl mr-3">{service.icon}</div>
              <div>
                <h3 className="font-semibold">{service.name}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
            <motion.div 
              key={`${service.id}-${carClass}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-right"
            >
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {service.price[carClass]} ₽
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;