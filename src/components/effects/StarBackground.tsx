"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    baseOpacity: number;
    speed: number;
    color: string;
    phase: number;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
    width: number;
}

export const StarBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = 90; // Minimalist: Menos de 100 estrellas
            // Paleta muy sutil: Blancos rotos y dorados pálidos
            const colors = ["#FFFFFF", "#FDFBF7", "#E6E2D3"];

            for (let i = 0; i < starCount; i++) {
                const baseOpacity = Math.random() * 0.4 + 0.1; // Opacidad base muy baja
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.0 + 0.1, // Puntos muy finos
                    opacity: baseOpacity,
                    baseOpacity: baseOpacity,
                    speed: Math.random() * 0.005 + 0.002, // Twinkle ULTRA lento
                    color: colors[Math.floor(Math.random() * colors.length)],
                    phase: Math.random() * Math.PI * 2
                });
            }
        };

        const createShootingStar = () => {
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * (canvas.height / 3),
                length: Math.random() * 60 + 10, // Colas más cortas y elegantes
                speed: Math.random() * 5 + 3, // Velocidad moderada
                opacity: 0.8,
                width: Math.random() * 1.5 + 0.5,
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            stars.forEach((star) => {
                // Animación de pulso suave
                star.phase += star.speed;
                const pulse = Math.sin(star.phase);
                // La opacidad oscila suavemente alrededor de su base
                const currentOpacity = star.baseOpacity + (pulse * 0.15);
                const finalOpacity = Math.max(0, Math.min(1, currentOpacity));

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${finalOpacity})`;
                ctx.fill();

                // Glow solo para las más brillantes y grandes
                if (finalOpacity > 0.4 && star.size > 0.8) {
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = "rgba(255, 255, 255, 0.3)";
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            // Draw Shooting Stars
            shootingStars.forEach((ss, index) => {
                ss.x -= ss.speed;
                ss.y += ss.speed * 0.3; // Ángulo más suave
                ss.opacity -= 0.01;

                if (ss.opacity <= 0) {
                    shootingStars.splice(index, 1);
                    return;
                }

                const gradient = ctx.createLinearGradient(
                    ss.x, ss.y,
                    ss.x + ss.length, ss.y - ss.length * 0.3
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = ss.width;
                ctx.lineCap = "round";
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(ss.x + ss.length, ss.y - ss.length * 0.3);
                ctx.stroke();
            });

            // Probabilidad muy baja para estrellas fugaces (eventos raros)
            if (Math.random() < 0.003) {
                createShootingStar();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ?
                `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
                "255, 255, 255";
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};
