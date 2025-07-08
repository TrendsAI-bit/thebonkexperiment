import { useEffect, useState } from 'react';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(ONE_DAY_MS);

  useEffect(() => {
    const target = Date.now() + ONE_DAY_MS;
    const interval = setInterval(() => {
      const diff = target - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  return (
    <section style={{ textAlign: 'center', margin: '60px 0', position: 'relative' }}>
      <div style={{ width: 180, height: 200, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', transform: 'rotate(-3deg)' }}>
        {/* Doodle stopwatch SVG */}
        <svg width="180" height="200" viewBox="0 0 180 200" style={{ stroke: '#000', strokeWidth: 3, fill: 'none' }}>
          <circle cx="90" cy="110" r="65" />
          <rect x="85" y="35" width="10" height="15" strokeWidth="2.5" />
          <path d="M90,50 Q88,25 90,15 Q92,10 90,5" strokeWidth="2.5" />
          <circle cx="90" cy="8" r="6" strokeWidth="2.5" />
          <circle cx="90" cy="110" r="50" strokeWidth="2" />
          <line x1="90" y1="65" x2="90" y2="72" strokeWidth="2" />
          <line x1="135" y1="110" x2="128" y2="110" strokeWidth="2" />
          <line x1="90" y1="155" x2="90" y2="148" strokeWidth="2" />
          <line x1="45" y1="110" x2="52" y2="110" strokeWidth="2" />
          <line x1="90" y1="110" x2="90" y2="80" strokeWidth="3" />
          <line x1="90" y1="110" x2="115" y2="110" strokeWidth="2.5" />
          <circle cx="90" cy="110" r="3" fill="#000" />
          <rect x="40" y="95" width="8" height="12" strokeWidth="2" />
          <rect x="132" y="95" width="8" height="12" strokeWidth="2" />
        </svg>
      </div>
      <div style={{ fontSize: '2rem', background: '#fff', border: '2px solid var(--bonk-orange)', padding: '10px 20px', display: 'inline-block', position: 'relative', boxShadow: '2px 2px 0px var(--bonk-orange)', fontFamily: 'Patrick Hand, cursive' }}>
        Next Woof Check In: {timeLeft > 0 ? `${hours}:${minutes}:${seconds}` : 'WOOF TIME!'}
      </div>
    </section>
  );
} 