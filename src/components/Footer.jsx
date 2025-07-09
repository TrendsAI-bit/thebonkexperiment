import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText('5wVS7VWNuNG65pua1CcCHhjsWNJQDhWT3GDTcEfxbonk');
    alert('Contract address copied to clipboard!');
  };

  return (
    <footer className="footer">
      <div className="contract-address" onClick={handleCopyAddress}>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px', color: '#FFA500' }}>
          🚀 OFFICIAL CONTRACT ADDRESS 🚀
        </div>
        <div style={{ fontSize: '1.1rem', fontFamily: 'monospace', wordBreak: 'break-all', lineHeight: '1.4' }}>
          5wVS7VWNuNG65pua1CcCHhjsWNJQDhWT3GDTcEfxbonk
        </div>
        <div style={{ fontSize: '0.9rem', marginTop: '8px', fontStyle: 'italic' }}>
          Click to copy to clipboard
        </div>
      </div>
      
      <div className="social-icons">
        <a href="https://x.com/MRzhangbolun" target="_blank" rel="noopener noreferrer">
          <svg className="social-icon" viewBox="0 0 40 40">
            <path d="M35,15 Q30,10 20,15 Q15,5 5,10 Q10,20 20,25 Q30,30 35,20" />
            <circle cx="12" cy="15" r="1" fill="#000" />
          </svg>
        </a>
        <a href="https://x.com/ExperimentBonk" target="_blank" rel="noopener noreferrer">
          <svg className="social-icon" viewBox="0 0 40 40">
            <path d="M35,15 Q30,10 20,15 Q15,5 5,10 Q10,20 20,25 Q30,30 35,20" />
            <circle cx="12" cy="15" r="1" fill="#000" />
          </svg>
        </a>
      </div>
      
      <p className="disclaimer">
        This is a SOL rewards experiment. Not financial advice. Diamond hands only! 💎🐕
      </p>
    </footer>
  );
} 