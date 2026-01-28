"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "¿Es realmente gratuita la Masterclass?",
        answer: "Sí, el acceso es 100% gratuito. Mi objetivo es entregarte valor masivo para que puedas experimentar una transformación real en tu vida financiera y espiritual."
    },
    {
        question: "¿Necesito conocimientos previos?",
        answer: "No. Esta masterclass está diseñada tanto para principiantes como para personas que llevan años en el camino del desarrollo personal pero sienten que hay un techo que no logran romper."
    },
    {
        question: "¿Cómo accedo al contenido?",
        answer: "Al registrarte en el formulario, recibirás acceso inmediato a la grabación de la Masterclass para que puedas verla a tu propio ritmo."
    },
    {
        question: "¿Qué pasa si no aplico lo aprendido?",
        answer: "El conocimiento sin acción es solo entretenimiento. Esta clase te dará las llaves, pero eres tú quien debe girarlas. Si aplicas las 3 claves, la transformación es inevitable."
    }
];

export const FAQ = () => {
    return (
        <section className="py-24 px-4 bg-earth-cream/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-primary/5 rounded-full blur-[80px] -z-10" />

            <div className="container max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-5xl text-earth-clay mb-12 text-center"
                >
                    Preguntas Frecuentes
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "border border-earth-clay/10 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300",
                isOpen && "shadow-md ring-1 ring-earth-clay/20"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-6 text-left group bg-white hover:bg-gray-50/50 transition-colors"
            >
                <span className={cn(
                    "text-lg font-medium transition-colors duration-300",
                    isOpen ? "text-earth-clay" : "text-foreground-dark group-hover:text-earth-clay/80"
                )}>
                    {question}
                </span>
                <span className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    isOpen ? "bg-earth-clay text-white rotate-180" : "bg-earth-sand/50 text-earth-clay group-hover:bg-earth-clay/10"
                )}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-foreground-dark/70 leading-relaxed bg-white/50 border-t border-dashed border-earth-clay/10">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
