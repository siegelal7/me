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
      <div className="w-2/3 mx-auto h-auto">
        <div className="py-14 rounded-md">
          <p
            className={
              introductionDisp +
              " text-center md:font-extrabold text-sm md:text-xl"
            }
          >
            Hi. I'm Cali... and that guy is Andrew
          </p>
          <img
            src={picOfMe}
            alt="my dog Cali and I"
            className="mx-auto mb-3 rounded h-28  w-28 md:h-auto md:w-auto"
            onClick={(e) => handleImgClickHero(e)}
            onMouseEnter={(e) => handleScrollOver(e)}
            onMouseLeave={(e) => handleScrollOff(e)}
          />
          <div className="w-1/2 text-center text-sm md:text-lg mx-auto bg-birdarea rounded-3xl 2xl:bg-transparent">
            Welcome to{" "}
            <span className="bg-birdarea rounded-3xl 6xl:bg-transparent">
              Andrew's
            </span>{" "}
            little corner of the internet
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around -mt-4 md:mt-0">
        <SkillzCard
          key="frontend"
          header="Front End: "
          skillz="HTML5, CSS, JQuery & JavaScript, React and React Native, a11y, and mobile responsive design"
        />
        <SkillzCard
          key="backend"
          header="Back End: "
          skillz="NodeJS, Express and server side programming, MySQL, MongoDb, REST API integration, more"
        />
      </div>
    </>
  );
};

export default Hero;
