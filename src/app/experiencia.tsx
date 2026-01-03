"use client";

import experienciaDataEs from '../../public/assets/data/experiencia_es.json';
import experienciaDataEn from '../../public/assets/data/experiencia_en.json';

import { useState } from 'react';
import { useLanguage } from './LanguageContext';


export default function Experiencia() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { language, t } = useLanguage();
  
  const experienciaData = language === 'es' ? experienciaDataEs : experienciaDataEn;

  return (
    <div className="min-h-screen w-full py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Título con animación */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow">
          {t('experience.title')}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto relative">
        {/* Línea vertical del timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/70 via-purple-500/70 to-pink-500/70 hidden md:block"></div>

        {/* Items de experiencia */}
        <div className="space-y-12">
          {experienciaData.experiencia.map((item, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.2}s both`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Punto en el timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block z-10">
                <div className={`w-6 h-6 rounded-full border-4 border-gray-900 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 scale-150 shadow-lg shadow-purple-500/50' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}>
                  <div className={`absolute inset-0 rounded-full animate-ping ${
                    hoveredIndex === index ? 'opacity-75' : 'opacity-0'
                  }`} style={{
                    background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(168, 85, 247))'
                  }}></div>
                </div>
              </div>

              {/* Card de experiencia */}
              <div className={`relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className={`group relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  hoveredIndex === index 
                    ? 'shadow-2xl shadow-purple-500/20 border-purple-500/50' 
                    : 'hover:border-gray-600'
                }`}>
                  {/* Efecto de brillo en hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Fecha */}
                    <div className="inline-block mb-3">
                      <span className="px-4 py-1 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                        {item.fecha}
                      </span>
                    </div>

                    {/* Puesto y Empresa */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {item.funcion}
                    </h2>
                    <h3 className="text-xl font-medium mb-4 text-blue-400 flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 ${
                        hoveredIndex === index ? 'animate-pulse scale-150' : ''
                      }`}></span>
                      {item.lugar}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-300 leading-relaxed">
                      {item.descripcion}
                    </p>

                    {/* Decoración */}
                    <div className={`mt-4 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full transition-all duration-500 ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>

                  {/* Flecha hacia el timeline (solo desktop) */}
                  <div className={`hidden md:block absolute top-8 ${
                    index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                  }`}>
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'from-purple-500 to-transparent' 
                        : 'from-transparent to-purple-500'
                    } ${hoveredIndex === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Efecto de partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}