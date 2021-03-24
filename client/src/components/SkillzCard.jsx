import React from "react";

const SkillzCard = ({ header, skillz }) => {
  return (
    <section className="mb-10 font-bold w-1/4 bg-middle rounded-3xl 5xl:bg-transparent">
      <h3 className="text-center">{header}</h3>
      <p className="text-center">{skillz}</p>
    </section>
  );
};

export default SkillzCard;
