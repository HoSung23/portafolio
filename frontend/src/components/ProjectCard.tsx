import { type ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  demo: ReactNode;
  accentColor: string;
  index: number;
}

export default function ProjectCard({ title, description, stack, demo, accentColor, index }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:border-neutral-600 transition-colors duration-300">
      {/* accent line top */}
      <div className={`h-px w-full ${accentColor}`} />

      <div className="p-5">
        {/* header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-neutral-600 text-xs font-mono mb-1 block">0{index + 1}</span>
            <h3 className="text-white font-semibold text-base">{title}</h3>
          </div>
        </div>

        <p className="text-neutral-500 text-sm leading-relaxed mb-4">{description}</p>

        {/* interactive demo */}
        <div className="rounded-xl overflow-hidden mb-4 ring-1 ring-neutral-800">
          {demo}
        </div>

        {/* stack */}
        <div className="flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-800 text-neutral-400 border border-neutral-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
