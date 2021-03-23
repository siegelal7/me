import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import {} from "react-scroll"

const BelowTeaser = ({ handleBelowTeaserClick }) => {
  const [bounceOrNotToBounce, setBounceOrNotToBounce] = useState("");
  const arrowBounce = () => {
    setBounceOrNotToBounce("animate-bounce");
    return bounceOrNotToBounce;
  };
  const stopArrowBounce = () => {
    setBounceOrNotToBounce("");
    return bounceOrNotToBounce;
  };

  return (
    <div
      className="w-2/3 mx-auto text-center bg-gray-300 py-10"
      onClick={(e) => handleBelowTeaserClick(e)}
      onMouseEnter={arrowBounce}
      onMouseLeave={stopArrowBounce}
    >
      <FontAwesomeIcon icon={faArrowDown} className={bounceOrNotToBounce} />
    </div>
  );
};

export default BelowTeaser;
