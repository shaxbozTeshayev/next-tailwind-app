import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <>
      {props.cardData.map((data) => (
        <div className="relative flex h-auto flex-col rounded-lg bg-white p-5 md:w-1/3">
          <h5 className="text-sm font-medium  text-mainColor xl:italic">
            {data.title1}
          </h5>
          <h2 className="mt-1 text-xl font-semibold text-mainColor lg:text-2xl xl:italic">
            {data.title2}
          </h2>
          <div className="absolute top-[15px] right-[15px] flex h-12 w-12 items-center justify-center rounded-full bg-backgroundColor text-center">
            <Image
              src={data.icon}
              width={24}
              className="h-6 w-6"
              height={24}
              alt={data.title2}
            />
          </div>
          <p className="mt-4 text-sm font-medium text-coolGray md:mt-6 xl:italic">
            {data.description}
          </p>

          {/* button */}
          <button className="mt-10 rounded-md bg-illustrationColor py-1.5 px-4 text-center text-xs text-white shadow outline-none md:mt-5 xl:text-sm xl:italic">
            Подробнее
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
