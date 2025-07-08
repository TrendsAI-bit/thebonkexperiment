import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(ONE_DAY_MS);
  const [isHovered, setIsHovered] = useState(false);

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
      <motion.div 
        className="timer-drawing"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          rotate: 3,
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
        whileTap={{ 
          rotate: -3,
          scale: 1.05,
          transition: { duration: 0.1 }
        }}
      >
        <motion.svg 
          width="180" 
          height="200" 
          viewBox="0 0 180 200" 
          className="stopwatch-svg"
          animate={isHovered ? {
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5, repeat: Infinity }
          } : {}}
        >
          <motion.circle 
            cx="90" 
            cy="110" 
            r="65" 
            animate={isHovered ? { strokeWidth: [3, 5, 3] } : {}}
          />
          <rect x="85" y="35" width="10" height="15" strokeWidth="2.5" />
          <path d="M90,50 Q88,25 90,15 Q92,10 90,5" strokeWidth="2.5" />
          <circle cx="90" cy="8" r="6" strokeWidth="2.5" />
          <motion.circle 
            cx="90" 
            cy="110" 
            r="50" 
            strokeWidth="2" 
            animate={isHovered ? { r: [50, 52, 50] } : {}}
          />
          <line x1="90" y1="65" x2="90" y2="72" strokeWidth="2" />
          <line x1="135" y1="110" x2="128" y2="110" strokeWidth="2" />
          <line x1="90" y1="155" x2="90" y2="148" strokeWidth="2" />
          <line x1="45" y1="110" x2="52" y2="110" strokeWidth="2" />
          <motion.line 
            x1="90" 
            y1="110" 
            x2="90" 
            y2="80" 
            strokeWidth="3" 
            animate={isHovered ? { 
              rotate: [0, 360],
              transition: { duration: 2, repeat: Infinity, ease: "linear" }
            } : {}}
            style={{ transformOrigin: "90px 110px" }}
          />
          <motion.line 
            x1="90" 
            y1="110" 
            x2="115" 
            y2="110" 
            strokeWidth="2.5" 
            animate={isHovered ? { 
              rotate: [0, 360],
              transition: { duration: 10, repeat: Infinity, ease: "linear" }
            } : {}}
            style={{ transformOrigin: "90px 110px" }}
          />
          <motion.circle 
            cx="90" 
            cy="110" 
            r="3" 
            fill="#000" 
            animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
          />
          <rect x="40" y="95" width="8" height="12" strokeWidth="2" />
          <rect x="132" y="95" width="8" height="12" strokeWidth="2" />
        </motion.svg>
      </motion.div>
      
      <motion.div 
        className="countdown-text"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        animate={{
          boxShadow: timeLeft <= 60000 ? [
            "4px 4px 0px var(--bonk-orange)",
            "6px 6px 0px #ff0000",
            "4px 4px 0px var(--bonk-orange)"
          ] : []
        }}
      >
        Next Woof Check In: {timeLeft > 0 ? `${hours}:${minutes}:${seconds}` : 'WOOF TIME!'}
      </motion.div>
    </section>
  );
} 