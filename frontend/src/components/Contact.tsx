import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export default function Contact() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cardsRef.current) {
          animate(Array.from(cardsRef.current.children), {
            opacity: [0, 1],
            translateY: [30, 0],
            delay: stagger(100, { start: 0 }),
            duration: 600,
            ease: 'outExpo',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-2">Contacto</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">¿Hablamos?</h2>
        <p className="text-neutral-500 text-sm mb-10 max-w-md">
          Disponible para proyectos freelance, trabajo remoto o colaboraciones. Escríbeme por cualquiera de estos canales.
        </p>

        <div ref={cardsRef} className="grid sm:grid-cols-3 gap-4 w-full max-w-2xl">
          {/* Email */}
          <a
            href="mailto:choihosung23@gmail.com"
            style={{ opacity: 0 }}
            className="group flex flex-col gap-3 p-5 rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-violet-600/50 hover:bg-violet-950/20 transition-all duration-200"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-neutral-200 text-sm group-hover:text-white transition-colors break-all">
                choihosung23@gmail.com
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/50249331504"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0 }}
            className="group flex flex-col gap-3 p-5 rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-green-600/50 hover:bg-green-950/20 transition-all duration-200"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-0.5">WhatsApp</p>
              <p className="text-neutral-200 text-sm group-hover:text-white transition-colors">
                +502 4933 1504
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HoSung23"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0 }}
            className="group flex flex-col gap-3 p-5 rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200"
          >
            <svg className="w-7 h-7 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <div>
              <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-0.5">GitHub</p>
              <p className="text-neutral-200 text-sm group-hover:text-white transition-colors">
                HoSung23
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
