'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { House, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface TopbarProps {
  onButtonClick: (id: string) => void;
}

export default function Topbar({ onButtonClick }: TopbarProps) {
    const { language, setLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (id: string) => {
        onButtonClick(id);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-20 bg-transparent text-white flex items-center justify-center px-4 md:px-8 relative"
            >
                {/* Botones de navegación - Desktop */}
                <div className="hidden lg:flex space-x-4 xl:space-x-6">
                    <motion.button 
                        id="experiencia"
                        className='text-sm xl:text-lg px-3 py-2'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onButtonClick('experiencia')}
                    >
                        {t('nav.experience')}
                    </motion.button>
                    <motion.button 
                        id="proyectos"
                        className='text-sm xl:text-lg px-3 py-2'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onButtonClick('proyectos')}
                    >
                        {t('nav.projects')}
                    </motion.button>
                    
                    <motion.button 
                        id="presentacion"
                        className='text-sm xl:text-lg px-3 py-2'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onButtonClick('presentacion')}
                    >
                        <House />
                    </motion.button>
                    <motion.button 
                        id="sobre-mi"
                        className='text-sm xl:text-lg px-3 py-2'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onButtonClick('sobre-mi')}
                    >
                        {t('nav.about')}
                    </motion.button>
                    <motion.button 
                        id="contacto"
                        className='text-sm xl:text-lg px-3 py-2'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onButtonClick('contacto')}
                    >
                        {t('nav.contact')}
                    </motion.button>
                </div>

                {/* Botón hamburguesa - Mobile */}
                <button 
                    className="lg:hidden absolute left-4 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Logo/Título - Mobile (centrado) */}
                <div className="lg:hidden text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    Portfolio
                </div>

                {/* Selector de idioma - posición absoluta a la derecha */}
                <div className="flex gap-2 absolute right-4 md:right-8">
                    <motion.button
                        onClick={() => setLanguage('es')}
                        className={`px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                            language === 'es'
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ES
                    </motion.button>
                    <motion.button
                        onClick={() => setLanguage('en')}
                        className={`px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                            language === 'en'
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        EN
                    </motion.button>
                </div>
            </motion.div>

            {/* Menú móvil */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                    height: mobileMenuOpen ? 'auto' : 0,
                    opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg"
            >
                <div className="flex flex-col space-y-2 p-4">
                    <motion.button 
                        className='text-left py-3 px-4 rounded-lg hover:bg-red-500/20 transition-colors'
                        onClick={() => handleNavClick('presentacion')}
                        whileTap={{ scale: 0.95 }}
                    >
                        <House className="inline mr-2" size={20} /> Inicio
                    </motion.button>
                    <motion.button 
                        className='text-left py-3 px-4 rounded-lg hover:bg-red-500/20 transition-colors'
                        onClick={() => handleNavClick('experiencia')}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('nav.experience')}
                    </motion.button>
                    <motion.button 
                        className='text-left py-3 px-4 rounded-lg hover:bg-red-500/20 transition-colors'
                        onClick={() => handleNavClick('proyectos')}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('nav.projects')}
                    </motion.button>
                    <motion.button 
                        className='text-left py-3 px-4 rounded-lg hover:bg-red-500/20 transition-colors'
                        onClick={() => handleNavClick('sobre-mi')}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('nav.about')}
                    </motion.button>
                    <motion.button 
                        className='text-left py-3 px-4 rounded-lg hover:bg-red-500/20 transition-colors'
                        onClick={() => handleNavClick('contacto')}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('nav.contact')}
                    </motion.button>
                </div>
            </motion.div>
        </>
    );
}