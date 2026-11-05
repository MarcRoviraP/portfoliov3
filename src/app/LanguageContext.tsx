'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Topbar
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
    'nav.contact': 'Contacto',
    
    // Presentacion
    'home.greeting': 'Hola, soy Marc',
    'home.title': 'Desarrollador Full Stack',
    'home.description': 'Apasionado por crear soluciones digitales innovadoras y eficientes. Con experiencia en tecnologías modernas y un enfoque en la calidad del código.',
    'home.hobby1': 'Jugar al tenis',
    'home.hobby2': 'Investigar tecnologías',
    
    // Experiencia
    'experience.title': 'Experiencia Profesional',
    
    // Proyectos
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Explora mi colección de aplicaciones y juegos',
    'projects.all': 'Todos',
    'projects.desktop': 'Escritorio',
    'projects.mobile': 'Móvil',
    'projects.web': 'Web',
    'projects.viewGithub': 'Ver en GitHub',
    'projects.viewWeb': 'Visitar Web',
    'projects.gallery': 'Galería',
    
    // Sobre Mí
    'about.title': 'Sobre Mí',
    'about.p1': 'Soy desarrollador de soluciones digitales, con interés en crear productos tecnológicos que resuelvan problemas reales y aporten valor.',
    'about.p2': 'Me gusta abordar el desarrollo de software desde una perspectiva global: comprender las necesidades de un proyecto, investigar las tecnologías adecuadas y construir soluciones que conecten frontend, backend, bases de datos y servicios externos.',
    'about.p3': 'Trabajo en el desarrollo de aplicaciones web, soluciones multiplataforma y servicios backend, con tecnologías como Java, Python, React, Flutter, FastAPI, SQL y PostgreSQL.',
    'about.p4': 'Disfruto especialmente integrando APIs, conectando sistemas y automatizando procesos. También utilizo herramientas de inteligencia artificial para investigar, aprender nuevas tecnologías, desarrollar funcionalidades y optimizar código.',
    'about.p5': 'Me considero una persona autónoma, práctica y resolutiva, con facilidad para aprender y adaptarme a nuevos entornos tecnológicos.',
    'about.p6': 'Busco seguir creciendo profesionalmente participando en proyectos donde pueda transformar ideas en soluciones digitales funcionales y contribuir a construir productos tecnológicos.',
    
    // Contacto
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes alguna pregunta o propuesta? ¡No dudes en contactarme!',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDesc': 'Conectemos profesionalmente',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.footer': 'Respondo lo más rápido posible. ¡Espero tu mensaje! 🚀',
    'contact.downloadCV': 'Descargar CV',
  },
  en: {
    // Topbar
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    
    // Presentacion
    'home.greeting': 'Hi, I\'m Marc',
    'home.title': 'Full Stack Developer',
    'home.description': 'Passionate about creating innovative and efficient digital solutions. With experience in modern technologies and a focus on code quality.',
    'home.hobby1': 'Playing tennis',
    'home.hobby2': 'Researching tech',
    
    // Experiencia
    'experience.title': 'Professional Experience',
    
    // Proyectos
    'projects.title': 'My Projects',
    'projects.subtitle': 'Explore my collection of applications and games',
    'projects.all': 'All',
    'projects.desktop': 'Desktop',
    'projects.mobile': 'Mobile',
    'projects.web': 'Web',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewWeb': 'Visit Web',
    'projects.gallery': 'Gallery',
    
    // Sobre Mí
    'about.title': 'About Me',
    'about.p1': 'I am a digital solutions developer, interested in building technological products that solve real problems and provide value.',
    'about.p2': 'I like to approach software development from a global perspective: understanding the needs of a project, researching the right technologies, and building solutions that bridge frontend, backend, databases, and external services.',
    'about.p3': 'I work on the development of web applications, cross-platform solutions, and backend services using technologies such as Java, Python, React, Flutter, FastAPI, SQL, and PostgreSQL.',
    'about.p4': 'I especially enjoy integrating APIs, connecting systems, and automating processes. I also use artificial intelligence tools to research, learn new technologies, build features, and optimize code.',
    'about.p5': 'I consider myself autonomous, practical, and solution-oriented, with a natural ability to learn and adapt to new tech stacks.',
    'about.p6': 'I look to keep growing professionally by taking part in projects where I can turn ideas into functional digital solutions and contribute to building tech products.',
    
    // Contacto
    'contact.title': 'Contact',
    'contact.subtitle': 'Have any questions or proposals? Don\'t hesitate to contact me!',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDesc': 'Let\'s connect professionally',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.footer': 'I respond as quickly as possible. Looking forward to your message! 🚀',
    'contact.downloadCV': 'Download CV',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
