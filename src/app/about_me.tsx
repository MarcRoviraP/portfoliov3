'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function AboutMe() {
    const { t } = useLanguage();

    const paragraphs = [
        t('about.p1'),
        t('about.p2'),
        t('about.p3'),
        t('about.p4'),
        t('about.p5'),
        t('about.p6'),
    ];

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
                {paragraphs.map((paragraph, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 * (index + 1), duration: 0.5 }}
                        className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/40"
                    >
                        <p className="text-gray-100">
                            {paragraph}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
