"use client";

import { useState } from 'react';

import proyectosDataEs from '../../public/assets/data/proyecto_es.json';
import proyectosDataEn from '../../public/assets/data/proyecto_en.json';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';


export default function Proyectos() {
  const [filtro, setFiltro] = useState<string>('Todos');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { language, t } = useLanguage();
  
  const proyectosData = language === 'es' ? proyectosDataEs : proyectosDataEn;

  // Mapear valores de filtro según el idioma
  const getPlataformaFilter = (filterValue: string) => {
    if (filterValue === 'Todos') return 'Todos';
    if (language === 'es') {
      return filterValue; // 'Escritorio' o 'Móvil'
    } else {
      // Convertir a inglés
      if (filterValue === 'Escritorio') return 'Desktop';
      if (filterValue === 'Móvil') return 'Mobile';
      return filterValue;
    }
  };

  const proyectosFiltrados = filtro === 'Todos' 
    ? proyectosData.proyecto 
    : proyectosData.proyecto.filter(p => p.plataforma === getPlataformaFilter(filtro));

  return (
    <div className="min-h-screen w-full py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Título animado */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t('projects.title')}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          {t('projects.subtitle')}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* Filtros */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {[t('projects.all'), t('projects.desktop'), t('projects.mobile')].map((cat, idx) => {
          const filterValue = ['Todos', 'Escritorio', 'Móvil'][idx];
          const englishFilter = ['All', 'Desktop', 'Mobile'][idx];
          return (
            <button
              key={cat}
              onClick={() => setFiltro(filterValue)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filtro === filterValue
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700'
              }`}
            >
              {cat}
              {filterValue !== 'Todos' && (
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {proyectosData.proyecto.filter(p => {
                    const mappedFilter = language === 'es' ? filterValue : 
                      (filterValue === 'Escritorio' ? 'Desktop' : filterValue === 'Móvil' ? 'Mobile' : filterValue);
                    return p.plataforma === mappedFilter;
                  }).length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grid de proyectos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosFiltrados.map((proyecto, index) => (
          <div
            key={index}
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card principal */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              
              {/* Imagen de fondo con overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  {/* Placeholder para la imagen - reemplaza con tu imagen real */}
                  <div className="text-6xl opacity-20">
                    <Image src={`/assets/proyects_thumbnails/${proyecto.imagen}`} alt={proyecto.titulo} layout="fill" objectFit="cover" />
                  </div>
                </div>
              </div>

              {/* Overlay con efecto de hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-70'
              }`}></div>

              {/* Contenido */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                {/* Badge de plataforma */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    proyecto.plataforma === 'Móvil' || proyecto.plataforma === 'Mobile'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  } text-white shadow-lg`}>
                    {(proyecto.plataforma === 'Móvil' || proyecto.plataforma === 'Mobile') ? `📱 ${t('projects.mobile')}` : `💻 ${t('projects.desktop')}`}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {proyecto.titulo}
                </h3>
                <div>
                {proyecto.technologies.map((tech, i) => (
                  <div key={i} className="inline-block mr-2">
                    <Image 
                      src={`/assets/tech_icos/${tech}.png`} 
                      alt={tech} 
                      width={30}
                      height={30}
                      className="inline-block"
                    />
                    <p>{tech}</p>
                  </div>
                ))
                }</div>

                {/* Descripción con animación */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {proyecto.descripcion}
                  </p>
                </div>

                {/* Botón de GitHub */}
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('projects.viewGithub')}
                </a>
              </div>

              {/* Efecto de brillo en las esquinas */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>

            {/* Sombra animada debajo de la card */}
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl rounded-full transition-all duration-500 ${
              hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Contador de proyectos */}
      <div className="text-center mt-16">
        <p className="text-gray-400 text-lg">
          Mostrando <span className="text-cyan-400 font-bold">{proyectosFiltrados.length}</span> de{' '}
          <span className="text-cyan-400 font-bold">{proyectosData.proyecto.length}</span> proyectos
        </p>
      </div>

      {/* Efecto de partículas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -30px);
          }
          50% {
            transform: translate(-20px, -60px);
          }
          75% {
            transform: translate(20px, -30px);
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

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}