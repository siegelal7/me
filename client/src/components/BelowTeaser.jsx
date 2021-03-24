import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import {} from "react-scroll"

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
      className="w-2/3 mx-auto text-center bg-linen py-10 cursor-pointer rounded-2xl"
      onClick={(e) => handleBelowTeaserClick(e)}
      onMouseEnter={arrowBounce}
      onMouseLeave={stopArrowBounce}
    >
      <FontAwesomeIcon icon={faArrowDown} className={bounceOrNotToBounce} />
      <p className={teaserTextDisp + " animate-pulse text-lg"}>
        Check out some projects?!
      </p>
      <p className={teaserTextDisp + " animate-pulse text-lg"}>
        How about following me on GitHub??
      </p>
    </div>
  );
};

export default BelowTeaser;
