export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: 60, borderTop: '3px solid var(--bonk-orange)', paddingTop: 30, fontFamily: 'Gloria Hallelujah, cursive' }}>
      <div style={{ fontSize: '1.2rem', marginBottom: 20, border: '2px solid var(--bonk-orange)', padding: 10, display: 'inline-block', background: '#fff', boxShadow: '2px 2px 0px var(--bonk-orange)' }}>
        Contract: BoNk1ExP3r1m3nT...wQx2Y9z
      </div>
      <div style={{ margin: '20px 0' }}>
        <span style={{ margin: '0 10px', fontSize: 32 }}>🐾</span>
        <span style={{ margin: '0 10px', fontSize: 32 }}>🐕</span>
        <span style={{ margin: '0 10px', fontSize: 32 }}>💬</span>
      </div>
      <p style={{ fontSize: '0.9rem', marginTop: 20, fontStyle: 'italic' }}>
        This is an experiment. Not financial advice. But maybe genius. Good boy! 🐕
      </p>
    </footer>
  );
} 