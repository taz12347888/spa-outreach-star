import { useState } from "react";
import heroSpa from "@/assets/hero-spa.jpg";
import thaiMassage from "@/assets/thai-massage.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import hotStone from "@/assets/hot-stone.jpg";
import herbalCompress from "@/assets/herbal-compress.jpg";
import spaInterior from "@/assets/spa-interior.jpg";

const images = [
  { src: heroSpa, alt: "Jazmin Thai Spa luxurious treatment room with candles and orchids", category: "Ambiance" },
  { src: thaiMassage, alt: "Traditional Thai massage therapy session", category: "Treatments" },
  { src: aromatherapy, alt: "Aromatherapy essential oils and spa accessories", category: "Treatments" },
  { src: hotStone, alt: "Hot stone massage therapy on client", category: "Treatments" },
  { src: herbalCompress, alt: "Thai herbal compress ball treatment", category: "Treatments" },
  { src: spaInterior, alt: "Serene spa lounge area with tropical plants", category: "Ambiance" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spa-gold font-body text-sm tracking-[0.3em] uppercase">Our Space</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            A Glimpse of <span className="italic text-primary">Serenity</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Step into our tranquil sanctuary and experience the harmonious blend of Thai tradition and modern elegance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-[400px] md:h-[500px]" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-end p-4">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-spa-gold/90 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery image full view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-spa-gold transition-colors text-lg font-medium"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
