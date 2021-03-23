import React from "react";
import github from "../assets/Github.png";
import cv from "../assets/cv-icon.png";
import linkedin from "../assets/Linkedin.png";
import resume from "../assets/Andrew_Siegel_resume.pdf";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-white flex flex-row justify-around content-center">
      <p className="py-3">&#169; Andrew Siegel</p>
      <div className="contact place-content-center">
        <a
          href={resume}
          rel="noreferrer"
          aria-label="My Resume"
          target="_blank"
        >
          <img
            src={cv}
            alt="resume"
            className="text-white inline-block w-6 h-6 bg-white mt-2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-siegel-atl/"
          aria-label="My LinkedIn Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="text-white inline-block w-6 h-6 bg-white ml-2 mt-2"
          />
        </a>
        <a
          href="https://github.com/siegelal7"
          aria-label="My Github Link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github}
            alt="github"
            className="text-white inline-block w-6 h-6 bg-white ml-2 mt-2"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
