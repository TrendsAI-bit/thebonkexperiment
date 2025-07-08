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
    <section className="countdown-section">
      <div className="timer-drawing">
        <svg className="stopwatch-svg" viewBox="0 0 180 200">
          {/* Stopwatch body */}
          <circle cx="90" cy="110" r="65" transform="rotate(-2)" />
          {/* Stopwatch button/crown */}
          <rect x="85" y="35" width="10" height="15" transform="rotate(1)" />
          {/* Chain/string */}
          <path d="M90,50 Q88,25 90,15 Q92,10 90,5" />
          {/* Ring at top */}
          <circle cx="90" cy="8" r="6" />
          {/* Clock face */}
          <circle cx="90" cy="110" r="50" />
          {/* 12, 3, 6, 9 markers */}
          <line x1="90" y1="65" x2="90" y2="72" />
          <line x1="135" y1="110" x2="128" y2="110" />
          <line x1="90" y1="155" x2="90" y2="148" />
          <line x1="45" y1="110" x2="52" y2="110" />
          {/* Clock hands pointing to 24:00 */}
          <line x1="90" y1="110" x2="90" y2="80" strokeWidth="3" />
          <line x1="90" y1="110" x2="115" y2="110" strokeWidth="2.5" />
          {/* Center dot */}
          <circle cx="90" cy="110" r="3" fill="#000" />
          {/* Side buttons */}
          <rect x="40" y="95" width="8" height="12" transform="rotate(-5)" />
          <rect x="132" y="95" width="8" height="12" transform="rotate(5)" />
        </svg>
      </div>
      <div className="countdown-text">
        Next Woof Check In: {timeLeft > 0 ? `${hours}:${minutes}:${seconds}` : 'WOOF TIME!'}
      </div>
    </section>
  );
} 