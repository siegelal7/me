const Modal = ({ info, handleCloseClick }) => {
  //   console.log(modal);
  return (
    <div
      className={
        info.name !== ""
          ? "bg-sun h-1/3 w-1/3 relative mx-auto py-10"
          : "hidden"
      }
    >
      <button
        onClick={(e) => handleCloseClick(e)}
        className="absolute top left px-4 py-1 ml-1 rounded bg-black text-white"
      >
        X
      </button>
      <p className="text-center font-bold text-lg">{info.name}</p>
      <div className="flex flex-col text-center">
        <p className="mt-2">{info.description}</p>
        <a
          href={info.pageLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 mt-2"
        >
          Live Site
        </a>
        <a
          href={info.ghLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 mt-2"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Modal;
