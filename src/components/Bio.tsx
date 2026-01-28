"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const Bio = () => {
    return (
        <section className="py-24 px-4 bg-white text-foreground-dark relative overflow-hidden">
            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Image Placeholder / Avatar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-md relative"
                >
                    <div className="aspect-[3/4] rounded-2xl bg-earth-clay/20 relative overflow-hidden">
                        {/* Replace with actual image if available, or use a stylized placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-earth-clay/50 font-serif text-4xl">
                            Joaquín Altermann
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl md:text-5xl text-earth-clay mb-6"
                    >
                        Quién es Joaquín Altermann
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-foreground-dark/80 text-lg leading-relaxed"
                    >
                        <p>
                            Mentor en Ingeniería de la Conciencia y Estratega Espiritual. Joaquín ha guiado a miles de personas a reconectar con su poder creador, fusionando la sabiduría ancestral con herramientas prácticas de transformación moderna.
                        </p>
                        <p>
                            Fundador de <strong>Tierra Dorada</strong>, su misión es elevar la frecuencia del planeta ayudando a líderes y buscadores a manifestar una vida de coherencia, abundancia y propósito.
                        </p>
                        <Card variant="solid" className="bg-white/50 border-earth-clay/20 italic">
                            "La abundancia no es algo que consigues. Es algo con lo que sintonizas."
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
