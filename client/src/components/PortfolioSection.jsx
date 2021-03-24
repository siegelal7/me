import React from "react";
import projs from "../projects/projects";
import Footer from "./Footer";

const PortfolioSection = () => {
  return (
    <div className="portfolio block relative pb-16 w-full min-h-screen h-auto">
      <div className="flex flex-row flex-wrap justify-around pb-10 transform translate-y-10 z-10 mb-2">
        {projs.map((i) => (
          <div
            key={i.name}
            className="bg-linen rounded text-center w-104 mt-3 mx-auto py-10 mb-1"
          >
            <img src={i.src} alt={i.name + " frontpage"} />
            <p>{i.name}</p>
            <a
              href={i.pageLink}
              target="_blank"
              rel="noreferrer"
              className="text-seashell"
            >
              Live Site
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioSection;
