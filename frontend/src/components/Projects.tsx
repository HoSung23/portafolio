import ProjectCard from './ProjectCard';
import FelParserDemo from './demos/FelParserDemo';
import POSDemo from './demos/POSDemo';
import EcommerceDemo from './demos/EcommerceDemo';
import ICarDemo from './demos/ICarDemo';
import ContabilidadDemo from './demos/ContabilidadDemo';

const PROJECTS = [
  {
    title: 'FEL Parser',
    description:
      'Sistema para parsear, clasificar y visualizar facturas electrónicas del régimen FEL de Guatemala. Cálculo automático de IVA, filtros por NIT, emisor y fecha, con exportación de reportes.',
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind'],
    demo: <FelParserDemo />,
    accentColor: 'bg-gradient-to-r from-violet-600 to-transparent',
  },
  {
    title: 'POS System — SMK',
    description:
      'Punto de Venta estilo kiosk (inspirado en McDonald\'s) con interfaz táctil, gestión de órdenes, roles de usuario, impresión térmica y modo contingencia offline.',
    stack: ['React', 'Electron', 'TypeScript', 'SQLite', 'Zustand', 'Tailwind'],
    demo: <POSDemo />,
    accentColor: 'bg-gradient-to-r from-orange-600 to-transparent',
  },
  {
    title: 'E-Commerce — Grocer',
    description:
      'Tienda en línea con catálogo de productos, carrito de compras, rastreo de pedidos y panel de administración. Incluye sistema de autenticación y gestión de vendedores.',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Supabase'],
    demo: <EcommerceDemo />,
    accentColor: 'bg-gradient-to-r from-neutral-400 to-transparent',
  },
  {
    title: 'Plataforma Automotriz',
    description:
      'Sistema de gestión automotriz: catálogo de vehículos y repuestos, agenda de citas, cotizaciones, estadísticas de taller e importaciones de inventario.',
    stack: ['Astro', 'React', 'TypeScript', 'Supabase', 'Tailwind'],
    demo: <ICarDemo />,
    accentColor: 'bg-gradient-to-r from-blue-600 to-transparent',
  },
  {
    title: 'Sistema de Contabilidad',
    description:
      'Aplicación de contabilidad web con registro de ingresos y egresos, historial de movimientos, autorización de registros por rol de administrador y generación de reportes PDF.',
    stack: ['Blazor', '.NET', 'C#', 'Entity Framework', 'SQL Server'],
    demo: <ContabilidadDemo />,
    accentColor: 'bg-gradient-to-r from-purple-600 to-transparent',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        {/* section header */}
        <div className="mb-12">
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-2">Proyectos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sistemas construidos
          </h2>
          <p className="text-neutral-500 mt-2 text-sm max-w-lg">
            Cada tarjeta incluye una demo interactiva — puedes usarla directamente aquí.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
