import { useState } from 'react';
import { motion } from 'framer-motion';

const panels = [
  {
    img: '/pose1.png',
    title: 'Hold at least 1% for 24 hours',
    back: 'Stay strong! No selling until the next Woof Check.'
  },
  {
    img: '/pose2.png',
    title: 'No Sells till woof check',
    back: 'If you sell, you lose your BONK treat!'
  },
  {
    img: '/pose3.png',
    title: 'Get 1000 BONK for free! 🐕',
    back: 'Rewards are distributed to the loyal pack.'
  }
];

export default function ComicStrip() {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = idx => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30, margin: '60px 0' }}>
      {panels.map((panel, idx) => (
        <motion.div
          key={panel.title}
          style={{
            border: '3px solid var(--bonk-orange)',
            padding: 30,
            textAlign: 'center',
            background: '#fff',
            position: 'relative',
            transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)`,
            boxShadow: `3px 3px 0px var(--bonk-orange)`,
            cursor: 'pointer',
            minHeight: 350,
            fontFamily: 'Patrick Hand, cursive',
            perspective: 1000,
          }}
          onClick={() => handleFlip(idx)}
          whileHover={{ scale: 1.04 }}
        >
          <motion.div
            style={{ position: 'relative', width: '100%', height: '100%' }}
            animate={{ rotateY: flipped[idx] ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {!flipped[idx] ? (
              <>
                <img src={panel.img} alt={panel.title} style={{ width: 100, height: 140, margin: '0 auto 20px', objectFit: 'contain', filter: 'drop-shadow(2px 2px 0 #000)' }} />
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: 10, color: 'var(--bonk-orange)', textShadow: '1px 1px 0px #000' }}>{panel.title}</div>
              </>
            ) : (
              <div style={{ fontSize: '1.2rem', color: '#000', marginTop: 60, padding: 10 }}>{panel.back}</div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
} 