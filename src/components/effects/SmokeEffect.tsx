"use client";

import { motion } from "framer-motion";

export const SmokeEffect = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            {/* Fog Blob 1 - Top Left Drift */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    x: ["-10%", "10%", "-10%"],
                    y: ["0%", "5%", "0%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen filter"
            />

            {/* Fog Blob 2 - Bottom Right Drift */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    x: ["10%", "-10%", "10%"],
                    y: ["0%", "-5%", "0%"]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen filter"
            />

            {/* Mystical Center Gloam */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-[30%] left-[20%] w-[60vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[150px] mix-blend-overlay filter"
            />
        </div>
    );
};
