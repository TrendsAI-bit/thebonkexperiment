import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Logo() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <motion.div
      className="logo"
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        rotate: 1,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        rotate: -1,
        transition: { duration: 0.1 }
      }}
      animate={isClicked ? {
        rotate: [0, -5, 5, -3, 3, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      } : {}}
    >
      <motion.img
        src="/logo.png"
        alt="Bonk Dog Logo"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
        animate={isClicked ? {
          y: [0, -10, 0],
          transition: { duration: 0.5 }
        } : {}}
      />
    </motion.div>
  );
} 