import github from "../assets/Github.png";
import cv from "../assets/cv-icon.png";
import linkedin from "../assets/Linkedin.png";
import resume from "../resume/Andrew_Siegel_resume(5).pdf";

const contactIcons = [
  {
    name: "resume",
    href: resume,
    src: cv,
  },
  {
    name: "linkedIn",
    href: "https://www.linkedin.com/in/andrew-siegel-atl/",
    src: linkedin,
    marginLeft: true,
  },
  {
    name: "github",
    href: "https://github.com/siegelal7",
    src: github,
    marginLeft: true,
  },
];

export default contactIcons;
