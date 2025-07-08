import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const panels = [
  {
    img: '/pose1.png',
    title: 'Hold at least 1% for 24 hours',
    back: 'Stay strong! No selling until the next Woof Check. Diamond paws only! 💎🐾'
  },
  {
    img: '/pose2.png',
    title: 'No Sells till woof check',
    back: 'If you sell, you lose your BONK treat! Stay loyal to the pack! 🐕‍🦺'
  },
  {
    img: '/pose3.png',
    title: 'Get 1000 BONK for free! 🐕',
    back: 'Rewards are distributed to the loyal pack. Good dogs get treats! 🦴'
  }
];

export default function ComicStrip() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const [hoveredPanel, setHoveredPanel] = useState(null);

  const handleFlip = idx => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="comic-strip">
      {panels.map((panel, idx) => (
        <motion.div
          key={panel.title}
          className="comic-panel"
          onClick={() => handleFlip(idx)}
          onHoverStart={() => setHoveredPanel(idx)}
          onHoverEnd={() => setHoveredPanel(null)}
          whileHover={{ 
            scale: 1.02,
            rotate: 0,
            zIndex: 10,
            transition: { duration: 0.3 }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          animate={{
            rotate: flipped[idx] ? 0 : [
              idx === 0 ? -1 : idx === 1 ? 1 : -0.5
            ]
          }}
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.div
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '100%',
              transformStyle: 'preserve-3d'
            }}
            animate={{ rotateY: flipped[idx] ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              {!flipped[idx] ? (
                <motion.div
                  key="front"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <motion.img 
                    src={panel.img} 
                    alt={panel.title}
                    style={{ 
                      width: 120, 
                      height: 160, 
                      margin: '0 auto 20px', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(2px 2px 0 #000)'
                    }}
                    animate={hoveredPanel === idx ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    } : {}}
                  />
                  <motion.div 
                    className="panel-text"
                    animate={hoveredPanel === idx ? {
                      scale: [1, 1.05, 1],
                      color: ["var(--bonk-orange)", "var(--bonk-dark-orange)", "var(--bonk-orange)"],
                      transition: { duration: 0.5 }
                    } : {}}
                  >
                    {panel.title}
                  </motion.div>
                  
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      fontSize: '0.8rem',
                      color: '#666',
                      fontStyle: 'italic'
                    }}
                    animate={hoveredPanel === idx ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                      transition: { duration: 0.5 }
                    } : {}}
                  >
                    Click to flip! 🔄
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    textAlign: 'center'
                  }}
                >
                  <motion.div 
                    style={{ 
                      fontSize: '1.3rem', 
                      color: '#000', 
                      lineHeight: 1.6,
                      fontWeight: 'bold'
                    }}
                    animate={hoveredPanel === idx ? {
                      scale: [1, 1.02, 1],
                      transition: { duration: 0.5 }
                    } : {}}
                  >
                    {panel.back}
                  </motion.div>
                  
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      fontSize: '0.8rem',
                      color: '#666',
                      fontStyle: 'italic'
                    }}
                    animate={hoveredPanel === idx ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                      transition: { duration: 0.5 }
                    } : {}}
                  >
                    Click to flip back! 🔄
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Interactive border glow effect */}
          <motion.div
            style={{
              position: 'absolute',
              top: -3,
              left: -3,
              right: -3,
              bottom: -3,
              borderRadius: 'var(--border-radius)',
              background: 'linear-gradient(45deg, var(--bonk-orange), var(--bonk-dark-orange), var(--bonk-orange))',
              zIndex: -1,
              opacity: 0
            }}
            animate={hoveredPanel === idx ? {
              opacity: [0, 0.3, 0],
              transition: { duration: 1, repeat: Infinity }
            } : { opacity: 0 }}
          />
        </motion.div>
      ))}
    </section>
  );
} 