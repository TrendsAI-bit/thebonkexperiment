import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Bonk Dog Logo"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }}
    />
  );
} 