import { Button } from "@/components/ui/button";
import thaiMassage from "@/assets/thai-massage.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import hotStone from "@/assets/hot-stone.jpg";
import herbalCompress from "@/assets/herbal-compress.jpg";
import { Clock, Sparkles } from "lucide-react";

const services = [
  {
    title: "Traditional Thai Massage",
    description: "Ancient healing technique combining acupressure, yoga-like stretching, and energy work to restore balance and vitality.",
    image: thaiMassage,
    duration: "60-90 min",
    price: "From $85",
    featured: true,
  },
  {
    title: "Aromatherapy Bliss",
    description: "Indulge in a sensory journey with premium essential oils tailored to your mood and wellness needs.",
    image: aromatherapy,
    duration: "60 min",
    price: "From $75",
    featured: false,
  },
  {
    title: "Hot Stone Therapy",
    description: "Heated volcanic stones melt away tension, promoting deep relaxation and improved circulation.",
    image: hotStone,
    duration: "75 min",
    price: "From $95",
    featured: false,
  },
  {
    title: "Thai Herbal Compress",
    description: "Traditional luk pra kob therapy with steamed herbal bundles for deep muscle relief and detoxification.",
    image: herbalCompress,
    duration: "90 min",
    price: "From $110",
    featured: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spa-gold font-body text-sm tracking-[0.3em] uppercase">Our Treatments</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Healing Rituals for <span className="italic text-primary">Body & Soul</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Experience the wisdom of ancient Thai healing traditions, thoughtfully adapted for modern wellness seekers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift ${
                service.featured ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${service.featured ? "h-80 lg:h-full" : "h-56"}`}>
                <img
                  src={service.image}
                  alt={`${service.title} treatment at Jazmin Thai Spa`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
                
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-spa-gold/90 text-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Signature Treatment
                  </div>
                )}
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-spa-gold text-sm mb-2 font-medium">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="font-semibold">{service.price}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 text-spa-gold text-background">{service.title}</h3>
                <p className={`text-background/90 text-white text-sm leading-relaxed ${service.featured ? "" : "line-clamp-2"}`}>
                  {service.description}
                </p>
                
                {service.featured && (
                  <Button variant="hero" size="lg" className="mt-4">
                    Book This Treatment
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="xl">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
