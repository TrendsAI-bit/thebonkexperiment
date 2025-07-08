import './App.css';
import Logo from './components/Logo';
import CountdownTimer from './components/CountdownTimer';
import ComicStrip from './components/ComicStrip';
import JoinNowButton from './components/JoinNowButton';
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
          <p className="subtitle">Hold 1% of supply for 24h. Get 1000 BONK. It's that simple!</p>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '20px', 
            border: '2px dashed #FFA500', 
            padding: '10px', 
            display: 'inline-block', 
            transform: 'rotate(0.5deg)', 
            background: '#fff' 
          }}>
            Backed by <a href="https://x.com/MRzhangbolun" target="_blank" rel="noopener noreferrer" style={{ color: '#FFA500', textDecoration: 'underline' }}>
              https://x.com/MRzhangbolun
            </a>
          </p>
          <div>
            <a href="#" className="join-btn">Join the Pack!</a>
          </div>
        </header>

        <CountdownTimer />
        <ComicStrip />
        <JoinNowButton />
        <LiveTracker />
        <Footer />
      </div>
    </>
  );
}

export default App;
