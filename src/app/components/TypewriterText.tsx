'use client';

import { motion } from 'framer-motion';

type Props = {
    text: string;
    className?: string;
    as?: 'span' | 'h1' | 'h2' | 'p';
};

export default function TypewriterText({
    text,
    className,
    as = 'span',
}: Props) {
    const letters = text.split('');
    const Tag = as;

    return (
        <Tag className={className}>
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </Tag>
    );
}
