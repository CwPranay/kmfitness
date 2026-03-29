
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Plans', href: '#plans' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      scrolled ? "glass-morphism py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-headline font-bold text-primary italic tracking-tighter">
            KM <span className="text-foreground">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild className="rounded-full border-primary/20 text-primary hover:bg-primary/10">
            <a href="tel:8693036144">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </a>
          </Button>
          <Button size="sm" asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <a href="https://wa.me/918693036144" target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-morphism border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium p-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button variant="outline" asChild className="rounded-xl border-primary text-primary">
                <a href="tel:8693036144">Call Now</a>
              </Button>
              <Button asChild className="rounded-xl bg-primary text-primary-foreground font-bold">
                <a href="https://wa.me/918693036144" target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
