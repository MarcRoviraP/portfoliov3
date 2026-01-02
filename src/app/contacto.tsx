'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function Contacto() {
    const { t } = useLanguage();
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto px-8 py-16"
        >
            <motion.h2 
                className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {t('contact.title')}
            </motion.h2>

            <motion.p
                className="text-xl text-gray-300 text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {t('contact.subtitle')}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/marc-rovira-perell%C3%B3-823424150/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 flex flex-col items-center justify-center text-center group"
                >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        💼
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t('contact.linkedin')}</h3>
                    <p className="text-gray-200">{t('contact.linkedinDesc')}</p>
                </motion.a>

                {/* Teléfono */}
                <motion.a
                    href="tel:+34645029216"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-8 shadow-lg hover:shadow-green-500/50 transition-shadow duration-300 flex flex-col items-center justify-center text-center group"
                >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        📱
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t('contact.phone')}</h3>
                    <p className="text-gray-200">+34 645 029 216</p>
                </motion.a>

                {/* Email */}
                <motion.a
                    href="mailto:treballsrovireta@gmail.com"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-br from-red-600 to-pink-700 rounded-xl p-8 shadow-lg hover:shadow-red-500/50 transition-shadow duration-300 flex flex-col items-center justify-center text-center group"
                >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        ✉️
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t('contact.email')}</h3>
                    <p className="text-gray-200 break-all">treballsrovireta@gmail.com</p>
                </motion.a>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-12 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm text-center"
            >
                <p className="text-gray-300 text-lg">
                    {t('contact.footer')}
                </p>
            </motion.div>
        </motion.section>
    );
}
