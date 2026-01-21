import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Scissors, Sparkles, Shield, Car } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: 'Полировка кузова',
      icon: Sparkles,
      description: 'Профессиональная полировка для восстановления блеска',
      price: 'от 5 000 ₽'
    },
    {
      id: 2,
      name: 'Нанесение керамики',
      icon: Shield,
      description: 'Защитное керамическое покрытие на 1 год',
      price: 'от 12 000 ₽'
    },
    {
      id: 3,
      name: 'Химчистка салона',
      icon: Car,
      description: 'Глубокая очистка всех поверхностей салона',
      price: 'от 4 000 ₽'
    },
    {
      id: 4,
      name: 'Стандартная мойка',
      icon: Scissors,
      description: 'Основная мойка кузова и колесных арок',
      price: 'от 1 500 ₽'
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Наши услуги</h2>
      <div className="space-y-4">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
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
                    {service.price}
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

const AboutSection = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">О нас</h2>
      <div className="glass-card p-6 mb-6">
        <p className="text-gray-300 mb-4">
          Компания "Арт детейлинг" уже более 5 лет предоставляет высококачественные услуги по уходу за автомобилями.
        </p>
        <p className="text-gray-300 mb-4">
          Мы используем только профессиональное оборудование и качественные материалы от проверенных производителей.
        </p>
        <p className="text-gray-300">
          Наша команда состоит из опытных специалистов, которые знают толк в детализации и стремятся к идеальным результатам.
        </p>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-center">Наши преимущества</h3>
      <div className="space-y-4">
        <div className="glass-card p-4 flex items-center">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
            <Star size={20} className="text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold">Профессионализм</h4>
            <p className="text-xs text-gray-300">Опытные мастера с многолетним стажем</p>
          </div>
        </div>
        
        <div className="glass-card p-4 flex items-center">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
            <Shield size={20} className="text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold">Качество</h4>
            <p className="text-xs text-gray-300">Гарантия на все виды работ</p>
          </div>
        </div>
        
        <div className="glass-card p-4 flex items-center">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
            <Sparkles size={20} className="text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold">Чистота</h4>
            <p className="text-xs text-gray-300">Используем только безопасные средства</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoyaltySection = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Программа лояльности</h2>
      
      <div className="glass-card p-6 mb-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20">
            <Award size={40} className="text-purple-400" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Карта постоянного клиента</h3>
        <p className="text-gray-300 mb-4">
          За каждое посещение вы получаете 1 штамп. Соберите 10 штампов и получите 11-е посещение в подарок!
        </p>
        
        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-400 h-4 rounded-full" 
            style={{ width: '30%' }}
          ></div>
        </div>
        <p className="text-sm text-gray-300">3/10 штампов собрано</p>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-center">Уровни участия</h3>
      <div className="space-y-4">
        <div className="glass-card p-4">
          <h4 className="font-semibold text-blue-400 mb-2">Бронзовый уровень</h4>
          <p className="text-xs text-gray-300">Скидка 5% на все услуги</p>
        </div>
        
        <div className="glass-card p-4">
          <h4 className="font-semibold text-gray-300 mb-2">Серебряный уровень</h4>
          <p className="text-xs text-gray-300">Скидка 10% на все услуги</p>
        </div>
        
        <div className="glass-card p-4">
          <h4 className="font-semibold text-yellow-400 mb-2">Золотой уровень</h4>
          <p className="text-xs text-gray-300">Скидка 15% на все услуги + подарок на ДР</p>
        </div>
      </div>
    </div>
  );
};

// Separate components for each section
export { ServicesSection, AboutSection, LoyaltySection };

export default ServicesAboutLoyalty;