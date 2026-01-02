'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function AboutMe() {
    const { t } = useLanguage();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto px-8 py-16"
        >
            <motion.h2 
                className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {t('about.title')}
            </motion.h2>

            <div className="space-y-6 text-lg leading-relaxed">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
                >
                    <p className="text-gray-100">
                        {t('about.intro')} <span className="text-red-400 font-semibold">Marc</span>. {t('about.description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
                >
                    <h3 className="text-2xl font-semibold mb-3 text-red-400">
                        {t('about.competitions')}
                    </h3>
                    <p className="text-gray-100">
                        {t('about.competitionsDesc')} <span className="font-semibold">Programame</span>, <span className="font-semibold">CodeJam</span>, y <span className="font-semibold">Las 12 Uvas</span>, {t('about.competitionsDesc2')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
                >
                    <h3 className="text-2xl font-semibold mb-3 text-red-400">
                        {t('about.projects')}
                    </h3>
                    <p className="text-gray-100">
                        {t('about.projectsDesc')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-6 border border-red-500/30"
                >
                    <p className="text-gray-100 text-center italic">
                        {t('about.quote')}
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}