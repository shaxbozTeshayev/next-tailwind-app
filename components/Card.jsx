import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <>
      {props.cardData.map((data) => (
        <div className="relative flex h-[290px] w-[372px] flex-col rounded-[10px] bg-white p-[20px]">
          <h5 className=" font-Montserrat  font-medium  italic leading-[22px] text-[#315796]/[0.6]">
            {data.title1}
          </h5>
          <h2 className="mt-[12px] font-Montserrat font-semibold italic leading-[29px] text-mainColor">
            {data.title2}
          </h2>
          <div className="absolute top-[20px] right-[20px] flex h-[70px] w-[70px] justify-center rounded-full bg-backgroundColor text-center">
            <Image src={data.icon} width={30} height={30} alt={data.title2} />
          </div>
          <p className="mt-[27px] font-Montserrat text-[16px] font-medium italic leading-[26px] text-coolGray">
            {data.description}
          </p>

          {/* button */}
          <div className="shadow-[0px 2px 8px rgba(49, 87, 150, 0.2)] mt-[46px] h-[36px] w-[120px] rounded-[4px] bg-illustrationColor px-[16px] py-[7px]  font-Montserrat  ">
            <span className="inline-block cursor-pointer text-center text-[14px] font-medium leading-[22px]  text-white">
              Подробнее
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
