"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageModal } from './image-modal';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCarouselProps {
  images: { src: string; alt: string }[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const previousImage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    setDirection(diff > 0 ? 1 : -1);
  };

  const handleTouchEnd = () => {
    if (direction > 0) {
      nextImage();
    } else if (direction < 0) {
      previousImage();
    }
    setTouchStart(null);
    setDirection(0);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div 
            className="relative h-48 w-full overflow-hidden cursor-pointer rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-sm p-2 text-white transition-all duration-200 hover:bg-white/20 z-10 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-sm p-2 text-white transition-all duration-200 hover:bg-white/20 z-10 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-7xl p-0 bg-transparent border-none [&>button]:hidden">
          <DialogTitle className="sr-only">
            Project Image Viewer
          </DialogTitle>
          <div className="relative">
            <ImageModal 
              images={images} 
              currentIndex={currentIndex} 
              onIndexChange={setCurrentIndex} 
            />
          </div>
        </DialogContent>
      </Dialog>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 py-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-4' 
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
} 