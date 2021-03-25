import React from "react";
import contactIcons from "../utils/contactIcons";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-linen flex flex-row justify-around items-center text-sm md:text-base mt-2">
      <p className="py-3">&#169; Andrew Siegel</p>

      <div className="contact">
        <p className="inline-flex mt-0.5">Let's Connect: </p>
        {contactIcons.map((i) => (
          <a
            key={i.name}
            href={i.href}
            rel="noreferrer"
            aria-label={"My " + i.name}
            target="_blank"
          >
            <img src={i.src} alt="resume" className="inline w-6 h-6 ml-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
