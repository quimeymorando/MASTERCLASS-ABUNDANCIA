"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    color: string;
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
        let shootingStars: ShootingStar[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = 400;
            const colors = ["#FFFFFF", "#E6E2D3", "#4A90E2"]; // Blanco, Arena, Celeste

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random(),
                    speed: Math.random() * 0.05 + 0.01,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const createShootingStar = () => {
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * (canvas.height / 2),
                length: Math.random() * 80 + 20,
                speed: Math.random() * 10 + 5,
                opacity: 1,
                width: Math.random() * 2 + 1,
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars (Pulsating)
            stars.forEach((star) => {
                star.opacity += star.speed;
                if (star.opacity > 1 || star.opacity < 0) {
                    star.speed = -star.speed;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${star.opacity})`;
                ctx.fill();

                // Subtle glow for brighter stars
                if (star.opacity > 0.8) {
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = star.color;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            // Draw Shooting Stars (with trails)
            shootingStars.forEach((ss, index) => {
                ss.x -= ss.speed;
                ss.y += ss.speed * 0.5;
                ss.opacity -= 0.02;

                if (ss.opacity <= 0) {
                    shootingStars.splice(index, 1);
                    return;
                }

                const gradient = ctx.createLinearGradient(
                    ss.x, ss.y,
                    ss.x + ss.length, ss.y - ss.length * 0.5
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = ss.width;
                ctx.lineCap = "round";
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(ss.x + ss.length, ss.y - ss.length * 0.5);
                ctx.stroke();

                // Glow head
                ctx.beginPath();
                ctx.arc(ss.x, ss.y, ss.width * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = "white";
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            if (Math.random() < 0.015) {
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
            className="absolute inset-0 pointer-events-none z-0 bg-transparent"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};
