export const Footer = () => {
    return (
        <footer className="py-8 bg-earth-sand border-t border-earth-clay/20 text-foreground-dark">
            <div className="container mx-auto px-4 text-center">
                <p className="font-serif text-earth-clay text-xl tracking-widest mb-2 font-bold">TIERRA DORADA</p>
                <p className="text-foreground-dark/50 text-sm">
                    © {new Date().getFullYear()} Masterclass Abundancia. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
