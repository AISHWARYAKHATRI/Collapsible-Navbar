import React from "react";

const Accordion = ({ item, open, setOpen, handleClose, child }) => {
  const handleClick = () => {
    console.log(open);
    setOpen((prevOpen) => !prevOpen);
  };

  if (item.childrens) {
    return (
      <>
        <div className="cursor-pointer p-2 text-white" onClick={handleClick}>
          {item.name}
        </div>
        <div className={`${open ? "d-block" : "d-none"}`}>
          {item.childrens.map((child, index) => (
            <Accordion
              item={child}
              key={index}
              setOpen={setOpen}
              handleClose={() => handleClose(true)}
              child={true}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={`${
            child ? "text-danger text-right" : "text-white"
          } cursor-pointer p-2`}
          onClick={() => handleClose()}
        >
          {item.name}{" "}
        </div>
      </>
    );
  }
};

export default Accordion;
