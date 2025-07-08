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
    <div className="app-container">
      <BackgroundDoodles />
      <header className="header">
        <div className="logo">
          <Logo />
        </div>
        <p className="subtitle">Hold 1% of supply for 24h. Get 1000 BONK. It's that simple!</p>
      </header>
      <CountdownTimer />
      <ComicStrip />
      <JoinNowButton />
      <LiveTracker />
      <Footer />
    </div>
  );
}

export default App;
