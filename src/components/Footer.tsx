export const Footer = () => {
    return (
        <footer className="py-12 bg-gradient-to-r from-blue-50 via-earth-cream to-blue-50 border-t border-earth-clay/10 text-foreground-dark relative overflow-hidden">
            {/* Subtle light effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />

            <div className="container mx-auto px-4 text-center">
                <p className="font-serif text-earth-clay text-2xl tracking-[0.2em] mb-4 font-bold">
                    TIERRA DORADA
                </p>

                <div className="flex justify-center gap-6 mb-8 text-earth-clay/70 text-sm">
                    <span>Amor</span> • <span>Conciencia</span> • <span>Abundancia</span>
                </div>

                <p className="text-foreground-dark/40 text-xs">
                    © {new Date().getFullYear()} Masterclass Abundancia. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
