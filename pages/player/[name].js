import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';

export default function PlayerPage() {
  const router = useRouter();
  const { name } = router.query;

  const [career, setCareer] = useState(null);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    async function fetchData() {
      try {
        const careerRes = await fetch(`http://localhost:8000/api/mlb/player/${name}/career`);
        const gamesRes = await fetch(`http://localhost:8000/api/mlb/player/${name}/gamelogs`);
        const careerData = await careerRes.json();
        const gamesData = await gamesRes.json();

        setCareer(careerData);
        setGames(gamesData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading player data:", err);
        setLoading(false);
      }
    }

    fetchData();
  }, [name]);

  if (loading) return <Layout><p>Loading {name}...</p></Layout>;
  if (!career || !games || games.length === 0) return <Layout><p>No data for {name}</p></Layout>;

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">{name}</h2>

      <div className="bg-white p-4 rounded-md border shadow-sm mb-6">
        <h4 className="text-sm text-gray-500 mb-2">Career Stats</h4>
        <ul>
          <li><strong>AVG:</strong> {career.AVG}</li>
          <li><strong>OPS:</strong> {career.OPS}</li>
          <li><strong>HR:</strong> {career.HR}</li>
          <li><strong>RBI:</strong> {career.RBI}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm text-gray-500 mb-2">2024 Game Logs Coming Soon...</h4>
      </div>
    </Layout>
  );
}