import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText('BoNk1ExP3r1m3nT...wQx2Y9z');
    alert('Contract address copied to clipboard!');
  };

  return (
    <footer className="footer">
      <div className="contract-address" onClick={handleCopyAddress}>
        Contract: BoNk1ExP3r1m3nT...wQx2Y9z
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