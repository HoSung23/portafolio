export default function About() {
  return (
    <section id="about" className="py-20 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-2">Sobre mí</p>
          <h2 className="text-3xl font-bold text-white mb-4">Ho Sung Choi</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Desarrollador Fullstack con experiencia construyendo sistemas completos desde cero.
            Me especializo en crear soluciones funcionales, escalables y con buena UI — tanto para
            empresas como proyectos independientes.
          </p>
          <p className="text-neutral-500 leading-relaxed text-sm">
            Trabajo con el stack moderno de JavaScript (React, TypeScript, Astro, Node.js) y también
            con .NET / Blazor para proyectos empresariales. Me gusta entender el problema antes de
            escribir la primera línea de código.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Frontend', items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS'] },
            { label: 'Backend', items: ['Node.js', 'Express', '.NET', 'C#'] },
            { label: 'Bases de datos', items: ['PostgreSQL', 'SQLite', 'Supabase', 'SQL Server'] },
            { label: 'Herramientas', items: ['Git', 'GitHub', 'AWS', 'Postman', 'Vite', 'Electron', 'Docker'] },
          ].map((group) => (
            <div key={group.label} className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
              <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-2">{group.label}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
