"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    variant?: "glass" | "solid" | "outline";
}

export const Card = ({ className, children, variant = "glass", ...props }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-colors",

                // Variant: Glass (for Celestial backgrounds)
                variant === "glass" && "border border-white/10 bg-white/5 backdrop-blur-md text-white shadow-xl isolate",

                // Variant: Solid (for Earth/Cream backgrounds)
                variant === "solid" && "bg-white border border-earth-sand/50 shadow-sm text-foreground-dark hover:shadow-md hover:border-earth-clay/30",

                // Variant: Outline
                variant === "outline" && "border border-current bg-transparent",

                className
            )}
            {...props}
        >
            {/* Subtle Noise for texture on Glass */}
            {variant === 'glass' && (
                <div className="absolute inset-0 bg-white/5 opacity-[0.03] mix-blend-overlay pointer-events-none" />
            )}

            {children}
        </motion.div>
    );
};
