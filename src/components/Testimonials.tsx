import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Regular Client",
    content: "Jazmin Spa is my sanctuary. The Traditional Thai Massage here is absolutely transformative. After years of trying different spas, I've finally found my wellness home.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "First-time Visitor",
    content: "From the moment I walked in, I felt the stress melting away. The ambiance, the skill of the therapists, the attention to detail - everything exceeded my expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emma Rodriguez",
    role: "Monthly Member",
    content: "The herbal compress treatment is unlike anything I've experienced. The authentic Thai techniques combined with the serene environment create pure magic.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Thompson",
    role: "Corporate Package",
    content: "We brought our entire executive team here for a wellness retreat. The professionalism and quality of service were outstanding. Highly recommend for corporate wellness.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spa-gold font-body text-sm tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Voices of <span className="italic text-primary">Serenity</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our cherished guests about their transformative experiences at Jazmin Thai Spa.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-spa-gold/10 flex items-center justify-center z-10">
            <Quote className="w-8 h-8 text-spa-gold" />
          </div>

          {/* Main Testimonial Card */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-elegant text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-spa-sage/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-spa-gold/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-spa-gold text-spa-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-spa-gold/30 mb-4"
                />
                <div className="font-display text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-spa-gold hover:text-foreground transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-spa-gold" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-spa-gold hover:text-foreground transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
