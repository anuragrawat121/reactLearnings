import React from "react";
import { ArrowRight } from "lucide-react";
const RightCardContent = (data) => {
  return (
    <div className="h-full w-72 rounded-[22px] overflow-hidden  relative">
      <img className="h-full w-full object-cover " src={data.data.img} alt="" />
      <div className="w-[80%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white mt-12 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur
        aliquid assumenda perspiciatis doloribus expedita porro maiores,
        possimus repudiandae dignissimos?
        <div className="w-full flex items-center gap-12 h-[40px] mt-12 ">
          <div
            className="h-[40px] w-1/2 rounded-full  flex items-center justify-center"
            style={{ backgroundColor: data.data.color }}
          >
            {data.data.tag}
          </div>
          <div
            className="h-[40px] rounded-full w-[40px] flex items-center justify-center text-white"
            style={{ backgroundColor: data.data.color }}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 h-[40px] w-[40px] rounded-full  absolute top-2 left-2 flex items-center justify-center z-10">
        {data.data.id}
      </div>
    </div>
  );
};

export default RightCardContent;
