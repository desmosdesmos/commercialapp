import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Scissors, Image as ImageIcon, MapPin, Star, Gift } from 'lucide-react';

const HomePage = () => {
  // Action buttons data
  const actionButtons = [
    {
      id: 1,
      title: 'ОНЛАЙН ЗАПИСЬ',
      subtitle: 'Забронируйте удобное время',
      icon: Calendar,
      gradient: 'from-purple-600 to-blue-500',
      path: '/booking'
    },
    {
      id: 2,
      title: 'УСЛУГИ',
      subtitle: 'Посмотреть все услуги',
      icon: Scissors,
      gradient: 'from-blue-500 to-cyan-400',
      path: '/services'
    },
    {
      id: 3,
      title: 'ПРИМЕРЫ РАБОТ',
      subtitle: 'Наши лучшие работы',
      icon: ImageIcon,
      gradient: 'from-cyan-400 to-teal-400',
      path: '/portfolio'
    },
    {
      id: 4,
      title: 'КОНТАКТЫ',
      subtitle: 'Адрес и режим работы',
      icon: MapPin,
      gradient: 'from-teal-400 to-emerald-500',
      path: '/contacts'
    },
    {
      id: 5,
      title: 'АКЦИИ И СКИДКИ',
      subtitle: 'Специальные предложения',
      icon: Gift,
      gradient: 'from-emerald-500 to-green-500',
      path: '/promotions'
    },
    {
      id: 6,
      title: 'НАША ГАРАНТИЯ',
      subtitle: 'Качество и надежность',
      icon: Star,
      gradient: 'from-green-500 to-lime-500',
      path: '/guarantee'
    }
  ];

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
            >
              Записаться онлайн
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actionButtons.map((button, index) => {
          const IconComponent = button.icon;
          return (
            <motion.div
              key={button.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-4"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${button.gradient} mr-4`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{button.title}</h3>
                  <p className="text-gray-300 text-sm">{button.subtitle}</p>
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