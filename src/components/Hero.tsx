"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { StarBackground } from "@/components/effects/StarBackground";

interface HeroProps {
    onOpenModal: () => void;
}

export const Hero = ({ onOpenModal }: HeroProps) => {

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-celestial-deep text-white py-20 lg:py-0 transition-transform duration-300">

            {/* --- Celestial Background Effects --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#09172E] to-[#0A1A35] -z-20" />
            <StarBackground />


            {/* Content Container */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">

                {/* Text Column */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className=""
                    >
                        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-bold tracking-widest uppercase mb-6 shadow-glow">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Grabación Disponible por Tiempo Limitado
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 text-white drop-shadow-xl"
                    >
                        <span className="block text-blue-200/80 text-lg md:text-xl font-sans tracking-normal font-normal mb-2 normal-case">
                            Cómo Romper el &quot;Techo de Cristal&quot; Financiero y...
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-celestial-light">
                            ALINEAR TU ALMA CON LA ABUNDANCIA
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light"
                    >
                        Descubre la <strong>Ingeniería Holística</strong> para descongelar tus ingresos y manifestar la vida que mereces, <u>sin trabajar más horas</u> ni perder tu paz mental.
                    </motion.p>

                    {/* Desktop Button Location */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button
                            size="lg"
                            variant="celestial"
                            onClick={onOpenModal}
                            className="text-lg px-8 py-6 h-auto shadow-[0_0_30px_-5px_rgba(74,144,226,0.5)] w-full sm:w-auto"
                        >
                            QUIERO ACTIVAR MI ABUNDANCIA
                        </Button>
                    </motion.div>
                </div>

                {/* Video Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1 w-full max-w-xl lg:max-w-full flex flex-col gap-8"
                >
                    <VideoPlayer videoId="HtGqclEnEcs" />

                    {/* Mobile Button Location (Appears after video) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex lg:hidden flex-col sm:flex-row gap-4 justify-center w-full"
                    >
                        <Button
                            size="lg"
                            variant="celestial"
                            onClick={onOpenModal}
                            className="text-lg px-8 py-6 h-auto shadow-[0_0_30px_-5px_rgba(74,144,226,0.5)] w-full"
                        >
                            QUIERO ACTIVAR MI ABUNDANCIA
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Modal moved to page.tsx */}
        </section>
    );
};
