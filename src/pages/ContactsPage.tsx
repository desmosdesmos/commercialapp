import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone as PhoneIcon, MessageSquare } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Контакты</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="text-blue-400 mt-1 mr-3" size={20} />
            <div>
              <h3 className="font-semibold">Адрес</h3>
              <p className="text-gray-300">ул. Танкистов, 88Б</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="text-green-400 mt-1 mr-3" size={20} />
            <div>
              <h3 className="font-semibold">Часы работы</h3>
              <p className="text-gray-300">10:00 - 19:00</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <PhoneIcon className="text-purple-400 mt-1 mr-3" size={20} />
            <div>
              <h3 className="font-semibold">Телефон</h3>
              <p className="text-gray-300">+7 (927) 141-66-15</p>
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            <a 
              href="tel:+79271416615" 
              className="w-full glass-button bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center"
            >
              <PhoneIcon className="mr-2" size={18} />
              Позвонить
            </a>
            
            <a 
              href="https://t.me/art_detailing" 
              className="w-full glass-button bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center"
            >
              <MessageSquare className="mr-2" size={18} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </motion.div>
      
      {/* Map Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card mt-6 overflow-hidden rounded-3xl"
      >
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto text-blue-400" size={48} />
            <p className="mt-2 text-gray-300">Карта местоположения</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactsPage;