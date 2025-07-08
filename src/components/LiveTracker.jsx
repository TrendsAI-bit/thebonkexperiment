import { useState } from 'react';

const wallets = [
  { addr: '0xabc...123', percent: 1.2 },
  { addr: '0xdef...456', percent: 2.1 },
  { addr: '0xghi...789', percent: 1.8 },
  { addr: '0xjkl...012', percent: 3.4 },
  { addr: '0xmno...345', percent: 0.9 },
];

const emojis = ['🐾', '🎉', '😎', '💎'];

export default function LiveTracker() {
  const [hovered, setHovered] = useState(-1);

  return (
    <section style={{ margin: '60px 0', border: '2px solid var(--bonk-orange)', padding: 30, background: '#fff', boxShadow: '3px 3px 0px var(--bonk-orange)' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: 20, textAlign: 'center', color: 'var(--bonk-orange)', textShadow: '1px 1px 0px #000', fontFamily: 'Patrick Hand, cursive' }}>
        🐕 Qualified Pack Members: 247
      </h2>
      <ul style={{ listStyle: 'none', fontSize: '1.2rem', padding: 0 }}>
        {wallets.map((w, i) => (
          <li
            key={w.addr}
            style={{
              marginBottom: 10,
              padding: 10,
              border: '1px solid var(--bonk-orange)',
              background: '#fff',
              borderRadius: 8,
              position: 'relative',
              fontFamily: 'Patrick Hand, cursive',
              boxShadow: hovered === i ? '2px 2px 0px #FFA500' : 'none',
              transition: 'box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            {w.addr} {hovered === i && (
              <span style={{ marginLeft: 8, fontSize: '1.3em' }}>{emojis[i % emojis.length]}</span>
            )}
            <span style={{ float: 'right' }}>{w.percent}% held</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 