import React, { useState } from "react";
import projs from "../projects/projects";
import useDidMountEffect from "../utils/useDidMountEffect";
import Footer from "./Footer";
import Modal from "./Modal";
import Project from "./Project";

const PortfolioSection = () => {
  // console.log(projs);
  const [modal, setModal] = useState({
    name: "",
    pageLink: "",
    ghLink: "",
    src: "",
    description: "",
  });
  const handleProjectClick = (e) => {
    e.stopPropagation();
    setModal({ ...modal, name: e.target.nextSibling.innerHTML });
  };

  useDidMountEffect(() => {
    if (modal.name) {
      projs.filter(
        (i) =>
          i.name === modal.name &&
          setModal({
            ...modal,
            pageLink: i.pageLink,
            ghLink: i.ghLink,
            src: i.src,
            description: i.description,
          })
      );
    }
  }, [modal.name]);

  const handleCloseClick = (e) => {
    setModal({
      name: "",
      pageLink: "",
      ghLink: "",
      src: "",
      description: "",
    });
  };
  return (
    <div
      onClick={handleCloseClick}
      className="portfolio block relative pb-16 w-full min-h-screen h-auto"
    >
      <div className="flex flex-row flex-wrap justify-around pb-10 transform translate-y-10 z-10 mb-2">
        {projs.map((i) => (
          <Project
            key={i.name}
            info={modal}
            handleProjectClick={handleProjectClick}
            src={i.src}
            name={i.name}
          />
        ))}
      </div>
      <Modal info={modal} handleCloseClick={handleCloseClick} />
      <Footer />
    </div>
  );
};

export default PortfolioSection;
