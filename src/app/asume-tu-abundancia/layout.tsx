import type { Metadata } from "next";

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

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
