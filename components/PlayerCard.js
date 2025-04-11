import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

// 🧠 STEP 1: Player name → playerId mapping
const playerPhotos = {
  "Bo Bichette": 665489,
  "Vladimir Guerrero Jr.": 665543,
  "George Springer": 592663,
  "Cavan Biggio": 624415,
  "Daulton Varsho": 669387,
  // Add more as needed
};

const PlayerCard = ({ name }) => {
  const [career, setCareer] = useState(null);
  const [games, setGames] = useState([]);

  // 🧠 STEP 2: Generate player headshot URL
  const playerId = playerPhotos[name];
  const headshotUrl = playerId
    ? `https://img.mlbstatic.com/mlb-photos/image/upload/v1/people/${playerId}/headshot/67/current.jpg`
    : null;

  useEffect(() => {
    fetch(`https://bluejays-backend-production.up.railway.app/api/mlb/player/${name}/career`)
      .then(res => res.json())
      .then(setCareer);

    fetch(`https://bluejays-backend-production.up.railway.app/api/mlb/player/${name}/gamelogs`)
      .then(res => res.json())
      .then(setGames);
  }, [name]);

  if (!career || games.length === 0) {
    return (
      <div className="border border-gray-300 p-4 rounded-md shadow-sm mb-6 bg-white">
        <p>Loading {name}...</p>
      </div>
    );
  }

  const compareStats = [
    { label: "Career AVG", value: career.AVG },
    { label: "Career OPS", value: career.OPS },
    { label: "Career RBI", value: career.RBI },
  ];

  // ✅ STEP 3: Render full card with image
  return (
    <Link href={`/player/${encodeURIComponent(name)}`}>
      <span className="block border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
        {headshotUrl && (
          <img
            src={headshotUrl}
            alt={`${name} headshot`}
            className="w-20 h-20 rounded-full object-cover mb-3 border border-gray-300"
          />
        )}

        <h2 className="text-lg font-semibold text-blue-800 mb-2">{name}</h2>

        <div className="mb-4">
          <h4 className="text-sm text-gray-500 font-medium mb-1">Career Summary</h4>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={compareStats}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">2024 Game-by-Game AVG</h4>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={games}>
              <XAxis dataKey="date" />
              <YAxis domain={[0, 0.400]} />
              <Tooltip />
              <Line type="monotone" dataKey="AVG" stroke="#d32f2f" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </span>
    </Link>
  );
};

export default PlayerCard;
