import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComicStrip() {
  const panels = [
    {
      image: "/pose1.png",
      text: "Hold at least 1% for 24 hours"
    },
    {
      image: "/pose2.png", 
      text: "No Sells till woof check and SOL treats completed"
    },
    {
      image: "/pose3.png",
      text: "Get 1 SOL for free! 🐕"
    },
    {
      image: "/pose4.png",
      text: "Hold <1%? Enter treat bowl! Qualify for 10 SOL pot! 🦴"
    },
    {
      image: "/pose1.png",
      text: "48h + $1M Cap = 10 SOLs to diamond hand holders! 💎"
    },
    {
      image: "/pose2.png",
      text: "$100M = Bonk Pack DAO! Vote on exchange treats! 🏛️"
    }
  ];

  return (
    <section className="comic-strip">
      {panels.map((panel, index) => (
        <div key={index} className="comic-panel">
          <img src={panel.image} alt={`Bonk Dog Pose ${index + 1}`} />
          <p className="panel-text">{panel.text}</p>
        </div>
      ))}
    </section>
  );
} 