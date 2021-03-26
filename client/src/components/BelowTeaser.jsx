import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const BelowTeaser = ({ handleBelowTeaserClick }) => {
  const [bounceOrNotToBounce, setBounceOrNotToBounce] = useState("");
  const [teaserTextDisp, setTeaserTextDisp] = useState("hidden");
  const arrowBounce = () => {
    setBounceOrNotToBounce("animate-bounce");
    setTeaserTextDisp("block");
    return bounceOrNotToBounce;
  };
  const stopArrowBounce = () => {
    setBounceOrNotToBounce("");
    setTeaserTextDisp("hidden");
    return bounceOrNotToBounce;
  };

  return (
    <div
      className="w-2/3 mx-auto text-center bg-gradient-to-b from-cloud to-burlywood py-10 cursor-pointer rounded-2xl"
      onClick={(e) => handleBelowTeaserClick(e)}
      onMouseEnter={arrowBounce}
      onMouseLeave={stopArrowBounce}
    >
      <FontAwesomeIcon icon={faArrowDown} className={bounceOrNotToBounce} />
      <p className={teaserTextDisp + " animate-pulse text-sm md:text-lg"}>
        Check out some projects!?
      </p>
      <p className={teaserTextDisp + " animate-pulse text-sm md:text-lg"}>
        Contact Info below
      </p>
    </div>
  );
};

export default BelowTeaser;
