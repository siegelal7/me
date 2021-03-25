import "./App.css";
import BelowTeaser from "./components/BelowTeaser.jsx";
import Hero from "./components/Hero.jsx";
import PortfolioSection from "./components/PortfolioSection";
import * as Scroll from "react-scroll";
import { isDesktop, isMobile } from "react-device-detect";

let scroll = Scroll.animateScroll;

function App() {
  const handleBelowTeaserClick = (e) => {
    if (isDesktop) {
      scroll.scrollTo(900);
      return;
    } else if (isMobile) {
      scroll.scrollTo(700);
      return;
    }
  };

  return (
    <div className="App font-source">
      <div className="heroContainer min-h-screen">
        <Hero />

        <BelowTeaser handleBelowTeaserClick={handleBelowTeaserClick} />
      </div>
      <PortfolioSection />
    </div>
  );
}

export default App;
