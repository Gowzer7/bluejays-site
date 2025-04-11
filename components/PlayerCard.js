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
    fetch(bluejays-backend-production.up.railway.app/${name}/career`)
      .then(res => res.json())
      .then(setCareer);

    fetch(bluejays-backend-production.up.railway.app/${name}/gamelogs`)
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
      {/* span replaces div to fix SSR error */}
      <span style={{
        display: 'block',
        border: '1px solid #ccc',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        background: '#fdfdfd',
        transition: 'box-shadow 0.3s ease',
        cursor: 'pointer'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{name}</h2>

        <h4>Career Summary</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={compareStats}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>

        <h4>2024 Game-by-Game AVG</h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={games}>
            <XAxis dataKey="date" />
            <YAxis domain={[0, 0.400]} />
            <Tooltip />
            <Line type="monotone" dataKey="AVG" stroke="#d32f2f" />
          </LineChart>
        </ResponsiveContainer>
      </span>
    </Link>
  );
};

export default PlayerCard;


