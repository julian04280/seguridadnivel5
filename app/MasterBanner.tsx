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
      {/* Contenedor principal: 
          - Usamos h-[80vh] para que ocupe gran parte de la pantalla.
          - 'relative overflow-hidden' para contener capas.
      */}
      <div id="altoBanner" className={`relative min-h-screen pt-[100px] flex items-center justify-center bg-cover bg-center ${img} ${classes || "text-center"}`}>
        
        {/* Overlay oscuro opcional para mejorar lectura del texto */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              
              {/* Título pequeño (Subtítulo) */}
              <h4 className="text-[#e91e63] font-bold tracking-[0.2em] uppercase text-sm md:text-lg animate-fade-in">
                {title}
              </h4>

              {/* Título Grande (H1) */}
              <h1 className="text-white text-4xl md:text-7xl font-black leading-tight drop-shadow-md">
                {desc}
              </h1>
              
              {/* Botón de Acción */}
              <div className="pt-4">
                <button
                  onClick={() => window.open('https://wa.me/3208539820', '_blank', 'noopener,noreferrer')} 
                  className={`
                    px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all
                    active:scale-95 shadow-lg
                    ${btnClass || "bg-[#e91e63] text-white hover:bg-[#c2185b] hover:shadow-pink-500/20"}
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