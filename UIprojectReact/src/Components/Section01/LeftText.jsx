import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftText = () => {
  return (
    <div className=" h-full  w-1/4 py-12 px-10 relative">
      <div className="mb-5  text-black font-bold leading-[1.2] text-4xl">
        Prospective <br /> Customer <br />
        segmentation
      </div>
      <div className="text-gray-500 text-sm leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non cum
        perspiciatis veritatis vero odio porro quae dolore, quas magni?
      </div>
      <div className="absolute bottom-10 left-10    ">
        <ArrowUpRight size={40} />
      </div>
    </div>
  );
};

export default LeftText;
