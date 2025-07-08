import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Telegram', icon: '💬', url: '#' },
    { name: 'Discord', icon: '🎮', url: '#' },
    { name: 'Website', icon: '🌐', url: '#' }
  ];

  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          style={{
            fontSize: '1.8rem',
            marginBottom: '20px',
            color: 'var(--bonk-orange)',
            textShadow: '2px 2px 0px #000',
            fontWeight: 'bold'
          }}
          animate={{
            scale: [1, 1.02, 1],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          Join the BONK Pack! 🐕‍🦺
        </motion.h3>
        
        <motion.div
          className="contract-address"
          onClick={handleCopyAddress}
          whileHover={{
            scale: 1.02,
            borderColor: 'var(--bonk-orange)',
            backgroundColor: '#fffbf0',
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          animate={copiedAddress ? {
            backgroundColor: '#e8f5e8',
            borderColor: '#4CAF50',
            transition: { duration: 0.3 }
          } : {}}
          style={{
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.span
            style={{ position: 'relative', zIndex: 2 }}
          >
            {copiedAddress ? '✅ Copied!' : `Contract: ${contractAddress}`}
          </motion.span>
          
          {/* Copy animation effect */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.3), transparent)',
              zIndex: 1
            }}
            animate={copiedAddress ? {
              left: ['100%', '100%'],
              transition: { duration: 0.6 }
            } : {}}
          />
        </motion.div>
        
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              className="social-icon"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                backgroundColor: 'var(--bonk-orange)',
                color: '#fff',
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.1 }
              }}
              animate={{
                y: [0, -5, 0],
                transition: { 
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity 
                }
              }}
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.span
                style={{ fontSize: '1.2rem' }}
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: { 
                    duration: 1,
                    delay: index * 0.2,
                    repeat: Infinity 
                  }
                }}
              >
                {social.icon}
              </motion.span>
              
              {/* Hover ripple effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0%',
                  height: '0%',
                  backgroundColor: 'rgba(255, 165, 0, 0.3)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: -1
                }}
                whileHover={{
                  width: '100%',
                  height: '100%',
                  transition: { duration: 0.3 }
                }}
              />
            </motion.a>
          ))}
        </div>
        
        <motion.p
          className="disclaimer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            position: 'relative'
          }}
        >
          <motion.span
            animate={{
              opacity: [0.7, 1, 0.7],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            ⚠️ This is an experimental meme project. Only invest what you can afford to lose.
            <br />
            Always DYOR (Do Your Own Research) before participating! 🧠
          </motion.span>
        </motion.p>
        
        {/* Floating paw prints */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                fontSize: '1.5rem',
                color: 'var(--bonk-orange)',
                opacity: 0.3,
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360, 0],
                opacity: [0.3, 0.6, 0.3],
                transition: {
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity
                }
              }}
            >
              🐾
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
} 