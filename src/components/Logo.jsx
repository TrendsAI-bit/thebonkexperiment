import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

export default function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Bonk Dog Logo"
      style={{
        display: 'block',
        margin: '0 auto',
        maxWidth: 400,
        width: '100%',
        height: 'auto',
      }}
    />
  );
} 