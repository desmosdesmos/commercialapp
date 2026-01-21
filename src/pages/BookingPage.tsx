import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Car, User, Phone as PhoneIcon } from 'lucide-react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    carBrand: '',
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Заявка на бронирование отправлена!');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Забронировать услугу</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Марка автомобиля</label>
              <div className="relative">
                <input
                  type="text"
                  name="carBrand"
                  value={formData.carBrand}
                  onChange={handleChange}
                  placeholder="Введите марку"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 px-4 pr-10"
                />
                <Car className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Имя</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 px-4 pr-10"
                />
                <User className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Телефон</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 px-4 pr-10"
                />
                <PhoneIcon className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Дата</label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 px-4 pr-10"
                  />
                  <CalendarIcon className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Время</label>
                <div className="relative">
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 px-4 pr-10"
                  />
                  <Clock className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full glass-button bg-gradient-to-r from-purple-600 to-blue-500 mt-6 flex items-center justify-center"
              type="submit"
            >
              Подтвердить бронирование
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingPage;