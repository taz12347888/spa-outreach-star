import spaInterior from "@/assets/spa-interior.jpg";
import { Leaf, Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only organic, sustainably sourced products for all our treatments.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Treating mind, body, and spirit through ancient Thai wellness philosophy.",
  },
  {
    icon: Award,
    title: "Certified Therapists",
    description: "Our team trained in Thailand's most prestigious wellness academies.",
  },
  {
    icon: Users,
    title: "Personal Care",
    description: "Customized treatments tailored to your unique wellness journey.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={spaInterior}
                alt="Jazmin Thai Spa serene interior with tropical plants and ambient lighting"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-spa-gold/30 rounded-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-spa-gold/20 rounded-full blur-2xl" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-spa-gold text-foreground p-6 rounded-2xl shadow-elegant">
              <div className="text-center">
                <div className="font-display text-4xl font-bold">15</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-spa-gold font-body text-sm tracking-[0.3em] uppercase">Our Story</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
              Where Thai Tradition Meets <span className="italic text-spa-gold">Modern Serenity</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Founded with a passion for authentic Thai wellness, Jazmin Spa brings the healing traditions 
              of Thailand to your doorstep. Our sanctuary is designed to transport you to a world of 
              tranquility, where ancient wisdom meets contemporary luxury.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-10">
              Every treatment at Jazmin is a carefully crafted ritual, honoring centuries-old techniques 
              while embracing modern wellness innovations. Our therapists, trained in Thailand's most 
              prestigious healing centers, bring authenticity and expertise to every session.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-spa-gold/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-spa-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
