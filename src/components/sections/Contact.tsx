
"use client"

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Get in Touch</h4>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">VISIT THE CLUB</h2>
              <p className="text-foreground/60 text-lg max-w-md">Ready to start your journey? Visit us or drop a message to schedule a free trial session.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-2xl bg-background/50 border border-white/5 group hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-foreground/60">Kalyan East, Mumbai Metropolitan Region, Maharashtra 421306</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-background/50 border border-white/5 group hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contact</h4>
                  <p className="text-foreground/60">+91 8693036144</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-background/50 border border-white/5 group hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Clock className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Hours</h4>
                  <p className="text-foreground/60">Mon - Sat: 5:00 AM - 10:00 PM<br />Sun: 7:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-xl h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <a href="https://wa.me/918693036144" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" /> Message on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl h-14 px-8 border-white/10 hover:bg-white/5">
                <a href="tel:8693036144">
                  <Phone className="w-5 h-5 mr-2" /> Call us Now
                </a>
              </Button>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 grayscale contrast-125">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15070.362020604625!2d73.12405768715819!3d19.213079900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79451d0102785%3A0xd52a177fe63f8f67!2z4KSV4KWHIOCkj-CkriDgpKvgpL_gpJ_gpKjgpYfgpLgg4KSV4KWN4KSy4KSs!5e0!3m2!1sen!2sin!4v1774803260657!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KM Fitness Club Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
