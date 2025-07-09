import './App.css';
import Logo from './components/Logo';
import CountdownTimer from './components/CountdownTimer';
import ComicStrip from './components/ComicStrip';
import LiveTracker from './components/LiveTracker';
import Footer from './components/Footer';
import BackgroundDoodles from './components/BackgroundDoodles';

function App() {
  return (
    <>
      <BackgroundDoodles />
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <Logo />
          </div>
          <div className="experiment-title">
            <h1 className="experiment-text">The Bonk</h1>
            <h1 className="experiment-text">Experiment</h1>
            <div className="title-underline"></div>
          </div>
          <p className="subtitle">Hold 1% of supply for 24h. Get 1 SOL. It's that simple!</p>
          
          <div className="hero-contract-address" onClick={() => {
            navigator.clipboard.writeText('5wVS7VWNuNG65pua1CcCHhjsWNJQDhWT3GDTcEfxbonk');
            alert('Contract address copied to clipboard!');
          }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#FFA500', marginBottom: '8px' }}>
              🚀 CONTRACT ADDRESS 🚀
            </div>
            <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', wordBreak: 'break-all', lineHeight: '1.3' }}>
              5wVS7VWNuNG65pua1CcCHhjsWNJQDhWT3GDTcEfxbonk
            </div>
            <div style={{ fontSize: '0.8rem', marginTop: '5px', fontStyle: 'italic', opacity: '0.8' }}>
              Click to copy
            </div>
          </div>
          
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '20px', 
            border: '2px dashed #FFA500', 
            padding: '10px', 
            display: 'inline-block', 
            transform: 'rotate(0.5deg)', 
            background: '#fff' 
          }}>
                        Backed by 100 SOLs from <a href="https://x.com/MRzhangbolun" target="_blank" rel="noopener noreferrer" style={{ color: '#FFA500', textDecoration: 'underline' }}>
              https://x.com/MRzhangbolun
            </a>
          </p>
          <div>
            <a href="https://x.com/ExperimentBonk" target="_blank" rel="noopener noreferrer" className="join-btn">Join the Pack!</a>
          </div>
        </header>

        <CountdownTimer />
        <ComicStrip />
        
        <div className="social-engagement">
          <div className="social-content">
            <div className="social-icon">💎</div>
            <h3>Join us on X and tag the project</h3>
            <p className="bonus-text">→ Get +0.1 SOL Bonus!</p>
            <div className="sample-tweet">
              <p><strong>@hodler123:</strong> Just joined #TheBonkExperiment 🚀 Diamond hands only! 💎🙌</p>
              <small>2 hours ago • 47 likes</small>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://x.com/ExperimentBonk" target="_blank" rel="noopener noreferrer" className="join-btn">Tag the project @ExperimentBonk</a>
            </div>
          </div>
        </div>
        
        <LiveTracker />
        <Footer />
      </div>
    </>
  );
}

export default App;
