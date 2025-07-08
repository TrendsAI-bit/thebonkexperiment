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
        <svg className="social-icon" viewBox="0 0 40 40">
          <path d="M5,8 L20,20 L35,8 M5,8 L5,32 L35,32 L35,8" />
        </svg>
        <svg className="social-icon" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" />
          <path d="M8,20 Q20,8 32,20 Q20,32 8,20" />
        </svg>
      </div>
      
      <p className="disclaimer">
        This is an experiment. Not financial advice. But maybe genius. Good boy! 🐕
      </p>
    </footer>
  );
} 