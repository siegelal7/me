import "./App.css";
import BelowTeaser from "./components/BelowTeaser.jsx";
import Hero from "./components/Hero.jsx";
import PortfolioSection from "./components/PortfolioSection";
import * as Scroll from "react-scroll";
import { isDesktop, isMobile } from "react-device-detect";

// import Footer from "./components/Footer";

// let Link = Scroll.Link;
// let Element = Scroll.Element;
// let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;

function App() {
  // const handleImgClickHero = (e) => {
  //   // console.log("sane");
  // };

  const handleBelowTeaserClick = (e) => {
    // console.log("down");
    // window.scrollBy(0, window.innerHeight);
    // scroll.scrollToBottom();
    if (isDesktop) {
      // console.log("thiseee");
      scroll.scrollTo(1000);
      return;
    } else if (isMobile) {
      scroll.scrollTo(700);
      return;
      // console.log("this");
    }
  };

  return (
    <div className="App font-source">
      <div className="heroContainer min-h-screen">
        <Hero
        //  handleImgClickHero={handleImgClickHero}
        />

        <BelowTeaser handleBelowTeaserClick={handleBelowTeaserClick} />
      </div>
      <PortfolioSection />
    </div>
  );
}

export default App;
