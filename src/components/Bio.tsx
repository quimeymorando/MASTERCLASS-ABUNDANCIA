"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const Bio = () => {
    return (
        <section className="py-24 px-4 bg-celestial-deep text-foreground-light relative overflow-hidden">
            {/* Background Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#0A1A35] opacity-50 -z-10" />

            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

                {/* Image Placeholder / Avatar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-md relative"
                >
                    <div className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-sm">
                        {/* Replace with actual image if available, or use a stylized placeholder */}
                        <img
                            src="https://assets.cdn.filesafe.space/uuaiNCJCRvymWQ2ejuex/media/698b6cc38682155edc61e55e.png"
                            alt="Joaquín Altermann"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl md:text-5xl text-earth-sand mb-6"
                    >
                        Quién es Joaquín Altermann
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-blue-100/80 text-lg leading-relaxed"
                    >
                        <p>
                            Mentor en Ingeniería de la Conciencia y Estratega Espiritual. Joaquín ha guiado a miles de personas a reconectar con su poder creador, fusionando la sabiduría ancestral con herramientas prácticas de transformación moderna.
                        </p>
                        <p>
                            Fundador de <strong>Tierra Dorada</strong>, su misión es elevar la frecuencia del planeta ayudando a líderes y buscadores a manifestar una vida de coherencia, abundancia y propósito.
                        </p>
                        <Card variant="solid" className="bg-white/5 border-white/10 italic text-earth-sand">
                            &quot;La abundancia no es algo que consigues. Es algo con lo que sintonizas.&quot;
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
