import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <>
      {props.cardData.map((data) => (
        <div className="relative flex flex-col rounded-[10px] bg-white md:h-auto md:w-[243px] md:p-[15px] lg:h-auto lg:w-[372px] lg:p-[20px]">
          <h5 className=" font-Montserrat font-medium italic  text-[#315796]/[0.6] md:text-[12px] md:leading-[19px] lg:text-[14px] lg:leading-[22px]">
            {data.title1}
          </h5>
          <h2 className="font-Montserrat font-semibold italic text-mainColor md:mt-[4px] md:text-[16px] md:leading-[20px] lg:mt-[12px] lg:text-[24px] lg:leading-[29px]">
            {data.title2}
          </h2>
          <div className="absolute flex justify-center rounded-full bg-backgroundColor text-center md:top-[15px] md:right-[15px] md:h-[46px] md:w-[46px] lg:top-[20px] lg:right-[20px] lg:h-[70px] lg:w-[70px]">
            <Image src={data.icon} width={30} height={30} alt={data.title2} />
          </div>
          <p className="font-Montserrat font-medium italic text-coolGray md:mt-[15px] md:text-[14px] md:leading-[22px] lg:mt-[27px] lg:text-[16px] lg:leading-[26px]">
            {data.description}
          </p>

          {/* button */}
          <div className="shadow-[0px 2px 8px rgba(49, 87, 150, 0.2)] mt-[45px] flex justify-center rounded-[4px] bg-illustrationColor px-[16px] py-[7px] font-Montserrat md:h-[32px] md:w-[110px] md:py-[6px] md:px-[18px] lg:h-[36px] lg:w-[120px] lg:px-[16px]  lg:py-[7px]  ">
            <span className="inline-block cursor-pointer font-medium text-white md:text-[12px] md:leading-[19px] lg:text-[14px]  lg:leading-[22px]">
              Подробнее
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
