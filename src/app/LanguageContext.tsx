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
    
    // Experiencia
    'experience.title': 'Experiencia Profesional',
    
    // Proyectos
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Explora mi colección de aplicaciones y juegos',
    'projects.all': 'Todos',
    'projects.desktop': 'Escritorio',
    'projects.mobile': 'Móvil',
    'projects.viewGithub': 'Ver en GitHub',
    
    // Sobre Mí
    'about.title': 'Sobre Mí',
    'about.intro': 'Me llamo',
    'about.description': 'Empecé con la informática a los 15 años y desde entonces no he parado de aprender. Me encanta el mundo de la programación y la tecnología en general.',
    'about.competitions': '🏆 Competiciones',
    'about.competitionsDesc': 'He participado en concursos de programación como',
    'about.competitionsDesc2': 'donde he podido poner a prueba mis habilidades y aprender de otros programadores.',
    'about.projects': '💡 Proyectos y Aprendizaje',
    'about.projectsDesc': 'He creado diversos proyectos personales que me han permitido experimentar con diferentes tecnologías y metodologías. Me gusta aprender constantemente y compartir conocimiento con la comunidad.',
    'about.quote': '"La pasión por la tecnología y el aprendizaje continuo son el motor que impulsa mi carrera como desarrollador."',
    
    // Contacto
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes alguna pregunta o propuesta? ¡No dudes en contactarme!',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDesc': 'Conectemos profesionalmente',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.footer': 'Respondo lo más rápido posible. ¡Espero tu mensaje! 🚀',
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
    
    // Experiencia
    'experience.title': 'Professional Experience',
    
    // Proyectos
    'projects.title': 'My Projects',
    'projects.subtitle': 'Explore my collection of applications and games',
    'projects.all': 'All',
    'projects.desktop': 'Desktop',
    'projects.mobile': 'Mobile',
    'projects.viewGithub': 'View on GitHub',
    
    // Sobre Mí
    'about.title': 'About Me',
    'about.intro': 'My name is',
    'about.description': 'I started with computers at 15 years old and since then I haven\'t stopped learning. I love the world of programming and technology in general.',
    'about.competitions': '🏆 Competitions',
    'about.competitionsDesc': 'I have participated in programming contests such as',
    'about.competitionsDesc2': 'where I was able to test my skills and learn from other programmers.',
    'about.projects': '💡 Projects and Learning',
    'about.projectsDesc': 'I have created various personal projects that have allowed me to experiment with different technologies and methodologies. I like to constantly learn and share knowledge with the community.',
    'about.quote': '"The passion for technology and continuous learning are the driving force behind my career as a developer."',
    
    // Contacto
    'contact.title': 'Contact',
    'contact.subtitle': 'Have any questions or proposals? Don\'t hesitate to contact me!',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDesc': 'Let\'s connect professionally',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.footer': 'I respond as quickly as possible. Looking forward to your message! 🚀',
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
