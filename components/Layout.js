import { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from 'next/link';

const players = [
  'Bo Bichette',
  'Vladimir Guerrero Jr.',
  'George Springer',
  'Daulton Varsho',
  'Cavan Biggio',
  'Danny Jansen',
  'Kevin Kiermaier',
  'Justin Turner',
  'Ernie Clement',
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <nav className="bg-[#161b22] px-6 py-4 flex justify-between items-center border-b border-gray-700 shadow-md">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Blue Jays Dashboard
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-700 border border-gray-600"
          >
            Players ▾
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-52 bg-[#161b22] border border-gray-700 rounded shadow-lg z-50">
              {players.map((player) => (
                <Link
                  key={player}
                  href={`/player/${encodeURIComponent(player)}`}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {player}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
}