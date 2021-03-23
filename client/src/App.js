import "./App.css";
import BelowTeaser from "./components/BelowTeaser.jsx";
import Hero from "./components/Hero.jsx";
import PortfolioSection from "./components/PortfolioSection";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

function App() {
  const handleImgClickHero = (e) => {
    // console.log("sane");
  };

  const handleBelowTeaserClick = (e) => {
    // console.log("down");
    // window.scrollBy(0, window.innerHeight);
    scroll.scrollToBottom();
  };

  return (
    <div className="App">
      <div className="heroContainer h-screen relative">
        <Hero handleImgClickHero={handleImgClickHero} />
        <BelowTeaser handleBelowTeaserClick={handleBelowTeaserClick} />
      </div>
      <PortfolioSection />
    </div>
  );
}

export default App;
