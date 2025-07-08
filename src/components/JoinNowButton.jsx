import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Howl } from 'howler';

const bonkSound = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae7e2.mp3'],
  volume: 0.5
});

export default function JoinNowButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsClicked(true);
    setClickCount(prev => prev + 1);
    
    // Multiple confetti bursts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFA500', '#fff', '#000', '#ff8c00']
    });
    
    // Secondary confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.8 },
        colors: ['#FFA500', '#fff', '#000']
      });
    }, 200);
    
    // Play sound
    bonkSound.play();
    
    // Reset animation state
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <div className="join-btn-section">
      <motion.button
        className="join-btn"
        onClick={handleClick}
        whileHover={{ 
          scale: 1.1,
          rotate: 2,
          boxShadow: "8px 8px 0px #000",
          transition: { duration: 0.3 }
        }}
        whileTap={{ 
          scale: 1.05,
          rotate: 0,
          boxShadow: "3px 3px 0px #000",
          transition: { duration: 0.1 }
        }}
        animate={isClicked ? {
          rotate: [0, -10, 10, -5, 5, 0],
          scale: [1, 1.2, 1],
          boxShadow: [
            "6px 6px 0px #000",
            "10px 10px 0px #000",
            "6px 6px 0px #000"
          ],
          transition: { duration: 0.8 }
        } : {
          rotate: [0, -2, 2, -2, 2, 0],
          transition: { 
            repeat: Infinity, 
            duration: 2, 
            ease: 'easeInOut' 
          }
        }}
        style={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            zIndex: 1
          }}
          animate={isClicked ? {
            left: ['100%', '100%'],
            transition: { duration: 0.6 }
          } : {}}
        />
        
        {/* Button text with dynamic content */}
        <motion.span
          style={{ position: 'relative', zIndex: 2 }}
          animate={isClicked ? {
            scale: [1, 1.1, 1],
            transition: { duration: 0.4 }
          } : {}}
        >
          {clickCount === 0 ? 'Join the Pack!' : 
           clickCount === 1 ? 'WOOF! 🐕' : 
           clickCount === 2 ? 'BONK! 💥' : 
           clickCount >= 3 ? 'GOOD BOY! 🦴' : 'Join the Pack!'}
        </motion.span>
        
        {/* Pulsing ring effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            border: '3px solid var(--bonk-orange)',
            borderRadius: 'var(--border-radius)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}
          animate={isClicked ? {
            scale: [1, 1.5, 2],
            opacity: [0.8, 0.4, 0],
            transition: { duration: 0.6 }
          } : {}}
        />
        
        {/* Particle effects */}
        {isClicked && (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '10px',
              height: '10px',
              background: '#fff',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              transition: { duration: 0.4 }
            }}
          />
        )}
      </motion.button>
      
      {/* Click counter */}
      {clickCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '15px',
            fontSize: '1.2rem',
            color: 'var(--bonk-orange)',
            fontWeight: 'bold',
            textShadow: '1px 1px 0px #000'
          }}
        >
          Pack Member #{clickCount}! 🐾
        </motion.div>
      )}
    </div>
  );
} 