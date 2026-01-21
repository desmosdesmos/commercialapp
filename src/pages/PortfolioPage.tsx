import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample portfolio images
  const portfolioImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Luxury car detailing' },
    { id: 2, url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Car ceramic coating' },
    { id: 3, url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Interior cleaning' },
    { id: 4, url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Before and after' },
    { id: 5, url: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Detailing process' },
    { id: 6, url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Shiny car exterior' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Наши работы</h2>
      
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {portfolioImages.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 break-inside-avoid"
          >
            <motion.img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto rounded-2xl cursor-pointer object-cover aspect-square"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image.id)}
              layoutId={`image-${image.id}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded image */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="max-w-3xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={portfolioImages.find(img => img.id === selectedImage)?.url}
                  alt={portfolioImages.find(img => img.id === selectedImage)?.alt}
                  className="w-full h-auto rounded-2xl object-contain max-h-[80vh]"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-black/50 rounded-full p-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;