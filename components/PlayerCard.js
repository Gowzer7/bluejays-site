import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const PlayerCard = ({ name }) => {
  const [career, setCareer] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`https://bluejays-backend-production.up.railway.app/api/mlb/player/${name}/career`)
      .then(res => res.json())
      .then(setCareer);

    fetch(`https://bluejays-backend-production.up.railway.app/api/mlb/player/${name}/gamelogs`)
      .then(res => res.json())
      .then(setGames);
  }, [name]);

  if (!career || games.length === 0) return <p>Loading {name}...</p>;

  const compareStats = [
    { label: "Career AVG", value: career.AVG },
    { label: "Career OPS", value: career.OPS },
    { label: "Career RBI", value: career.RBI },
  ];

   return (
    <Link href={`/player/${encodeURIComponent(name)}`}>
      <span className="block border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
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
