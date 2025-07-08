export default function BackgroundDoodles() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: -1, opacity: 0.07 }}>
      {/* Paw doodle */}
      <svg style={{ position: 'absolute', top: '10%', left: '15%', width: 40, height: 40, animation: 'float 6s ease-in-out infinite' }} viewBox="0 0 40 40">
        <circle cx="20" cy="15" r="8" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="12" cy="25" r="4" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="28" cy="25" r="4" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="15" cy="30" r="3" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="25" cy="30" r="3" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
      {/* Bone doodle */}
      <svg style={{ position: 'absolute', top: '25%', right: '10%', width: 50, height: 20, animation: 'float 7s ease-in-out infinite', animationDelay: '-2s' }} viewBox="0 0 50 20">
        <circle cx="8" cy="10" r="6" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="42" cy="10" r="6" stroke="#000" strokeWidth="2" fill="none" />
        <rect x="14" y="8" width="22" height="4" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
      {/* Heart doodle */}
      <svg style={{ position: 'absolute', top: '15%', left: '70%', width: 25, height: 25, animation: 'float 5s ease-in-out infinite', animationDelay: '-1s' }} viewBox="0 0 25 25">
        <path d="M12,5 Q8,0 4,5 Q4,10 12,18 Q20,10 20,5 Q16,0 12,5" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
      {/* BONK! bubble */}
      <svg style={{ position: 'absolute', top: '75%', right: '35%', width: 60, height: 20, animation: 'float 8s ease-in-out infinite', animationDelay: '-3s' }} viewBox="0 0 60 20">
        <text x="5" y="15" fontFamily="Patrick Hand" fontSize="14" fill="none" stroke="#000" strokeWidth="1">BONK!</text>
      </svg>
      {/* Add more doodles as needed */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
} 