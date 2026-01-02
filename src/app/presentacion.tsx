'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

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

            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('home.greeting')}</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">{t('home.title')}</h2>
            <p className="text-lg md:text-xl max-w-2xl">
                {t('home.description')}
            </p>
        </motion.div>
    );
}