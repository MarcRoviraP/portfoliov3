'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import TypewriterText from './components/TypewriterText';

export default function Presentacion() {
    const { t } = useLanguage();

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center justify-center text-center px-4"
        >
                        <Image src="/assets/marc.png" alt="Profile Picture" width={100} height={100} className="rounded-full mr-4" />

            <h1 className="text-4xl md:text-6xl font-bold mb-4"> <TypewriterText text={t('home.greeting')} /></h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6"><TypewriterText text={t('home.title')} /></h2>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
                 {t('home.description')} 
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-cyan-400 hover:border-cyan-500/50 transition-colors duration-300">
                    <span>🎾</span>
                    <span className="font-medium">{t('home.hobby1')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-purple-400 hover:border-purple-500/50 transition-colors duration-300">
                    <span>🚀</span>
                    <span className="font-medium">{t('home.hobby2')}</span>
                </div>
            </div>
        </motion.div>
    );
}