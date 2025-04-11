import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
    <section className="mb-8 bg-[#161b22] p-4 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-3">🧾 Current Record</h2>
  <p className="text-gray-300 text-lg">Toronto Blue Jays: <strong>9-7</strong></p>
</section>

<section className="mb-8 bg-[#161b22] p-4 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-3">📊 AL East Standings</h2>
  <ul className="text-gray-300 text-sm space-y-1">
    <li>1. Yankees – 11-6</li>
    <li>2. Blue Jays – 9-7</li>
    <li>3. Orioles – 9-8</li>
    <li>4. Rays – 8-9</li>
    <li>5. Red Sox – 7-10</li>
  </ul>
</section>
<section className="mb-8 bg-[#161b22] p-4 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-3">🏆 Team Stat Leaders (Top 3)</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300 text-sm">
    {/* OPS */}
    <div>
      <p className="text-white font-semibold text-lg mb-2">OPS Leaders</p>
      <ul className="space-y-1">
        <li>1. Vladimir Guerrero Jr. – .982</li>
        <li>2. Bo Bichette – .934</li>
        <li>3. Justin Turner – .902</li>
      </ul>
    </div>

    {/* HR */}
    <div>
      <p className="text-white font-semibold text-lg mb-2">Home Run Leaders</p>
      <ul className="space-y-1">
        <li>1. Bo Bichette – 5</li>
        <li>2. Daulton Varsho – 4</li>
        <li>3. Vladimir Guerrero Jr. – 4</li>
      </ul>
    </div>

    {/* AVG */}
    <div>
      <p className="text-white font-semibold text-lg mb-2">Batting Average Leaders</p>
      <ul className="space-y-1">
        <li>1. George Springer – .344</li>
        <li>2. Danny Jansen – .327</li>
        <li>3. Cavan Biggio – .319</li>
      </ul>
    </div>
  </div>
</section>
<section className="mb-8 bg-[#161b22] p-4 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-3">🎥 Last Game Highlights</h2>
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/0ZxALXOLBUI?si=gyz2AS1MVx-yneSf"
      title="Blue Jays Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
</section>
    </Layout>
  );
}