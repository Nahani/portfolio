"use client";

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DialogClose } from "@/components/ui/dialog";

interface ImageModalProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export function ImageModal({ images, currentIndex, onIndexChange }: ImageModalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const previousImage = useCallback(() => {
    setDirection(-1);
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  return (
    <div 
      className="relative h-[80vh] w-full overflow-hidden bg-black/95"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DialogClose asChild>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute right-4 top-4 z-20 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white transition-all duration-200 hover:bg-white/20 outline-none ring-0"
        >
          <X className="h-6 w-6" />
        </motion.button>
      </DialogClose>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, x: direction * 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -direction * 100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <div
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            <button
              onClick={previousImage}
              tabIndex={-1}
              className="group rounded-full bg-white/10 backdrop-blur-sm p-3 text-white transition-all duration-200 hover:bg-white/20 outline-none ring-0"
            >
              <ChevronLeft className="h-8 w-8 transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
          <div
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <button
              onClick={nextImage}
              tabIndex={-1}
              className="group rounded-full bg-white/10 backdrop-blur-sm p-3 text-white transition-all duration-200 hover:bg-white/20 outline-none ring-0"
            >
              <ChevronRight className="h-8 w-8 transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
          <motion.div 
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  onIndexChange(index);
                }}
                tabIndex={-1}
                className={`h-2 rounded-full transition-all duration-300 outline-none ring-0 ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
} 