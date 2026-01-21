import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, X } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample portfolio images - Before/After examples
  const portfolioImages = [
    { id: 1, before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', after: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Luxury car detailing before and after' },
    { id: 2, before: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', after: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Interior cleaning before and after' },
    { id: 3, before: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', after: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Exterior detailing before and after' },
    { id: 4, before: 'https://images.unsplash.com/photo-1549317661-bd2e3c9ca6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Wheel and tire cleaning before and after' },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Наши работы</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioImages.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden"
          >
            <div className="flex">
              <div className="flex-1">
                <h3 className="text-sm font-semibold p-2 text-center">До</h3>
                <img
                  src={item.before}
                  alt={`Before - ${item.alt}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold p-2 text-center">После</h3>
                <img
                  src={item.after}
                  alt={`After - ${item.alt}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full max-h-[90vh]">
            <div className="relative">
              <img
                src={portfolioImages.find(img => img.id === selectedImage)?.after}
                alt="Expanded view"
                className="w-full h-auto rounded-2xl object-contain max-h-[80vh]"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="glass-button flex-1 mr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = portfolioImages.findIndex(img => img.id === selectedImage);
                  const prevIndex = (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
                  setSelectedImage(portfolioImages[prevIndex].id);
                }}
              >
                Назад
              </button>
              <button
                className="glass-button flex-1 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = portfolioImages.findIndex(img => img.id === selectedImage);
                  const nextIndex = (currentIndex + 1) % portfolioImages.length;
                  setSelectedImage(portfolioImages[nextIndex].id);
                }}
              >
                Вперед
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;