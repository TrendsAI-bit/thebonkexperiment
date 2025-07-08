import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockWallets = [
  { address: '0x1234...5678', percentage: 2.5, emoji: '🐕', status: 'holding' },
  { address: '0xabcd...efgh', percentage: 1.8, emoji: '🦴', status: 'holding' },
  { address: '0x9876...5432', percentage: 1.2, emoji: '🐾', status: 'holding' },
  { address: '0xfeed...beef', percentage: 3.1, emoji: '💎', status: 'holding' },
  { address: '0xdead...cafe', percentage: 1.6, emoji: '🚀', status: 'holding' }
];

const emojis = ['🐕', '🦴', '🐾', '💎', '🚀', '❤️', '🔥', '⚡', '🌟', '💫'];

export default function LiveTracker() {
  const [hoveredWallet, setHoveredWallet] = useState(null);
  const [walletData, setWalletData] = useState(mockWallets);
  const [showEmojis, setShowEmojis] = useState({});

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWalletData(prev => prev.map(wallet => ({
        ...wallet,
        percentage: Math.max(1.0, wallet.percentage + (Math.random() - 0.5) * 0.1)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleWalletHover = (index) => {
    setHoveredWallet(index);
    setShowEmojis(prev => ({ ...prev, [index]: true }));
    
    // Hide emojis after 2 seconds
    setTimeout(() => {
      setShowEmojis(prev => ({ ...prev, [index]: false }));
    }, 2000);
  };

  return (
    <section className="tracker-section">
      <motion.h2 
        className="tracker-title"
        animate={{
          scale: [1, 1.02, 1],
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        Live Pack Tracker 🐕‍🦺
      </motion.h2>
      
      <motion.ul className="wallet-list">
        {walletData.map((wallet, index) => (
          <motion.li
            key={wallet.address}
            className="wallet-item"
            onHoverStart={() => handleWalletHover(index)}
            onHoverEnd={() => setHoveredWallet(null)}
            whileHover={{
              scale: 1.02,
              x: 10,
              transition: { duration: 0.3 }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
            animate={hoveredWallet === index ? {
              backgroundColor: '#fffbf0',
              borderColor: 'var(--bonk-orange)',
              boxShadow: '3px 3px 0px var(--bonk-orange)',
              transition: { duration: 0.3 }
            } : {}}
            style={{
              position: 'relative',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <motion.span
                style={{ fontSize: '1.5rem' }}
                animate={hoveredWallet === index ? {
                  scale: [1, 1.3, 1],
                  rotate: [0, 360, 0],
                  transition: { duration: 0.6 }
                } : {}}
              >
                {wallet.emoji}
              </motion.span>
              
              <div style={{ flex: 1 }}>
                <motion.span
                  style={{ fontWeight: 'bold', fontFamily: 'monospace' }}
                  animate={hoveredWallet === index ? {
                    color: 'var(--bonk-orange)',
                    transition: { duration: 0.3 }
                  } : {}}
                >
                  {wallet.address}
                </motion.span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <motion.span
                style={{ 
                  fontWeight: 'bold', 
                  color: 'var(--bonk-orange)',
                  fontSize: '1.1rem'
                }}
                animate={hoveredWallet === index ? {
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.5 }
                } : {}}
              >
                {wallet.percentage.toFixed(1)}%
              </motion.span>
              
              <motion.div
                style={{
                  width: '60px',
                  height: '8px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--bonk-orange)',
                    borderRadius: '4px'
                  }}
                  animate={{
                    width: `${Math.min(100, (wallet.percentage / 5) * 100)}%`,
                    transition: { duration: 0.5 }
                  }}
                />
              </motion.div>
            </div>
            
            {/* Floating emojis on hover */}
            <AnimatePresence>
              {showEmojis[index] && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 50 - 25
                      }}
                      animate={{ 
                        opacity: [0, 1, 0], 
                        scale: [0, 1.2, 0],
                        y: [0, -30, -60],
                        transition: { 
                          duration: 1.5,
                          delay: i * 0.1
                        }
                      }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        fontSize: '1.2rem',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {emojis[Math.floor(Math.random() * emojis.length)]}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
            
            {/* Pulse effect for active wallets */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: '2px solid var(--bonk-orange)',
                borderRadius: 'var(--border-radius)',
                opacity: 0
              }}
              animate={hoveredWallet === index ? {
                scale: [1, 1.05, 1],
                opacity: [0, 0.5, 0],
                transition: { duration: 1, repeat: Infinity }
              } : {}}
            />
          </motion.li>
        ))}
      </motion.ul>
      
      {/* Live indicator */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px',
          fontSize: '1.1rem',
          color: '#666'
        }}
      >
        <motion.div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#00ff00',
            borderRadius: '50%'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: 1, repeat: Infinity }
          }}
        />
        <span>Live Updates</span>
      </motion.div>
    </section>
  );
} 