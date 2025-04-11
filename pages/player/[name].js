import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

export default function PlayerPage() {
  const { query } = useRouter();
  const name = query.name;

  const [career, setCareer] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!name) return;

    async function fetchData() {
      const careerRes = await fetch(`https://bluejays-backend-production.up.railway.app/api/mlb/player/${name}/career`);
      const gamesRes = await fetch(`https://bluejays-backend-production.up.railway.app/api/mlb/player/${name}/gamelogs`);
      const careerData = await careerRes.json();
      const gamesData = await gamesRes.json();
      setCareer(careerData);
      setGames(gamesData);
    }

    fetchData();
  }, [name]);

  if (!career || games.length === 0) {
    return <Layout><p className="text-gray-400">Loading {name}...</p></Layout>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{name}</h1>

      {/* AVG Line Chart */}
      <div className="mb-8 bg-[#161b22] p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">2024 Game-by-Game AVG</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={games}>
            <XAxis dataKey="date" />
            <YAxis domain={[0, 0.400]} />
            <Tooltip />
            <Line type="monotone" dataKey="AVG" stroke="#60a5fa" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* OPS Comparison */}
      <div className="mb-8 bg-[#161b22] p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">OPS: Career vs 2024</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={[
            { label: 'Career OPS', value: career.OPS },
            { label: '2024 OPS', value: games[games.length - 1]?.OPS || 0 },
          ]}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* HR Comparison */}
      <div className="mb-8 bg-[#161b22] p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">HR: Career vs 2024</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={[
            { label: 'Career HR', value: career.HR },
            { label: '2024 HR', value: games[games.length - 1]?.HR || 0 },
          ]}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
}