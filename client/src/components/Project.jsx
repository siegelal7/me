import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from "./Modal";

const Project = ({ name, src, info, handleProjectClick }) => {
  return (
    <>
      <div
        key={name}
        className={
          info.name === ""
            ? "bg-introstart rounded-lg text-center w-104 xl:w-2/5 mt-3 mx-auto py-10 mb-1"
            : "hidden"
        }
      >
        <img
          onClick={handleProjectClick}
          src={src}
          className="w-5/6 h-5/6 cursor-pointer mx-auto mb-2 rounded"
          alt={name + " frontpage"}
        />
        <p className="text-sm md:text-lg">{name}</p>
      </div>
    </>
  );
};

export default Project;
