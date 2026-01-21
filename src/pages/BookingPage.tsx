import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, User, Phone as PhoneIcon, Calendar as CalendarIcon, Clock } from 'lucide-react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    carBrand: '',
    carClass: 'sedan' as 'sedan' | 'suv' | 'large',
    name: '',
    phone: '',
    dateTime: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Show success modal
    setShowSuccessModal(true);
    // Hide modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  return (
    <div className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Забронировать услугу</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Марка автомобиля</label>
              <div className="relative">
                <input
                  type="text"
                  name="carBrand"
                  value={formData.carBrand}
                  onChange={handleChange}
                  placeholder="Введите марку"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <Car className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Класс автомобиля</label>
              <div className="relative">
                <select
                  name="carClass"
                  value={formData.carClass}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white appearance-none"
                >
                  <option value="sedan" className="bg-gray-800">Седан</option>
                  <option value="suv" className="bg-gray-800">Внедорожник</option>
                  <option value="large" className="bg-gray-800">Крупный</option>
                </select>
                <svg
                  className="absolute right-3 top-4 text-gray-400 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <User className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <PhoneIcon className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Дата и время</label>
              <div className="relative">
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <CalendarIcon className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full glass-button bg-gradient-to-r from-purple-600 to-blue-500 mt-4 py-4 flex items-center justify-center font-medium"
              type="submit"
            >
              Отправить заявку
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="glass-card p-6 max-w-sm w-full text-center"
          >
            <div className="text-green-400 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-gray-300 mb-4">Мы свяжемся с вами в ближайшее время для подтверждения бронирования.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="glass-button bg-gradient-to-r from-purple-600 to-blue-500 w-full py-3"
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BookingPage;