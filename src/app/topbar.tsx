'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { House } from 'lucide-react';

interface TopbarProps {
  onButtonClick: (id: string) => void;
}

export default function Topbar({ onButtonClick }: TopbarProps) {
    const { language, setLanguage, t } = useLanguage();

    return (
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-20 bg-transparent text-white flex items-center justify-center px-8 relative"
        >
            {/* Botones de navegación - centrados */}
            <div className="flex space-x-6">
                <motion.button 
                    id="experiencia"
                    className='text-lg'
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onButtonClick('experiencia')}
                >
                    {t('nav.experience')}
                </motion.button>
                <motion.button 
                    id="proyectos"
                    className='text-lg'
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onButtonClick('proyectos')}
                >
                    {t('nav.projects')}
                </motion.button>
                
                <motion.button 
                    id="presentacion"
                    className='text-lg'
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onButtonClick('presentacion')}
                >
                    <House />
                </motion.button>
                <motion.button 
                    id="sobre-mi"
                    className='text-lg'
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onButtonClick('sobre-mi')}
                >
                    {t('nav.about')}
                </motion.button>
                <motion.button 
                    id="contacto"
                    className='text-lg'
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(219, 82, 82, 1)" ,backgroundColor: "rgba(219, 82, 82, 1)",padding: "12px 24px", borderRadius: "8px"}}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onButtonClick('contacto')}
                >
                    {t('nav.contact')}
                </motion.button>
            </div>

            {/* Selector de idioma - posición absoluta a la derecha */}
            <div className="flex gap-2 absolute right-8">
                <motion.button
                    onClick={() => setLanguage('es')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
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
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
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
    );
}