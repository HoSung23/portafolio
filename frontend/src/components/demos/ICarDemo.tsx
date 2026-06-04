import { useState } from 'react';

const VEHICLES = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2021, price: 'Q 165,000', status: 'Disponible', emoji: '🚗' },
  { id: 2, brand: 'Honda', model: 'CR-V', year: 2020, price: 'Q 210,000', status: 'Reservado', emoji: '🚙' },
  { id: 3, brand: 'Nissan', model: 'Frontier', year: 2022, price: 'Q 285,000', status: 'Disponible', emoji: '🛻' },
];

const SERVICES = [
  { icon: '🔧', label: 'Diagnóstico' },
  { icon: '🛢️', label: 'Cambio de aceite' },
  { icon: '🔋', label: 'Batería' },
  { icon: '🛑', label: 'Frenos' },
];

export default function ICarDemo() {
  const [tab, setTab] = useState<'vehicles' | 'appointment'>('vehicles');
  const [form, setForm] = useState({ name: '', service: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden h-64 flex flex-col text-xs">
      {/* window bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950 border-b border-neutral-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-neutral-500 text-xs">Plataforma Automotriz</span>
      </div>
      {/* tabs */}
      <div className="flex border-b border-neutral-800">
        {(['vehicles', 'appointment'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-1.5 text-xs transition-colors ${
              tab === t ? 'text-blue-400 border-b-2 border-blue-500' : 'text-neutral-500 hover:text-white'
            }`}
          >
            {t === 'vehicles' ? '🚗 Vehículos' : '📅 Cita'}
          </button>
        ))}
      </div>

      {tab === 'vehicles' ? (
        <div className="flex-1 overflow-auto p-2 space-y-1.5">
          {VEHICLES.map((v) => (
            <div key={v.id} className="flex items-center gap-2 bg-neutral-800 rounded-lg px-3 py-2">
              <span className="text-xl">{v.emoji}</span>
              <div className="flex-1">
                <span className="text-white font-medium">{v.brand} {v.model}</span>
                <span className="text-neutral-500 ml-1">{v.year}</span>
              </div>
              <span className="text-green-400 font-mono">{v.price}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                v.status === 'Disponible' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
              }`}>
                {v.status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 overflow-auto p-3">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-green-400">
              <span className="text-3xl">✅</span>
              <p className="font-medium">¡Cita agendada!</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', service: '', date: '' }); }}
                className="text-neutral-400 hover:text-white text-[10px] underline">
                Agendar otra
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <input
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-neutral-800 rounded px-2 py-1.5 text-neutral-200 placeholder-neutral-600 outline-none"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-neutral-800 rounded px-2 py-1.5 text-neutral-200 outline-none"
              >
                <option value="">Seleccionar servicio…</option>
                {SERVICES.map((s) => (
                  <option key={s.label} value={s.label}>{s.icon} {s.label}</option>
                ))}
              </select>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-neutral-800 rounded px-2 py-1.5 text-neutral-200 outline-none"
              />
              <button
                onClick={() => form.name && form.service && form.date && setSubmitted(true)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded py-1.5 transition-colors disabled:opacity-40"
              >
                Agendar cita
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
