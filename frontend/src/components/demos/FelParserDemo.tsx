import { useState } from 'react';

const FACTURAS = [
  { nit: '1234567-8', emisor: 'Tech Corp S.A.', total: 'Q 1,250.00', iva: 'Q 139.29', fecha: '2024-03-15', serie: 'A' },
  { nit: '9876543-2', emisor: 'Comercial Norte', total: 'Q 3,800.50', iva: 'Q 423.27', fecha: '2024-03-14', serie: 'B' },
  { nit: '5551234-0', emisor: 'Distribuidora GT', total: 'Q 720.00', iva: 'Q 80.18', fecha: '2024-03-13', serie: 'A' },
];

export default function FelParserDemo() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = FACTURAS.filter(
    (f) =>
      f.emisor.toLowerCase().includes(search.toLowerCase()) ||
      f.nit.includes(search)
  );

  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden text-xs font-mono h-64 flex flex-col">
      {/* top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950 border-b border-neutral-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-neutral-500 text-xs">FEL Parser — Facturas</span>
      </div>
      {/* search */}
      <div className="px-3 py-2 border-b border-neutral-800">
        <input
          className="w-full bg-neutral-800 rounded px-2 py-1 text-neutral-200 outline-none placeholder-neutral-600 text-xs"
          placeholder="Buscar por NIT o emisor…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-neutral-950 text-neutral-500">
            <tr>
              <th className="text-left px-3 py-1.5">Emisor</th>
              <th className="text-left px-3 py-1.5">NIT</th>
              <th className="text-right px-3 py-1.5">Total</th>
              <th className="text-right px-3 py-1.5">IVA</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f, i) => (
              <tr
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`cursor-pointer border-t border-neutral-800 transition-colors ${
                  selected === i ? 'bg-violet-900/30' : 'hover:bg-neutral-800/50'
                }`}
              >
                <td className="px-3 py-1.5 text-neutral-200">{f.emisor}</td>
                <td className="px-3 py-1.5 text-neutral-400">{f.nit}</td>
                <td className="px-3 py-1.5 text-right text-green-400">{f.total}</td>
                <td className="px-3 py-1.5 text-right text-violet-400">{f.iva}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selected !== null && (
          <div className="px-3 py-2 bg-violet-900/20 border-t border-violet-800/40 text-violet-300">
            Serie: {filtered[selected]?.serie} · Fecha: {filtered[selected]?.fecha}
          </div>
        )}
      </div>
    </div>
  );
}
