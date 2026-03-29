
"use client"

import React from 'react';
import { Users, Star, Award, ShieldCheck } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: 'Active Members', value: '200+', icon: Users },
    { label: 'Google Rating', value: '4.9 ⭐', icon: Star },
    { label: 'Expert Trainers', value: '10+', icon: Award },
    { label: 'Hygiene Score', value: '100%', icon: ShieldCheck },
  ];

  return (
    <section className="py-12 bg-card border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-foreground mb-1">
                {stat.value}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
