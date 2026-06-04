import { useState } from 'react';

type Entry = { id: number; desc: string; type: 'ingreso' | 'egreso'; amount: number; date: string };

const INITIAL: Entry[] = [
  { id: 1, desc: 'Pago cliente A', type: 'ingreso', amount: 5000, date: '2024-03-01' },
  { id: 2, desc: 'Renta oficina', type: 'egreso', amount: 1500, date: '2024-03-02' },
  { id: 3, desc: 'Venta producto', type: 'ingreso', amount: 2300, date: '2024-03-05' },
];

export default function ContabilidadDemo() {
  const [entries, setEntries] = useState<Entry[]>(INITIAL);
  const [form, setForm] = useState({ desc: '', type: 'ingreso', amount: '' });
  const [adding, setAdding] = useState(false);

  const ingresos = entries.filter((e) => e.type === 'ingreso').reduce((s, e) => s + e.amount, 0);
  const egresos = entries.filter((e) => e.type === 'egreso').reduce((s, e) => s + e.amount, 0);

  const add = () => {
    if (!form.desc || !form.amount) return;
    setEntries([...entries, {
      id: Date.now(), desc: form.desc,
      type: form.type as 'ingreso' | 'egreso',
      amount: Number(form.amount),
      date: new Date().toISOString().slice(0, 10),
    }]);
    setForm({ desc: '', type: 'ingreso', amount: '' });
    setAdding(false);
  };

  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden h-64 flex flex-col text-xs">
      {/* window bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-950 border-b border-neutral-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-neutral-500 text-xs">Contabilidad</span>
        </div>
        <button onClick={() => setAdding(!adding)} className="text-violet-400 hover:text-violet-300">+ Registro</button>
      </div>

      {/* summary */}
      <div className="grid grid-cols-3 border-b border-neutral-800">
        <div className="px-3 py-2 border-r border-neutral-800 text-center">
          <p className="text-neutral-500">Ingresos</p>
          <p className="text-green-400 font-mono font-bold">Q{ingresos.toLocaleString()}</p>
        </div>
        <div className="px-3 py-2 border-r border-neutral-800 text-center">
          <p className="text-neutral-500">Egresos</p>
          <p className="text-red-400 font-mono font-bold">Q{egresos.toLocaleString()}</p>
        </div>
        <div className="px-3 py-2 text-center">
          <p className="text-neutral-500">Balance</p>
          <p className={`font-mono font-bold ${ingresos - egresos >= 0 ? 'text-white' : 'text-red-400'}`}>
            Q{(ingresos - egresos).toLocaleString()}
          </p>
        </div>
      </div>

      {adding ? (
        <div className="p-3 space-y-1.5 border-b border-neutral-800 bg-neutral-800/40">
          <div className="flex gap-2">
            <input
              placeholder="Descripción"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              className="flex-1 bg-neutral-800 rounded px-2 py-1 text-neutral-200 placeholder-neutral-600 outline-none"
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="bg-neutral-800 rounded px-2 py-1 text-neutral-200 outline-none"
            >
              <option value="ingreso">Ingreso</option>
              <option value="egreso">Egreso</option>
            </select>
            <input
              placeholder="Monto"
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-20 bg-neutral-800 rounded px-2 py-1 text-neutral-200 placeholder-neutral-600 outline-none"
            />
            <button onClick={add} className="bg-violet-600 hover:bg-violet-500 text-white px-2 rounded transition-colors">✓</button>
          </div>
        </div>
      ) : null}

      {/* list */}
      <div className="flex-1 overflow-auto">
        {entries.map((e) => (
          <div key={e.id} className="flex items-center justify-between px-3 py-1.5 border-b border-neutral-800 hover:bg-neutral-800/40">
            <span className="text-neutral-300 flex-1">{e.desc}</span>
            <span className="text-neutral-600 mr-3">{e.date}</span>
            <span className={`font-mono font-medium ${e.type === 'ingreso' ? 'text-green-400' : 'text-red-400'}`}>
              {e.type === 'ingreso' ? '+' : '-'}Q{e.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
