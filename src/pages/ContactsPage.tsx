import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone as PhoneIcon, MessageCircle } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card mb-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Контакты</h2>

        <div className="space-y-5">
          <div className="flex items-start p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm border border-white/10 mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
              <MapPin className="text-purple-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Адрес</h3>
              <p className="text-gray-300">ул. Танкистов, 88Б</p>
            </div>
          </div>

          <div className="flex items-start p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm border border-white/10 mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
              <Clock className="text-purple-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Часы работы</h3>
              <p className="text-gray-300">Ежедневно, 10:00 - 19:00</p>
            </div>
          </div>

          <div className="flex items-start p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm border border-white/10 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-500/20 mr-4">
              <PhoneIcon className="text-purple-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Телефон</h3>
              <p className="text-gray-300">+7 (927) 141-66-15</p>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <a
              href="tel:+79271416615"
              className="w-full glass-button bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center py-4"
            >
              <PhoneIcon className="mr-2" size={18} />
              Позвонить
            </a>

            <a
              href="https://t.me/art_detailing"
              className="w-full glass-button bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center py-4"
            >
              <MessageCircle className="mr-2" size={18} />
              Написать администратору
            </a>
          </div>
        </div>
      </motion.div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-card overflow-hidden rounded-3xl"
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