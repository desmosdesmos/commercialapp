import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, User, Phone as PhoneIcon, Calendar as CalendarIcon, Clock, Scissors, Sparkles } from 'lucide-react';

// Car brands and models database
const CAR_DATABASE: Record<string, string[]> = {
  'BMW': ['X3', 'X5', 'X6', '3 Series', '5 Series', '7 Series', 'M3', 'M5'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'AMG GT'],
  'Audi': ['A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'R8'],
  'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Land Cruiser', 'Prius', 'Tacoma', 'Tundra'],
  'Honda': ['Civic', 'Accord', 'CR-V', 'HR-V', 'Odyssey', 'Pilot', 'Ridgeline'],
  'Ford': ['Focus', 'Fusion', 'Escape', 'Explorer', 'F-150', 'Mustang', 'Edge', 'Ranger'],
  'Chevrolet': ['Malibu', 'Impala', 'Equinox', 'Traverse', 'Silverado', 'Colorado', 'Corvette', 'Camaro'],
  'Nissan': ['Altima', 'Maxima', 'Sentra', 'Rogue', 'Murano', 'Pathfinder', 'Titan', 'Frontier'],
  'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Kona', 'Venue'],
  'Kia': ['Forte', 'Optima', 'Sorento', 'Sportage', 'Telluride', 'Soul', 'Rio'],
  'Volkswagen': ['Jetta', 'Passat', 'Atlas', 'Tiguan', 'Touareg', 'Golf', 'Arteon'],
  'Porsche': ['911', 'Cayenne', 'Panamera', 'Macan', 'Taycan', 'Boxster', 'Cayman'],
  'Lexus': ['IS', 'ES', 'GS', 'LS', 'NX', 'RX', 'GX', 'LX', 'UX'],
  'Infiniti': ['Q50', 'Q60', 'Q70', 'QX50', 'QX60', 'QX80', 'QX30'],
  'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'],
  'Volvo': ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
  'Subaru': ['Impreza', 'Legacy', 'Outback', 'Forester', 'Crosstrek', 'Ascent', 'BRZ'],
  'Mazda': ['Mazda3', 'Mazda6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 Miata'],
  'Jeep': ['Wrangler', 'Cherokee', 'Grand Cherokee', 'Compass', 'Renegade', 'Gladiator'],
  'Land Rover': ['Range Rover', 'Discovery', 'Defender', 'Velar', 'Evoque']
};

// Services with base prices
const SERVICES = [
  { id: 1, name: 'Полировка кузова', basePrice: 5000, icon: Scissors },
  { id: 2, name: 'Нанесение керамики', basePrice: 12000, icon: Scissors },
  { id: 3, name: 'Химчистка салона', basePrice: 4000, icon: Scissors },
  { id: 4, name: 'Стандартная мойка', basePrice: 1500, icon: Scissors },
  { id: 5, name: 'Обработка фар', basePrice: 2500, icon: Scissors },
];

const BookingPage = () => {
  const [formData, setFormData] = useState({
    carBrand: '',
    carModel: '',
    carClass: 'sedan' as 'sedan' | 'suv' | 'large',
    name: '',
    phone: '',
    dateTime: '',
    service: '' // Selected service ID
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [isTelegramUser, setIsTelegramUser] = useState(false);

  // Simulate getting user data from Telegram
  useEffect(() => {
    // In a real app, this would come from Telegram Web App SDK
    // For demo purposes, we'll simulate it
    const telegramUser = {
      firstName: 'Иван',
      lastName: 'Петров',
      phoneNumber: '+79271416615'
    };

    if (telegramUser) {
      setFormData(prev => ({
        ...prev,
        name: `${telegramUser.firstName} ${telegramUser.lastName}`,
        phone: telegramUser.phoneNumber || ''
      }));
      setIsTelegramUser(true);
    }
  }, []);

  // Update models when brand changes
  useEffect(() => {
    if (formData.carBrand && CAR_DATABASE[formData.carBrand as keyof typeof CAR_DATABASE]) {
      setAvailableModels(CAR_DATABASE[formData.carBrand as keyof typeof CAR_DATABASE]);
    } else {
      setAvailableModels([]);
    }
  }, [formData.carBrand]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'carBrand') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        carModel: '' // Reset model when brand changes
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Calculate price based on service, car class and brand/model
  const calculatePrice = (): number => {
    if (!formData.service) return 0;

    const selectedService = SERVICES.find(s => s.id.toString() === formData.service);
    if (!selectedService) return 0;

    let basePrice = selectedService.basePrice;

    // Adjust price based on car class
    switch (formData.carClass) {
      case 'suv': return Math.round(basePrice * 1.2);
      case 'large': return Math.round(basePrice * 1.4);
      default: return basePrice;
    }
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
            {/* Car Brand Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Марка автомобиля</label>
              <div className="relative">
                <select
                  name="carBrand"
                  value={formData.carBrand}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white appearance-none"
                >
                  <option value="" className="bg-gray-800">Выберите марку</option>
                  {Object.keys(CAR_DATABASE).map(brand => (
                    <option key={brand} value={brand} className="bg-gray-800">
                      {brand}
                    </option>
                  ))}
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

            {/* Car Model Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Модель автомобиля</label>
              <div className="relative">
                <select
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  disabled={!formData.carBrand}
                  className={`w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white appearance-none ${
                    !formData.carBrand ? 'opacity-50' : ''
                  }`}
                >
                  <option value="" className="bg-gray-800">Выберите модель</option>
                  {availableModels.map(model => (
                    <option key={model} value={model} className="bg-gray-800">
                      {model}
                    </option>
                  ))}
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

            {/* Car Class Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Класс автомобиля</label>
              <div className="relative">
                <select
                  name="carClass"
                  value={formData.carClass}
                  onChange={handleInputChange}
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

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Услуга</label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white appearance-none"
                >
                  <option value="" className="bg-gray-800">Выберите услугу</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.id} className="bg-gray-800">
                      {service.name}
                    </option>
                  ))}
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

            {/* Price Preview */}
            {formData.service && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-500/10 border border-white/20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Предварительная стоимость:</span>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {calculatePrice()} ₽
                  </span>
                </div>
              </motion.div>
            )}

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <User className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
              {isTelegramUser && (
                <p className="text-xs text-gray-400 mt-1">Данные получены из Telegram</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <PhoneIcon className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
              {isTelegramUser && (
                <p className="text-xs text-gray-400 mt-1">Данные получены из Telegram</p>
              )}
            </div>

            {/* Date and Time */}
            <div>
              <label className="block text-sm font-medium mb-2">Дата и время</label>
              <div className="relative">
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-3 px-4 pr-10 text-white"
                />
                <CalendarIcon className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full glass-button bg-gradient-to-r from-purple-600 to-blue-500 mt-4 py-4 flex items-center justify-center font-medium"
              type="submit"
              disabled={!formData.service || !formData.carBrand || !formData.carModel}
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