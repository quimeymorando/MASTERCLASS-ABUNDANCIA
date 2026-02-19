"use client";

import { motion } from "framer-motion";

export const SmokeEffect = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            {/* Fog Blob 1 - Top Left Drift - Optimized */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    x: ["-5%", "5%", "-5%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-blue-400/5 rounded-full blur-[60px] will-change-transform"
            />

            {/* Fog Blob 2 - Bottom Right Drift - Optimized */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.1, 0.15, 0.1],
                    x: ["5%", "-5%", "5%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-indigo-400/5 rounded-full blur-[80px] will-change-transform"
            />

            {/* Mystical Center Gloam - Optimized */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-[30%] left-[20%] w-[50vw] h-[30vw] bg-blue-300/5 rounded-full blur-[100px] will-change-transform"
            />
        </div>
    );
};
