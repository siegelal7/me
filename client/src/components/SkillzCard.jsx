import React from "react";

const SkillzCard = ({ header, skillz }) => {
  return (
    <section className="mb-10 w-1/4 bg-gradient-to-b from-burlywood to-cloud rounded-3xl 5xl:bg-transparent">
      <h3 className="text-center font-bold">{header}</h3>
      <p className="text-center text-md">{skillz}</p>
    </section>
  );
};

export default SkillzCard;
