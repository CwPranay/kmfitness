
"use client"

import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: "Amit Patel",
      text: "Best gym in Kalyan with great trainers. The equipment is top-notch and always well-maintained.",
      rating: 5
    },
    {
      name: "Sonal Deshmukh",
      text: "Clean environment and supportive staff. I felt comfortable as a beginner and they really helped me progress.",
      rating: 5
    },
    {
      name: "Pratik Gaikwad",
      text: "Amazing results in just few months! The personal training program here is truly transformative.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Success Stories</h4>
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">WHAT OUR MEMBERS SAY</h2>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9/5</span>
            </div>
            <p className="text-foreground/60 text-lg">Join 200+ happy members who achieved their fitness goals with us.</p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 relative">
             {/* Simple decor */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />

            {reviews.map((review, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-3xl border border-white/5 space-y-4 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">Verified Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
