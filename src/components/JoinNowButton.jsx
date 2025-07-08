import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Howl } from 'howler';

const bonkSound = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae7e2.mp3'],
  volume: 0.5
});

export default function JoinNowButton() {
  const handleClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FFA500', '#fff', '#000']
    });
    bonkSound.play();
  };

  return (
    <motion.button
      className="join-btn"
      style={{
        fontFamily: 'Patrick Hand, cursive',
        fontSize: '1.5rem',
        padding: '15px 30px',
        border: '3px solid var(--bonk-orange)',
        background: 'var(--bonk-orange)',
        color: '#fff',
        cursor: 'pointer',
        transform: 'rotate(-2deg)',
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
        textShadow: '1px 1px 0px #000',
        margin: '40px auto',
        boxShadow: '2px 2px 0px #000',
      }}
      whileHover={{ scale: 1.1, rotate: -2 }}
      whileTap={{ scale: 1.08, rotate: 2 }}
      animate={{
        rotate: [0, -2, 2, -2, 2, 0],
        transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
      }}
      onClick={handleClick}
    >
      Join the Pack!
    </motion.button>
  );
} 