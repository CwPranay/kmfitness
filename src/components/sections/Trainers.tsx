
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const Trainers = () => {
  const trainers = [
    {
      name: 'Vikram Singh',
      role: 'Strength Coach',
      imgId: 'trainer-1',
      specialization: 'Bodybuilding & Powerlifting'
    },
    {
      name: 'Anjali Sharma',
      role: 'Senior Trainer',
      imgId: 'trainer-2',
      specialization: 'Fat Loss & HIIT specialist'
    },
    {
      name: 'Rahul More',
      role: 'Personal Trainer',
      imgId: 'trainer-3',
      specialization: 'Transformation Specialist'
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Expert Coaching</h4>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">MEET YOUR MENTORS</h2>
          <p className="text-foreground/60 text-lg">Our world-class trainers are here to guide, motivate, and help you smash your goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => {
            const trainerImg = PlaceHolderImages.find(img => img.id === trainer.imgId);
            return (
              <div key={idx} className="group relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                  <Image 
                    src={trainerImg?.imageUrl || ''}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint="fitness trainer"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary text-sm font-bold uppercase tracking-widest mb-1">{trainer.role}</p>
                    <h3 className="text-2xl font-headline font-bold mb-2">{trainer.name}</h3>
                    <p className="text-foreground/60 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{trainer.specialization}</p>
                    
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
