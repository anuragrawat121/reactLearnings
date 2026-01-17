import React from "react";
import Header from "./Header";
import Page1Content from "./Page1Content";

const Section1 = (props) => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <Page1Content data={props.data} />
      </div>
    </>
  );
};

export default Section1;
