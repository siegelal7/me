import React, { useState } from "react";
import picOfMe from "../assets/me2_smaller.png";
import SkillzCard from "./SkillzCard";

const Hero = ({ handleImgClickHero }) => {
  const [introductionDisp, setIntroductionDisp] = useState("hidden");
  const handleScrollOver = (e) => {
    setIntroductionDisp("visible");
  };
  const handleScrollOff = (e) => {
    setIntroductionDisp("invisible");
  };
  return (
    <>
      <div className="w-2/3 mx-auto h-min">
        <div className="py-14 rounded-md transform translate-y-10">
          <p className={introductionDisp + " text-center"}>
            Hi. I'm Cali... and that guy is Andrew
          </p>
          <img
            src={picOfMe}
            alt="my dog Cali and I"
            className="mx-auto mb-3 rounded"
            onClick={(e) => handleImgClickHero(e)}
            onMouseEnter={(e) => handleScrollOver(e)}
            onMouseLeave={(e) => handleScrollOff(e)}
          />
          <div className="w-1/2 text-center text-lg mx-auto bg-peach rounded-3xl 2xl:bg-transparent">
            Welcome to my little corner of the internet
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <SkillzCard
          header="Front End: "
          skillz="HTML5, CSS, JQuery & JavaScript- React and React Native"
        />
        <SkillzCard
          header="Back End: "
          skillz="NodeJS, Express, MySQL, MongoDb, more"
        />
      </div>
    </>
  );
};

export default Hero;
