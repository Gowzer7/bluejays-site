import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blue Jays Dashboard</h1>
      <p className="text-gray-400 mb-8">Use the navbar to select a player and view their current performance, compared to career stats and projections.</p>

      <div className="bg-[#161b22] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Coming Soon:</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Current record and AL East standings</li>
          <li>Team leaders (HR, AVG, OPS)</li>
          <li>Last game highlight video and summary</li>
        </ul>
      </div>
    </Layout>
  );
}