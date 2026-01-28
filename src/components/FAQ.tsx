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
        <section className="py-24 px-4 bg-earth-cream">
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
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-earth-clay/20 last:border-none"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-6 text-left group"
            >
                <span className="text-xl font-medium text-foreground-dark group-hover:text-earth-clay transition-colors">
                    {question}
                </span>
                <span className="p-2 rounded-full bg-earth-sand group-hover:bg-earth-clay/20 transition-colors">
                    {isOpen ? <Minus className="w-5 h-5 text-earth-clay" /> : <Plus className="w-5 h-5 text-earth-clay" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-foreground-dark/70 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
