import React from "react";
import { isDesktop, isMobile } from "react-device-detect";

const SkillzCard = ({ header, skillz }) => {
  const renderContent = () => {
    if (isMobile) {
      return (
        <section className="mb-4 md:mb-10 w-1/4 bg-gradient-to-b from-burlywood to-cloud rounded-3xl 5xl:bg-transparent text-sm md:text-base -mt-4">
          <h3 className="text-center font-bold">{header}</h3>
          {/* <p className="text-center text-md">{skillz}</p> */}
          {/* {skillz.map((skill) => (
            <li className="list-none text-center">{skill}</li>
          ))} */}
          {skillz.split(",").map((j) => (
            <li className="list-none text-center text-xs">{j}</li>
          ))}
        </section>
      );
    }
    return (
      <section className="mb-4 md:mb-10 w-1/4 bg-gradient-to-b from-burlywood to-cloud rounded-3xl 5xl:bg-transparent text-sm md:text-base -mt-4">
        <h3 className="text-center font-bold">{header}</h3>
        <p className="text-center text-md">{skillz}</p>
      </section>
    );
  };

  return renderContent();
};

export default SkillzCard;
