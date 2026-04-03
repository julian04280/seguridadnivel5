"use client";

import React from "react";

interface MasterBannerProps {
  img: string;        // Nombre de la clase de fondo o URL
  title: string;      // Texto pequeño superior
  desc: string;       // Título grande principal
  classes?: string;   // Clases adicionales (ej: "text-left")
  btn?: string;       // Texto del botón
  btnClass?: string;  // Clases adicionales para el botón
}

const MasterBanner: React.FC<MasterBannerProps> = ({ 
  img, 
  title, 
  desc, 
  classes, 
  btn, 
  btnClass 
}) => {
  
  return (
    <section className="relative w-full">
      
      <div id="altoBanner" className={`relative min-h-screen pt-[100px] flex items-center justify-center bg-cover bg-center ${img} ${classes || "text-center"}`}>
        
        {/* Overlay oscuro opcional para mejorar lectura del texto */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              
              {/* Título pequeño (Subtítulo) */}
              <h4 className="text-[#fed518] font-bold tracking-[0.2em] uppercase text-sm md:text-lg animate-fade-in">
                {title}
              </h4>

              {/* Título Grande (H1) */}
              <h1 className="text-white text-4xl md:text-7xl font-black leading-tight drop-shadow-md" style={{ fontSize: '40px' }}>
                {desc}
              </h1>
              
              {/* Botón de Acción */}
              <div className="pt-4">
                <button
                  onClick={() => window.open('https://wa.me/+573208539820', '_blank', 'noopener,noreferrer')} 
                  className={`
                    px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all
                    active:scale-95 shadow-lg
                    ${btnClass || "bg-[#fed518] text-white hover:bg-[#b39613] hover:shadow-pink-500/20"}
                  `}
                >
                  {btn || "Escríbenos"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterBanner;