"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost" | "link" | "celestial" | "earth";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            // Default Primary now maps to Earth Gold for general use
            primary: "bg-earth-clay text-white shadow-lg shadow-earth-clay/20 hover:shadow-earth-clay/40 border-none font-bold",

            // Celestial Variant: Deep Blue with Starry Glow
            celestial: "bg-celestial-light text-white shadow-lg shadow-celestial-light/30 hover:shadow-celestial-light/50 border-none font-bold",

            // Earth Variant: Soft Sand/Clay
            earth: "bg-earth-sand text-foreground-dark hover:bg-earth-clay hover:text-white transition-colors font-bold",

            secondary: "bg-transparent border border-current hover:bg-white/5",
            ghost: "bg-transparent hover:bg-black/5",
            link: "text-celestial-light underline-offset-4 hover:underline p-0 h-auto"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wide uppercase",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {/* Glow Effect for Celestial/Primary */}
                {(variant === 'celestial' || variant === 'primary') && (
                    <div className="absolute inset-0 -z-10 bg-white/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
                )}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
