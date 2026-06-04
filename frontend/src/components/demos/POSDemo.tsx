import { useState } from 'react';

const MENU = [
  { id: 1, name: 'Big Burger', price: 35, emoji: '🍔', cat: 'Burgers' },
  { id: 2, name: 'Crispy Chicken', price: 32, emoji: '🍗', cat: 'Chicken' },
  { id: 3, name: 'Papas Fritas', price: 18, emoji: '🍟', cat: 'Sides' },
  { id: 4, name: 'Refresco', price: 12, emoji: '🥤', cat: 'Bebidas' },
  { id: 5, name: 'McFlurry', price: 20, emoji: '🍦', cat: 'Postres' },
  { id: 6, name: 'Nuggets x6', price: 25, emoji: '🍘', cat: 'Chicken' },
];

export default function POSDemo() {
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [cat, setCat] = useState('Todos');

  const cats = ['Todos', ...Array.from(new Set(MENU.map((m) => m.cat)))];
  const filtered = cat === 'Todos' ? MENU : MENU.filter((m) => m.cat === cat);

  const add = (id: number) =>
    setCart((prev) => {
      const ex = prev.find((c) => c.id === id);
      if (ex) return prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c));
      return [...prev, { id, qty: 1 }];
    });

  const total = cart.reduce((sum, c) => {
    const item = MENU.find((m) => m.id === c.id);
    return sum + (item?.price ?? 0) * c.qty;
  }, 0);

  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden h-64 flex text-xs">
      {/* top bar */}
      <div className="absolute" />
      {/* left: menu */}
      <div className="flex-1 flex flex-col border-r border-neutral-800">
        {/* window bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950 border-b border-neutral-800">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-neutral-500 text-xs">POS — Punto de Venta</span>
        </div>
        {/* cats */}
        <div className="flex gap-1 px-2 py-1.5 bg-neutral-950 border-b border-neutral-800 overflow-x-auto">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-2 py-0.5 rounded text-xs whitespace-nowrap transition-colors ${
                cat === c ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {/* grid */}
        <div className="flex-1 overflow-auto p-2 grid grid-cols-3 gap-1.5 content-start">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => add(item.id)}
              className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-2 text-center transition-colors"
            >
              <div className="text-xl mb-0.5">{item.emoji}</div>
              <div className="text-neutral-200 leading-tight">{item.name}</div>
              <div className="text-orange-400 font-mono">Q{item.price}</div>
            </button>
          ))}
        </div>
      </div>
      {/* right: cart */}
      <div className="w-28 flex flex-col">
        <div className="px-2 py-2 text-neutral-500 border-b border-neutral-800 font-semibold">Orden</div>
        <div className="flex-1 overflow-auto">
          {cart.length === 0 ? (
            <p className="text-neutral-600 text-center mt-4">Vacío</p>
          ) : (
            cart.map((c) => {
              const item = MENU.find((m) => m.id === c.id)!;
              return (
                <div key={c.id} className="flex justify-between px-2 py-1 border-b border-neutral-800">
                  <span className="text-neutral-300 truncate">{item.emoji} x{c.qty}</span>
                  <span className="text-orange-400 font-mono">Q{item.price * c.qty}</span>
                </div>
              );
            })
          )}
        </div>
        <div className="px-2 py-2 border-t border-neutral-800">
          <div className="flex justify-between text-white font-bold">
            <span>Total</span>
            <span className="text-orange-400 font-mono">Q{total}</span>
          </div>
          {cart.length > 0 && (
            <button
              onClick={() => setCart([])}
              className="mt-1.5 w-full bg-orange-600 hover:bg-orange-500 text-white rounded py-1 transition-colors"
            >
              Cobrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
