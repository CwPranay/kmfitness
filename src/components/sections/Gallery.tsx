"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { cn } from '@/lib/utils';

export const Gallery = () => {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Our Environment</h4>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">THE KM EXPERIENCE</h2>
          <p className="text-foreground/60 text-lg">Explore our premium facilities designed to give you the best training experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={cn(
              "relative rounded-2xl overflow-hidden group border border-white/5",
              idx === 0 ? "col-span-2 row-span-2 aspect-video md:aspect-square" : "aspect-square"
            )}>
              <Image 
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
