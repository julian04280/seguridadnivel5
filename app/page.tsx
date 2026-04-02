"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import MasterBanner from "./MasterBanner";

// Constantes de contenido específicas para Nivel 5
const datosServicios = [
  { title: "Seguridad Física", icon: "/assets/images/3.jpeg", desc: "Personal altamente capacitado y evaluado con estándares de confianza para la protección de activos críticos.", url: "https://www.youtube.com/embed/t_EmOmrZPmM" },
  { title: "Sistemas Electrónicos", icon: "/assets/images/4.jpeg", desc: "CCTV, control de acceso y alarmas inteligentes monitoreadas 24/7 desde nuestra central propia.", url: "https://www.youtube.com/embed/t_EmOmrZPmM" },
  { title: "Consultoría de Riesgos", icon: "/assets/images/5.jpeg", desc: "Análisis experto para identificar vulnerabilidades y diseñar protocolos de reacción inmediata.", url: "https://www.youtube.com/embed/t_EmOmrZPmM" },
];

export default function FashionPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="selection:bg-[#e91e63] selection:text-white">
      <Navbar />
      
      <MasterBanner 
        img="bg-[url('/assets/images/1.jpeg')]" 
        title="PROTECCIÓN DE ÉLITE"
        desc="Seguridad integral con tecnología de Nivel 5 para hogares y empresas en Colombia."
        btn="Iniciar Consultoría"
      />

      <main className="bg-white">
        {/* SECCIÓN NOSOTROS - Estilo Ejecutivo */}
        <section id="nosotros" className="overflow-x-hidden py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#e91e63]/10 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0" />
            <div className="relative aspect-square shadow-2xl rounded-[2.5rem] overflow-hidden">
              <Image 
                src="/assets/images/2.jpeg" 
                alt="Operaciones Nivel 5" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="space-y-8">            
            <div className="inline-block px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-100 text-[#e91e63] rounded-full text-[10px] lg:text-sm font-bold tracking-widest uppercase">
              Trayectoria Comprobada
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight uppercase">
              EVOLUCIONAMOS <br/>
              <span className="text-[#e91e63]">PARA PROTEGER</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-600 leading-relaxed font-light italic">
              "En Seguridad Nivel 5 no solo vigilamos, anticipamos el riesgo mediante inteligencia y tecnología avanzada."
            </p>
            <p className="text-sm lg:text-lg text-slate-500 leading-relaxed">
              Somos una empresa colombiana líder en seguridad consultiva, enfocada en brindar tranquilidad a través de procesos rigurosos y personal de élite.
            </p>
            {/* <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#e91e63] transition-all shadow-xl hover:-translate-y-1">
              Ver Certificaciones
            </button> */}
          </div>
        </section>

        {/* SERVICIOS - Grid Moderno */}
        <section id="servicios" className="py-32 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-slate-900 uppercase mb-4">Servicios de Inteligencia</h2>
                <p className="text-slate-500 text-lg">Soluciones 360° adaptadas a la complejidad del entorno actual.</p>
              </div>
              <div className="h-px flex-1 bg-slate-200 mx-10 hidden md:block" />
              <span className="text-slate-400 font-mono text-sm">SEC-UNIT-05</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {datosServicios.map((service, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:border-[#e91e63]/30 hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-slate-100 font-black text-6xl group-hover:text-slate-50">0{i+1}</div>
                  <div className="relative w-80 h-50 mb-10">
                    <Image src={service.icon} alt={service.title} fill className="object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                  {/* <button className="flex items-center gap-2 text-[#e91e63] font-black group-hover:gap-4 transition-all">
                    ESPECIFICACIONES <span className="text-xl">→</span>
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERÍA / TRABAJA CON NOSOTROS - Estilo Bento Grid */}
        <section id="trabaja" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-slate-900">Nuestra Operación en Campo</h2>
            <p className="text-slate-500 mt-4">Únete al equipo que está redefiniendo la seguridad en Colombia.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden group">
              <Image src="/assets/images/6.jpeg" alt="Op" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <Image src="/assets/images/7.jpeg" alt="Op" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <Image src="/assets/images/8.jpeg" alt="Op" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative col-span-2 rounded-3xl overflow-hidden group">
              <Image src="/assets/images/9.jpeg" alt="Op" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* FOOTER - Estilo Black Ops */}
        <footer id="footer" className="bg-[#050a14] text-white pt-32 pb-12 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <Image src="/assets/images/logo.png" alt="SN5" width={280} height={100} className="brightness-200" />
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-[#e91e63] font-black uppercase tracking-widest text-sm">Sede Central</h4>
                  <p className="text-slate-400">Bogotá - Chía, Colombia</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[#e91e63] font-black uppercase tracking-widest text-sm">Emergencias 24/7</h4>
                  <p className="text-2xl font-bold">+57 312 335 2230</p>
                </div>
              </div>
            </div>

            <form className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold mb-4">Solicitud de Seguridad Privada</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" placeholder="Nombre" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#e91e63] transition-all" value={formData.name} onChange={handleChange} />
                <input name="email" placeholder="Email Corporativo" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#e91e63] transition-all" value={formData.email} onChange={handleChange} />
              </div>
              <textarea name="message" placeholder="Describa su requerimiento o sector..." rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#e91e63] transition-all" value={formData.message} onChange={handleChange} />
              <button type="submit" className="w-full bg-[#e91e63] py-5 rounded-2xl font-black text-lg uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                Enviar Protocolo
              </button>
            </form>
          </div>
          <div className="border-t border-slate-100 mt-12 py-6">
            <p className="text-center text-[10px] tracking-widest text-slate-400 uppercase">
              Desarrollado con precisión por{' '}
              <a 
                href="https://dojasoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-slate-500 hover:text-[#e91e63] transition-colors duration-300"
              >
                @Dojasoft
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}