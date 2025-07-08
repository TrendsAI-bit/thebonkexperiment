import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

export default function Logo() {
  const controls = useAnimation();
  const tailRef = useRef();
  const wagSequence = [0, 18, -15, 12, -10, 0];
  const handleMouseEnter = () => {
    controls.start({
      rotate: wagSequence,
      transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut' }
    });
  };
  const handleMouseLeave = () => {
    controls.start({ rotate: 0 });
  };
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}>
      <img src="/logo.png" alt="Bonk Logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <motion.img
        src="/logo.png"
        alt="Bonk Logo Tail"
        style={{
          position: 'absolute',
          top: 0,
          left: '60%',
          width: '40%',
          height: '100%',
          pointerEvents: 'none',
          transformOrigin: '20% 80%',
          zIndex: 2,
        }}
        ref={tailRef}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Wagging tail"
      />
    </div>
  );
} 