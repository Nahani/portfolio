"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ImageModalProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export function ImageModal({ images, currentIndex, onIndexChange }: ImageModalProps) {
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    onIndexChange((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative h-[80vh] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-contain"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            tabIndex={-1}
            className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-200 hover:bg-black/70 z-10 outline-none ring-0 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            tabIndex={-1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-200 hover:bg-black/70 z-10 outline-none ring-0 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                tabIndex={-1}
                className={`h-2 w-2 rounded-full transition-colors outline-none ring-0 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 