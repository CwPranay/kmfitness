
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <Image 
                src={aboutImg?.imageUrl || ''}
                alt="Gym Training"
                fill
                className="object-cover"
                data-ai-hint="fitness training"
              />
            </div>
            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border border-white/10 hidden lg:block">
              <p className="text-4xl font-headline font-bold text-primary">10+</p>
              <p className="text-sm font-bold uppercase tracking-tighter text-foreground">Years Experience</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Our Philosophy</h4>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                TRANSFORM YOUR <br />
                <span className="text-primary">BODY & MIND</span>
              </h2>
            </div>
            
            <p className="text-foreground/70 text-lg leading-relaxed">
              At KM Fitness Club, we believe fitness is a lifestyle, not a destination. Located in the heart of Kalyan East, we've built a sanctuary for those committed to self-improvement. Our mission is to provide an elite training environment where discipline meets results.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Personalized Goal Setting",
                "Advanced Strength Equipment",
                "Supportive Community",
                "Clean & Hygienic Space",
                "Result Oriented Programs",
                "Modern Cardio Zone"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
