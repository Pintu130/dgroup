import React from "react";

const Card = ({ title, imageUrl, description, icon }) => {
  console.log(title, "title");
  return (
    <div>
      <div className="flex justify-center">
      <div className="relative -bottom-6 flex justify-center items-center bg-white rounded-full w-20 h-20 ">
        <div className="text-yellow-600">
          {icon}
        </div>
      </div>
      </div>

      <div className="rounded-xl flex items-center justify-center h-full px-2 xl:px-5  py-10  shadow-2xl mx-5 bg-[#155e75]">
        <div className="overflow-hidden cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-[#0891b2] to-transparent bg-gradient-to-t inset-x-0 -bottom-3 pt-30 text-white flex items-end">
            <div>
              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold ">{title}</div>
                <div className="opacity-60 text-sm ">{description}</div>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="object-cover w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src={imageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
