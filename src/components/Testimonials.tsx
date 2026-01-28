"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "María Fernández",
        role: "Emprendedora Digital",
        content: "Llevaba 3 años estancada en los mismos ingresos. Después de aplicar la clave #2 de la Masterclass, en solo 3 semanas logré mi mejor facturación histórica. No es magia, es coherencia pura.",
        initials: "MF"
    },
    {
        name: "Carlos Rivera",
        role: "Terapeuta Holístico",
        content: "Siempre pensé que la espiritualidad y el dinero estaban peleados. Joaquín me enseñó a ver el dinero como energía de servicio. Mi consulta está llena y yo estoy en paz.",
        initials: "CR"
    },
    {
        name: "Ana Sofía P.",
        role: "Diseñadora Gráfica",
        content: "La meditación de activación cambió mi frecuencia por completo. Dejé de perseguir clientes y empezaron a llegar solos. Gracias Tierra Dorada por tanto valor.",
        initials: "AS"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-4 bg-celestial-deep relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <style jsx>{`
                    .stars-sm {
                        background-image: radial-gradient(1px 1px at 10px 10px, #ffffff, rgba(0,0,0,0));
                        background-size: 50px 50px;
                        width: 100%; height: 100%;
                    }
                `}</style>
                <div className="stars-sm" />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
                        Resultados Reales de Personas como Tú
                    </h2>
                    <p className="text-blue-100/70 max-w-2xl mx-auto">
                        Ellos ya activaron su abundancia. Ahora es tu turno.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{ WebkitBackfaceVisibility: "hidden", WebkitTransform: "translate3d(0,0,0)" }}
                        >
                            <Card variant="glass" className="h-full flex flex-col justify-between hover:bg-white/10 transition-colors">
                                <div>
                                    <div className="flex gap-1 text-gold-primary mb-4">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <Quote className="w-8 h-8 text-white/20 mb-4" />
                                    <p className="text-blue-50/90 leading-relaxed italic mb-6">
                                        &quot;{t.content}&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-primary to-earth-clay flex items-center justify-center font-bold text-white shadow-lg">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">{t.name}</p>
                                        <p className="text-blue-200/50 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
