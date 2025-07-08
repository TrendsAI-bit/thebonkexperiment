export default function BackgroundDoodles() {
  return (
    <div className="bg-doodles">
      {/* Dog paw doodles */}
      <svg className="doodle" style={{ top: '10%', left: '15%', width: '40px', height: '40px' }} viewBox="0 0 40 40">
        <circle cx="20" cy="15" r="8" />
        <circle cx="12" cy="25" r="4" />
        <circle cx="28" cy="25" r="4" />
        <circle cx="15" cy="30" r="3" />
        <circle cx="25" cy="30" r="3" />
      </svg>
      
      <svg className="doodle" style={{ top: '60%', right: '20%', width: '35px', height: '35px' }} viewBox="0 0 35 35">
        <circle cx="17" cy="12" r="6" />
        <circle cx="10" cy="20" r="3" />
        <circle cx="24" cy="20" r="3" />
        <circle cx="12" cy="25" r="2.5" />
        <circle cx="22" cy="25" r="2.5" />
      </svg>
      
      {/* Bone doodles */}
      <svg className="doodle" style={{ top: '25%', right: '10%', width: '50px', height: '20px' }} viewBox="0 0 50 20">
        <circle cx="8" cy="10" r="6" />
        <circle cx="42" cy="10" r="6" />
        <rect x="14" y="8" width="22" height="4" />
      </svg>
      
      <svg className="doodle" style={{ top: '70%', left: '5%', width: '45px', height: '18px' }} viewBox="0 0 45 18">
        <circle cx="7" cy="9" r="5" />
        <circle cx="38" cy="9" r="5" />
        <rect x="12" y="7" width="21" height="4" />
      </svg>
      
      {/* Wagging tail doodles */}
      <svg className="doodle" style={{ top: '40%', left: '80%', width: '30px', height: '40px' }} viewBox="0 0 30 40">
        <path d="M15,35 Q10,25 15,15 Q20,5 15,0" />
        <circle cx="15" cy="2" r="2" />
      </svg>
      
      {/* Heart doodles */}
      <svg className="doodle" style={{ top: '15%', left: '70%', width: '25px', height: '25px' }} viewBox="0 0 25 25">
        <path d="M12,5 Q8,0 4,5 Q4,10 12,18 Q20,10 20,5 Q16,0 12,5" />
      </svg>
      
      {/* SOL text doodles */}
      <svg className="doodle" style={{ top: '75%', right: '35%', width: '60px', height: '20px' }} viewBox="0 0 60 20">
        <text x="5" y="15" fontFamily="Patrick Hand" fontSize="14" fill="none" strokeWidth="1">SOL!</text>
      </svg>
      
      {/* Happy dog face doodles */}
      <svg className="doodle" style={{ top: '50%', right: '5%', width: '35px', height: '35px' }} viewBox="0 0 35 35">
        <circle cx="17" cy="17" r="15" />
        <circle cx="12" cy="13" r="2" fill="#000" />
        <circle cx="22" cy="13" r="2" fill="#000" />
        <path d="M10,22 Q17,28 24,22" />
        <circle cx="17" cy="18" r="1" fill="#000" />
      </svg>
      
      {/* Dog ears doodles */}
      <svg className="doodle" style={{ top: '30%', left: '2%', width: '30px', height: '25px' }} viewBox="0 0 30 25">
        <path d="M5,5 Q8,15 15,20 Q20,15 25,5" />
        <path d="M8,8 Q12,12 16,8" />
      </svg>
      
      {/* Diamond hands doodle */}
      <svg className="doodle" style={{ top: '85%', left: '25%', width: '30px', height: '30px' }} viewBox="0 0 30 30">
        <path d="M15,5 L25,15 L15,25 L5,15 Z" />
        <text x="15" y="18" textAnchor="middle" fontFamily="Patrick Hand" fontSize="8" fill="none" strokeWidth="1">💎</text>
      </svg>
    </div>
  );
} 