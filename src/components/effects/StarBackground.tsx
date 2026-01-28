"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StarBackground = () => {
    const [stars, setStars] = useState<{ id: number; top: number; left: number; size: number; delay: number }[]>([]);
    const [meteors, setMeteors] = useState<number[]>([]);

    useEffect(() => {
        // Generate static twinkling stars
        const starCount = 100;
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
        }));
        setStars(newStars);

        // Generate meteors
        // We create a fixed number of meteors that recycle or loop via CSS animation
        const meteorCount = 20;
        setMeteors(new Array(meteorCount).fill(true));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Background Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A14]/50 to-[#0A1A2F]/30" />

            {/* Static Twinkling Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                    className="absolute bg-white rounded-full shadow-[0_0_2px_#fff]"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                />
            ))}

            {/* Meteors Rain Effect */}
            {meteors.map((_, idx) => (
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                    )}
                    style={{
                        top: 0,
                        left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
                        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
                    }}
                >
                </span>
            ))}
        </div>
    );
};
