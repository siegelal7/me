import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from "./Modal";

const Project = ({
  name,
  pageLink,
  src,
  info,
  setModal,
  handleProjectClick,
  handleCloseClick,
}) => {
  //   const [modal, setModal] = useState("");

  //   const handleProjectClick = (e) => {
  //     // console.log(e.target.nextSibling.innerHTML);
  //     setModal(e.target.nextSibling.innerHTML);
  //   };
  //   const handleCloseClick = (e) => {
  //     setModal("");
  //   };

  return (
    <>
      <div
        key={name}
        className={
          info.name === ""
            ? "bg-linen rounded-lg text-center w-104 xl:w-2/5 mt-3 mx-auto py-10 mb-1"
            : "hidden"
        }
      >
        <img
          onClick={handleProjectClick}
          src={src}
          className="w-5/6 h-5/6 cursor-pointer mx-auto mb-2"
          alt={name + " frontpage"}
        />
        <p className="text-sm md:text-lg">{name}</p>
      </div>
      {/* <Modal
        name={name}
        pageLink={pageLink}
        modal={modal}
        handleCloseClick={handleCloseClick}
      /> */}
    </>
  );
};

export default Project;
