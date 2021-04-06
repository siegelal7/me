import React, { useState } from "react";

const BelowTeaser = ({ handleBelowTeaserClick }) => {
  const [bounceOrNotToBounce, setBounceOrNotToBounce] = useState("");

  return (
    <div
      className="w-2/3 mx-auto text-center bg-gradient-to-b group from-cloud to-burlywood py-10 cursor-pointer rounded-2xl"
      onClick={(e) => handleBelowTeaserClick(e)}
    >
      <p className={"md:text-lg"}>Projects</p>
      <p className="hidden group-hover:block animate-bounce text-sm md:text-lg">
        Contact info at bottom
        {/* <FontAwesomeIcon icon={faArrowDown} className={bounceOrNotToBounce} /> */}
      </p>
    </div>
  );
};

export default BelowTeaser;
