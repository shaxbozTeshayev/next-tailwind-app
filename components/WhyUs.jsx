import Image from "next/image";
import React from "react";
import { whyUsData } from "../consts/data";
import Container from "./Container";

const WhyUs = () => {
  return (
    <Container className="md:mt-[60px] lg:mt-[150px]">
      <h2 className="text-center font-Montserrat font-medium uppercase text-darkColor md:text-[18px] md:leading-[22px] lg:text-[24px] lg:italic lg:leading-[29px]">
        Почему мы
      </h2>
      <div className="flex justify-between md:mt-[54px] lg:mt-[48px]">
        {whyUsData.map((data) => (
          <div className="flex flex-col items-center md:gap-[20px] lg:justify-center lg:gap-[54px]">
            <div className="rounded-full bg-mainColor text-center font-Montserrat italic text-white md:h-[46px] md:w-[46px] md:p-[11px] md:text-[18px] md:leading-[22px]  lg:h-[70px] lg:w-[70px] lg:p-[17px] lg:text-[30px] lg:leading-[37px]">
              {data.num}
            </div>
            <p className="text-center">
              <span className="text-center font-Montserrat font-medium italic tracking-[.03em] text-mainColor md:text-[18px] md:leading-[29px] lg:text-[20px] lg:leading-[32px]">
                {data.word1}
              </span>
              <br />
              <span className="text-center font-Montserrat font-medium italic tracking-[.03em] text-mainColor lg:text-[20px] lg:leading-[32px]">
                {data.word2}
              </span>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyUs;
