import React, { useState } from "react";

import { routes } from "../data/data";
import Accordion from "./accordion";

const Index = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClose = (child) => {
    if (!child) setOpenIndex(null);
  };

  return (
    <div
      className="bg-primary w-25 d-flex flex-column justify-content-start align-items-center"
      style={{ height: "100vh" }}
    >
      {console.log(routes)}
      {routes.map((r, index) => (
        <Accordion
          item={r}
          key={index}
          open={openIndex === index}
          setOpen={() => handleOpen(index)}
          handleClose={handleClose}
          child={false}
        />
      ))}
    </div>
  );
};

export default Index;
