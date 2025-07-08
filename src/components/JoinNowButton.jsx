import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Howl } from 'howler';

const bonkSound = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae7e2.mp3'],
  volume: 0.5
});

export default function JoinNowButton() {
  return (
    <section className="join-btn-section">
      <a href="#" className="join-btn">
        Join the Pack!
      </a>
    </section>
  );
} 