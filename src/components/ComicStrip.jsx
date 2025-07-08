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
      text: "No Sells till woof check and treats completed"
    },
    {
      image: "/pose3.png",
      text: "Get 1000 BONK for free! 🐕"
    },
    {
      image: "/pose4.png",
      text: "Hold <1%? Enter treat bowl! Win 100-1000 BONK! 🦴"
    },
    {
      image: "/pose1.png",
      text: "48h + $1M Cap = 5000 BONK each to 1% pack! 💰"
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