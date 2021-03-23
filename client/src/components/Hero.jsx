import React from "react";
import picOfMe from "../assets/me2_smaller.png";

const Hero = ({ handleImgClickHero }) => {
  return (
    <div className="w-2/3 mx-auto h-2/3 mb-24 h-min">
      <div className="bg-blue-400 py-20 rounded-md transform translate-y-10">
        <img
          src={picOfMe}
          alt="placeholder replace me!"
          className="mx-auto transform mb-3 cursor-pointer"
          onClick={(e) => handleImgClickHero(e)}
        />
        <div className="w-1/2 text-center mx-auto">test</div>
      </div>
    </div>
  );
};

export default Hero;
