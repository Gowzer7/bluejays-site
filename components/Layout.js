import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* NAVBAR */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
  <Link href="/" className="text-xl font-bold hover:underline">
    Blue Jays Dashboard
  </Link>
</nav>

      {/* MAIN CONTENT */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}