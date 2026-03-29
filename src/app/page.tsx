
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Plans } from '@/components/sections/Plans';
import { Trainers } from '@/components/sections/Trainers';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Plans />
      <Trainers />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background to-transparent pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
           <a 
            href="https://wa.me/918693036144" 
            className="flex-1 bg-primary text-primary-foreground h-12 flex items-center justify-center rounded-xl font-bold text-sm shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN NOW
          </a>
          <a 
            href="tel:8693036144" 
            className="flex-1 glass-morphism text-foreground h-12 flex items-center justify-center rounded-xl font-bold text-sm shadow-xl border border-white/10"
          >
            CALL US
          </a>
        </div>
      </div>
    </main>
  );
}
