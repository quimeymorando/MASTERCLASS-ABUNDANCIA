"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Sparkles, Zap, Heart, Database, Send, Wind } from "lucide-react";

const benefits = [
    {
        icon: Sparkles,
        title: "Romper Creencias Limitantes",
        description: "Desmantela las barreras internas que ocultan tu abundancia natural."
    },
    {
        icon: Zap,
        title: "Activar Confianza",
        description: "Despierta la valoración propia y la rendición como llaves energéticas maestras."
    },
    {
        icon: Database,
        title: "Elevar Relación con el Dinero",
        description: "Transforma tu mentalidad financiera desde la raíz profundizando en tu ser."
    },
    {
        icon: Heart,
        title: "Conexión Álmica",
        description: "Entiende por qué tu alma ya ES abundante y cómo manifestarlo en lo humano."
    },
    {
        icon: Send,
        title: "Acción Consciente",
        description: "Aprende a accionar con claridad y certeza incluso cuando la mente sabotea."
    },
    {
        icon: Wind,
        title: "Soltar Cargas",
        description: "Libérate de la culpa, frustración, autosabotaje, drama y miedo."
    }
];

export const Benefits = () => {
    return (
        <section className="py-24 px-4 bg-earth-cream relative overflow-hidden text-foreground-dark">

            {/* Organic/Earth Background Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-earth-sand/30 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-earth-clay/10 blur-[80px] rounded-full pointer-events-none translate-y-1/4 -translate-x-1/4" />

            <div className="container max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-earth-clay mb-4">Lo Que Vas a Descubrir</h2>
                    <p className="text-foreground-dark/70 max-w-2xl mx-auto text-lg">
                        Una inmersión profunda en las claves que transformarán tu realidad financiera y espiritual.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card variant="solid" className="h-full group hover:-translate-y-1 transition-transform duration-300">
                                <div className="mb-4 p-3 bg-earth-sand rounded-xl text-earth-clay w-fit group-hover:bg-earth-clay group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground-dark mb-2">{item.title}</h3>
                                <p className="text-foreground-dark/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
