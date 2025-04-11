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
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <nav className="bg-[#161b22] px-6 py-4 flex justify-between items-center border-b border-gray-700 shadow-md">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Blue Jays Dashboard
        </Link>

        <div className="flex gap-4 overflow-x-auto max-w-[60%] scrollbar-hide">
          {players.map((player) => (
            <Link
              key={player}
              href={`/player/${encodeURIComponent(player)}`}
              className="text-sm text-gray-300 hover:text-white whitespace-nowrap"
            >
              {player}
            </Link>
          ))}
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
}