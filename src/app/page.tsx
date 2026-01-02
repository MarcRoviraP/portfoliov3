'use client';

import { useState } from 'react';
import Topbar from "./topbar";
import Presentacion from "./presentacion";
import Image from "next/image";
import Experiencia from "./experiencia";
import Proyectos from './proyects';
import AboutMe from './about_me';
import Contacto from './contacto';
import { i } from 'framer-motion/client';
import { motion } from 'framer-motion';

export default function Home() {
  const [seccionActual, setSeccionActual] = useState('presentacion');


  const handleButtonClick = (id: string) => {
    if (id === 'experiencia') {
      setSeccionActual('experiencia');
      return 1;
    } else if (id === 'presentacion') {
      setSeccionActual('presentacion');
      return 1;
    } else if (id === 'proyectos') {
      setSeccionActual('proyectos');
      return 1;
    } else if (id === 'sobre-mi') {
      setSeccionActual('sobre-mi');
      return 1;
    } else if (id === 'contacto') {
      setSeccionActual('contacto');
      return 1;
    }
    return 0;
  };

  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-black via-gray-900 to-black text-white"
 
    >
      <Topbar onButtonClick={handleButtonClick} />
      
      {/* Renderizado condicional */}
      {seccionActual === 'presentacion' && <Presentacion />}
      {seccionActual === 'experiencia' && <Experiencia />}
      {seccionActual === 'proyectos' && <Proyectos />}
      {seccionActual === 'sobre-mi' && <AboutMe />}
      {seccionActual === 'contacto' && <Contacto />}
      
      
      <motion.div className="mt-8" whileHover={{ scale: 1.3 }} onTap={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Image
          src="/up.ico"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </motion.div>
    </main>
  );
}