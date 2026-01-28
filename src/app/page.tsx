"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StarBackground } from "@/components/effects/StarBackground";
import { SmokeEffect } from "@/components/effects/SmokeEffect";

export default function Hub() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-4 relative overflow-hidden">
      {/* Background Effect */}
      <StarBackground />
      <SmokeEffect />

      <div className="z-10 text-center flex flex-col items-center gap-8">
        <h1 className="font-serif text-4xl md:text-6xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#4A90E2] font-light">
          TIERRA DORADA
        </h1>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <Link href="/asume-tu-abundancia">
          <Button
            variant="celestial"
            size="lg"
            className="text-lg px-10 py-8 min-w-[280px] hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(74,144,226,0.3)]"
          >
            Masterclass: Asume tu Abundancia
          </Button>
        </Link>
      </div>
    </main>
  );
}
