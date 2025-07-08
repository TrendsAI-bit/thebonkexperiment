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
  const wallets = [
    { address: '0xabc...123', percentage: 1.2, emoji: '🐾' },
    { address: '0xdef...456', percentage: 2.1, emoji: '🐾' },
    { address: '0xghi...789', percentage: 1.8, emoji: '🐾' },
    { address: '0xjkl...012', percentage: 3.4, emoji: '🐾' },
    { address: '0xmno...345', percentage: 0.9, emoji: '⏳' }
  ];

  return (
    <section className="tracker-section">
      <h2 className="tracker-title">🐕 SOL Qualified Pack Members: 247</h2>
      <ul className="wallet-list">
        {wallets.map((wallet, index) => (
          <li key={index} className="wallet-item">
            {wallet.address} {wallet.emoji} 
            <span style={{ float: 'right' }}>
              {wallet.percentage}% held
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
} 