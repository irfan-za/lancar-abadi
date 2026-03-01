"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted shadow-lg">
        <Image
          src="/images/meta-image.jpg"
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted shadow-lg">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      <div className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />

        
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-background hover:shadow-lg opacity-0 group-hover:opacity-100"
          aria-label="Gambar sebelumnya"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-background hover:shadow-lg opacity-0 group-hover:opacity-100"
          aria-label="Gambar berikutnya"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        
        <div className="absolute bottom-3 right-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
              index === currentIndex
                ? "border-primary shadow-md"
                : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
