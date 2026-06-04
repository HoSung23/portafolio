import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Hoodie Oversized', price: 299, emoji: '🧥', tag: 'Nuevo' },
  { id: 2, name: 'Tee Básica', price: 149, emoji: '👕', tag: '' },
  { id: 3, name: 'Cargo Pants', price: 399, emoji: '👖', tag: 'Top' },
  { id: 4, name: 'Bucket Hat', price: 129, emoji: '🧢', tag: '' },
  { id: 5, name: 'Sneakers Lo', price: 599, emoji: '👟', tag: 'Nuevo' },
  { id: 6, name: 'Bomber Jacket', price: 499, emoji: '🥼', tag: 'Top' },
];

export default function EcommerceDemo() {
  const [cart, setCart] = useState<number[]>([]);
  const [page, setPage] = useState<'shop' | 'cart'>('shop');

  const toggle = (id: number) =>
    setCart((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const total = cart.reduce((s, id) => s + (PRODUCTS.find((p) => p.id === id)?.price ?? 0), 0);

  return (
    <div className="bg-white rounded-xl overflow-hidden h-64 flex flex-col text-xs">
      {/* navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 text-white border-b border-neutral-800">
        <span className="font-bold tracking-widest text-xs uppercase">GROCER</span>
        <div className="flex gap-3 text-neutral-400 text-xs">
          <button onClick={() => setPage('shop')} className={page === 'shop' ? 'text-white' : 'hover:text-white'}>Shop</button>
          <button onClick={() => setPage('cart')} className={`relative ${page === 'cart' ? 'text-white' : 'hover:text-white'}`}>
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px]">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {page === 'shop' ? (
        <div className="flex-1 overflow-auto bg-neutral-50 p-2 grid grid-cols-3 gap-2">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="bg-white rounded-lg border border-neutral-200 p-2 flex flex-col gap-1">
              <div className="text-2xl text-center py-1">{p.emoji}</div>
              {p.tag && (
                <span className="self-start px-1.5 py-0.5 bg-black text-white text-[9px] rounded">{p.tag}</span>
              )}
              <div className="text-neutral-800 font-medium leading-tight">{p.name}</div>
              <div className="text-neutral-600 font-mono">Q{p.price}</div>
              <button
                onClick={() => toggle(p.id)}
                className={`mt-auto w-full py-1 rounded text-[10px] font-medium transition-colors ${
                  cart.includes(p.id)
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'bg-neutral-950 text-white hover:bg-neutral-800'
                }`}
              >
                {cart.includes(p.id) ? 'Quitar' : 'Agregar'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 overflow-auto bg-neutral-50 p-3">
          {cart.length === 0 ? (
            <p className="text-neutral-400 text-center mt-6">Tu carrito está vacío</p>
          ) : (
            <>
              {cart.map((id) => {
                const p = PRODUCTS.find((x) => x.id === id)!;
                return (
                  <div key={id} className="flex items-center justify-between py-1.5 border-b border-neutral-200">
                    <span>{p.emoji} {p.name}</span>
                    <span className="font-mono text-neutral-700">Q{p.price}</span>
                  </div>
                );
              })}
              <div className="flex justify-between font-bold mt-2 text-neutral-900">
                <span>Total</span>
                <span className="font-mono">Q{total}</span>
              </div>
              <button
                onClick={() => setCart([])}
                className="mt-3 w-full bg-neutral-950 text-white py-1.5 rounded text-xs hover:bg-neutral-800 transition-colors"
              >
                Finalizar compra
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
