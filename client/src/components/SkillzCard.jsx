import React from "react";

const SkillzCard = ({ header, skillz }) => {
  return (
    <section className="mb-4 md:mb-10 w-1/4 bg-gradient-to-b from-burlywood to-cloud rounded-3xl 5xl:bg-transparent text-sm md:text-base -mt-4">
      <h3 className="text-center font-bold">{header}</h3>
      <p className="text-center text-md">{skillz}</p>
    </section>
  );
};

export default SkillzCard;
