
"use client"

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImg?.imageUrl || ''} 
          alt="Premium Gym Interior"
          fill
          priority
          className="object-cover"
          data-ai-hint="gym interior luxury"
        />
        <div className="absolute inset-0 bg-hero-overlay z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Premium Fitness Destination
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-6 leading-tight tracking-tighter">
          BE STRONGER THAN YOUR <span className="text-primary italic">EXCUSES</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-body">
          Train at KM Fitness Club – Kalyan East’s Trusted Gym. Experience state-of-the-art equipment and personalized coaching.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto rounded-full h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(153,204,0,0.4)]">
            <a href="https://wa.me/918693036144" target="_blank" rel="noopener noreferrer">
              Join Now <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto rounded-full h-14 px-10 text-lg font-bold border-white/20 hover:bg-white/5">
            <a href="tel:8693036144">
              Call Now <Phone className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};
