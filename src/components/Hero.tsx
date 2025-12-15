import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jazmin Thai Spa luxurious interior with warm ambient lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-spa-gold/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-spa-gold/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p 
            className="text-spa-gold-light font-body text-sm md:text-base tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Authentic Thai Wellness Experience
          </p>

          {/* Main Heading */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Journey to
            <span className="block text-spa-gold italic">Inner Peace</span>
          </h1>

          {/* Description */}
          <p 
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Discover the ancient art of Thai healing at Jazmin Spa. Where traditional techniques 
            meet modern luxury for a transformative wellness experience.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="xl">
              Book Your Experience
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div 
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <div className="text-center">
              <div className="font-display text-3xl text-spa-gold">15+</div>
              <div className="text-xs tracking-wider uppercase">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="font-display text-3xl text-spa-gold">5000+</div>
              <div className="text-xs tracking-wider uppercase">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="font-display text-3xl text-spa-gold">4.9★</div>
              <div className="text-xs tracking-wider uppercase">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-spa-gold transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
