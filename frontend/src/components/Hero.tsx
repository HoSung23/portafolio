import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const STACK = [
  { label: "React",         color: "bg-cyan-950 text-cyan-300 border-cyan-800" },
  { label: "TypeScript",    color: "bg-blue-950 text-blue-300 border-blue-800" },
  { label: "Node.js",       color: "bg-green-950 text-green-300 border-green-800" },
  { label: "Tailwind CSS",  color: "bg-teal-950 text-teal-300 border-teal-800" },
  { label: "Astro",         color: "bg-orange-950 text-orange-300 border-orange-800" },
  { label: "Blazor / .NET", color: "bg-purple-950 text-purple-300 border-purple-800" },
  { label: "Supabase",      color: "bg-emerald-950 text-emerald-300 border-emerald-800" },
  { label: "SQLite",        color: "bg-neutral-800 text-neutral-300 border-neutral-600" },
  { label: "Electron",      color: "bg-sky-950 text-sky-300 border-sky-800" },
  { label: "Vite",          color: "bg-yellow-950 text-yellow-300 border-yellow-800" },
  { label: "GitHub",        color: "bg-neutral-800 text-neutral-300 border-neutral-600" },
  { label: "AWS",           color: "bg-amber-950 text-amber-300 border-amber-800" },
  { label: "Postman",       color: "bg-orange-950 text-orange-300 border-orange-800" },
];

export default function Hero() {
  const textRef  = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowRef.current || !textRef.current || !pillsRef.current) return;
    animate(glowRef.current, {
      translateX: ["-10%", "10%"],
      translateY: ["-8%", "8%"],
      scale: [1, 1.14, 1],
      duration: 7000,
      direction: "alternate",
      loop: true,
      ease: "inOutSine",
    });

    animate(Array.from(textRef.current?.children ?? []), {
      opacity: [0, 1],
      translateY: [36, 0],
      delay: stagger(110, { start: 80 }),
      duration: 850,
      ease: "outExpo",
    });

    animate(Array.from(pillsRef.current?.children ?? []), {
      opacity: [0, 1],
      scale: [0.6, 1],
      delay: stagger(45, { start: 650 }),
      duration: 480,
      ease: "outBack",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/4 right-0 w-[650px] h-[650px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.20) 0%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto w-full px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div ref={textRef} className="flex flex-col">
            <p style={{ opacity: 0 }} className="text-violet-400 text-sm font-mono tracking-widest mb-4 uppercase">
              Disponible para trabajar
            </p>
            <h1 style={{ opacity: 0 }} className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Ho Sung<br />
              <span className="text-violet-400">Choi</span>
            </h1>
            <p style={{ opacity: 0 }} className="text-neutral-400 text-lg mb-2 font-medium">
              Fullstack Developer
            </p>
            <p style={{ opacity: 0 }} className="text-neutral-500 text-base leading-relaxed max-w-md mb-8">
              Diseno y construyo sistemas web completos desde la base de datos
              hasta la interfaz. Trabajo con React, Node.js, TypeScript, Astro y .NET.
            </p>
            <div style={{ opacity: 0 }} className="flex items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="https://github.com/HoSung23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div ref={pillsRef} className="flex flex-wrap gap-2 justify-center md:justify-end">
            {STACK.map((t) => (
              <span
                key={t.label}
                style={{ opacity: 0 }}
                className={`px-3 py-1 text-xs font-mono rounded-full border ${t.color}`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
