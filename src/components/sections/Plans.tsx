
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      duration: 'per month',
      features: [
        'Gym Floor Access',
        'Basic Equipment Use',
        'Locker Facility',
        'Lounge Access',
      ],
      cta: 'Choose Basic',
      popular: false
    },
    {
      name: 'Standard',
      price: '₹1499',
      duration: 'per month',
      features: [
        'All Basic Features',
        'Group Training Sessions',
        'Personal Workout Plan',
        'Steam Bath (Weekly)',
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Premium',
      price: '₹1999',
      duration: 'per month',
      features: [
        'All Standard Features',
        '1:1 Personal Trainer',
        'Diet & Nutrition Plan',
        'Unlimited Steam Bath',
        'Body Composition Check',
      ],
      cta: 'Go Premium',
      popular: false
    },
  ];

  return (
    <section id="plans" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Pricing Plans</h4>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">COMMIT TO YOUR FITNESS</h2>
          <p className="text-foreground/60 text-lg">Choose the plan that fits your lifestyle and goals. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2",
                plan.popular 
                  ? "bg-background border-primary shadow-[0_20px_40px_rgba(153,204,0,0.15)] ring-1 ring-primary" 
                  : "bg-background/40 border-white/5"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-2">
                  <Flame className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-headline font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-headline font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild
                className={cn(
                  "w-full rounded-xl h-12 font-bold transition-all",
                  plan.popular 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-white/5 hover:bg-white/10 text-foreground border border-white/10"
                )}
              >
                <a href="https://wa.me/918693036144" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
