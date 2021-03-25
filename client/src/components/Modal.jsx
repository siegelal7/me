import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ info, handleCloseClick }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation();
    // console.log(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case "Live Site":
        window.open(info.pageLink, "_blank");
        break;

      default:
        window.open(info.ghLink, "_blank");
        break;
    }
  };

  return (
    <div
      className={
        info.name !== ""
          ? "bg-introstart h-auto w-5/6 md:w-5/12 relative mx-auto pt-10 top-20 pb-16 rounded mb-6"
          : "hidden"
      }
    >
      <button
        onClick={(e) => handleCloseClick(e)}
        className="absolute top left px-4 py-1 ml-1 rounded bg-black text-white hover:bg-sky hover:text-black mr-1"
      >
        X
      </button>
      <p className="text-center font-bold text-lg">{info.name}</p>
      <div className="flex flex-col text-center">
        <p className="mt-2">{info.description}</p>
        {/* <a
          href={info.pageLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 mt-2"
        >
          Live Site
        </a> */}
        <p
          className="text-blue-500 mt-2 cursor-pointer w-max mx-auto"
          onClick={(e) => handleLinkClick(e)}
          //   href={info.pageLink}
          //   target="_blank"
          //   rel="noopener noreferrer"
        >
          Live Site
        </p>

        {/* <a
          href={info.ghLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 mt-2"
        >
          Github Repo
        </a> */}
        <p
          className="text-blue-500 mt-2 cursor-pointer w-max mx-auto"
          onClick={(e) => handleLinkClick(e)}
        >
          Github Repo
        </p>
      </div>
    </div>
  );
};

export default Modal;
