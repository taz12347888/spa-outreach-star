import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Serenity Avenue", "Downtown Wellness District", "City, State 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@jazminspa.com", "bookings@jazminspa.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Fri: 9:00 AM - 9:00 PM", "Sat - Sun: 10:00 AM - 8:00 PM"],
    },
  ];

  const services = [
    "Traditional Thai Massage",
    "Aromatherapy Bliss",
    "Hot Stone Therapy",
    "Thai Herbal Compress",
    "Couples Retreat",
    "Corporate Wellness",
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spa-gold font-body text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Begin Your <span className="italic text-primary">Wellness Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to experience the transformative power of Thai wellness? Contact us to book your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Book an Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-spa-gold focus:ring-1 focus:ring-spa-gold outline-none transition-all text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-spa-gold focus:ring-1 focus:ring-spa-gold outline-none transition-all text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-spa-gold focus:ring-1 focus:ring-spa-gold outline-none transition-all text-foreground"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Select Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-spa-gold focus:ring-1 focus:ring-spa-gold outline-none transition-all text-foreground"
                  >
                    <option value="">Choose a treatment...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-spa-gold focus:ring-1 focus:ring-spa-gold outline-none transition-all text-foreground resize-none"
                  placeholder="Any special requests or health considerations..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Check className="w-5 h-5 animate-pulse" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request Booking
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-card rounded-2xl p-6 shadow-elegant hover-lift">
                  <div className="w-12 h-12 rounded-full bg-spa-gold/20 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-spa-gold" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Embed Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155710122!2d-73.98784922426925!3d40.75797713515978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jazmin Thai Spa Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
