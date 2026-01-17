import React from "react";
import LeftText from "./LeftText";
import RightCard from "./RightCard";

const Page1Content = (props) => {
  return (
    <div className="flex justify-between gap-12 items-center py-8 px-12 w-full h-[80vh]">
      <LeftText />
      <RightCard data={props.data} />
    </div>
  );
};

export default Page1Content;
