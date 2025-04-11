import Layout from '../components/Layout';
import PlayerCard from '../components/PlayerCard';

export default function Home() {
  const hitters = [
    "Bo Bichette",
    "Vladimir Guerrero Jr.",
    "George Springer"
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hitters.map(name => (
          <PlayerCard key={name} name={name} />
        ))}
      </div>
    </Layout>
  );
}