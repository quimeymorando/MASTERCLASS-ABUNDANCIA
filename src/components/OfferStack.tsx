"use client";

import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const stackItems = [
    { name: "Masterclass: Ingeniería de la Abundancia", value: "$197" },
    { name: "Workbook: Desbloqueo de Creencias", value: "$47" },
    { name: "Acceso a Comunidad Tierra Dorada", value: "$97" },
    { name: "BONUS: Meditación de Activación", value: "$27" },
];

export const OfferStack = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-earth-cream to-blue-50 overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C4A484_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-earth-clay mb-4">
                        Esto es Todo lo que Recibes Gratis
                    </h2>
                    <p className="text-foreground-dark/70">
                        No es solo una clase, es un paquete completo de transformación.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* The Stack List */}
                    <div className="space-y-4">
                        {stackItems.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ WebkitBackfaceVisibility: "hidden", WebkitTransform: "translate3d(0,0,0)" }}
                                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-earth-clay/10"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-earth-clay/10 rounded-full text-earth-clay">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-foreground-dark">{item.name}</span>
                                </div>
                                <span className="font-bold text-earth-clay/60 line-through decoration-red-400 decoration-2 text-sm">
                                    {item.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* The Total Value Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ WebkitBackfaceVisibility: "hidden", WebkitTransform: "translate3d(0,0,0)" }}
                    >
                        <Card variant="solid" className="bg-celestial-deep text-white border-none shadow-2xl relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-primary blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />

                            <div className="text-center space-y-6 relative z-10">
                                <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gold-primary mb-4">
                                    <Gift className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-blue-200 text-sm tracking-widest uppercase mb-1">Valor Total Real</p>
                                    <p className="text-4xl font-serif text-white/50 line-through decoration-red-500 decoration-2">$368 USD</p>
                                </div>
                                <div className="scale-110 transform">
                                    <p className="text-gold-primary text-sm tracking-widest uppercase mb-1 font-bold">HOY PARA TI</p>
                                    <p className="text-6xl font-serif text-white font-bold drop-shadow-md">GRATIS</p>
                                </div>
                                <p className="text-sm text-blue-200/60 pb-4">
                                    Cero riesgo. 100% Transformación.
                                </p>
                                <Button variant="celestial" className="w-full" onClick={onOpenModal}>
                                    RECLAMAR MI ACCESO AHORA
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
