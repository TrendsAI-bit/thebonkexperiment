import { useEffect, useState } from 'react';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(ONE_DAY_MS);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const target = Date.now() + ONE_DAY_MS;
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now.getTime();
      setTimeLeft(diff > 0 ? diff : 0);
      setCurrentTime(now);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  // Calculate clock hand angles based on current time
  const currentHour = currentTime.getHours() % 12;
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();
  
  // Calculate angles (0 degrees = 12 o'clock, clockwise)
  const hourAngle = (currentHour * 30) + (currentMinute * 0.5); // 30 degrees per hour + minute adjustment
  const minuteAngle = currentMinute * 6; // 6 degrees per minute
  const secondAngle = currentSecond * 6; // 6 degrees per second

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
          {/* Clock hands - animated based on current time */}
          {/* Hour hand */}
          <line 
            x1="90" 
            y1="110" 
            x2="90" 
            y2="85" 
            strokeWidth="3" 
            transform={`rotate(${hourAngle} 90 110)`}
            style={{ transition: 'transform 0.5s ease-in-out' }}
          />
          {/* Minute hand */}
          <line 
            x1="90" 
            y1="110" 
            x2="90" 
            y2="70" 
            strokeWidth="2.5" 
            transform={`rotate(${minuteAngle} 90 110)`}
            style={{ transition: 'transform 0.5s ease-in-out' }}
          />
          {/* Second hand */}
          <line 
            x1="90" 
            y1="110" 
            x2="90" 
            y2="65" 
            strokeWidth="1" 
            stroke="#FF0000" 
            transform={`rotate(${secondAngle} 90 110)`}
            style={{ transition: 'transform 0.1s ease-in-out' }}
          />
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