import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Masterclass Abundancia | Tierra Dorada",
    description: "Activa el estado interno donde TODO lo que deseas ya está disponible.",
    formatDetection: {
        telephone: false,
        date: false,
        email: false,
        address: false,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased overflow-x-hidden`}>
                <Suspense fallback={null}>
                    <MetaPixel />
                </Suspense>
                {children}
            </body>
        </html>
    );
}
