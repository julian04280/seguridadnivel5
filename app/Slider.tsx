"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  { src: "/assets/images/6.jpeg", alt: "Operación 1" },
  { src: "/assets/images/7.jpeg", alt: "Operación 2" },
  { src: "/assets/images/8.jpeg", alt: "Operación 3" },
  { src: "/assets/images/9.jpeg", alt: "Operación 4" },
];

export default function OperationSlider() {
  // Configuración de Embla
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative flex-[0_0_100%] h-[400px] md:h-[600px] min-w-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay gradiente para que se vea Pro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}