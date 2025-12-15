import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jazmin Thai Spa & Wellness | Authentic Thai Massage & Treatments</title>
        <meta 
          name="description" 
          content="Experience authentic Thai healing at Jazmin Thai Spa. Traditional Thai massage, aromatherapy, hot stone therapy & herbal compress treatments. Book your wellness journey today." 
        />
        <meta name="keywords" content="Thai spa, Thai massage, wellness, aromatherapy, hot stone massage, herbal compress, relaxation, spa treatments" />
        <link rel="canonical" href="https://jazminspa.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Jazmin Thai Spa & Wellness | Authentic Thai Massage" />
        <meta property="og:description" content="Discover the ancient art of Thai healing. Traditional techniques meet modern luxury for a transformative wellness experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jazminspa.com" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DaySpa",
            "name": "Jazmin Thai Spa & Wellness",
            "description": "Authentic Thai wellness spa offering traditional Thai massage, aromatherapy, hot stone therapy, and herbal compress treatments.",
            "url": "https://jazminspa.com",
            "telephone": "+1-234-567-890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Serenity Avenue",
              "addressLocality": "Downtown Wellness District",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "openingHours": [
              "Mo-Fr 09:00-21:00",
              "Sa-Su 10:00-20:00"
            ],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "5000"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
