import React from "react";
import Container from "./Container";

import Image from "next/image";

const ComplexSolution = ({ title }) => {
  const cardData1 = [
    {
      time: "Базовый",
      price: "1 250 000 Uzs / мес",
    },
    {
      time: "Базовый",
      price: "1 250 000 Uzs / мес",
    },
    {
      time: "Базовый",
      price: "1 250 000 Uzs / мес",
    },
    {
      time: "Базовый",
      price: "1 250 000 Uzs / мес",
    },
  ];

  const cardData2 = [
    {
      icon: "/icons/OurServicesIconSpeed.svg",
      speed1: "До 4 точек",
      speed2: "количество точек",
    },
    {
      icon: "/icons/OurServicesIconClockBlue.svg",
      speed1: "2 Мбит/сек ",
      speed2: "скорость бесплатного",
    },
    {
      icon: "/icons/OurServicesIconUpBlue.svg",
      speed1: "10 Мбит/сек",
      speed2: "скорость платного",
    },
  ];

  return (
    <Container>
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[40px] flex md:gap-[18px] lg:gap-[30px]">
        {cardData1.map((item) => (
          <div className="w-1/4 rounded-[10px] bg-white md:p-[18px] lg:p-[1.4rem]">
            <h3 className="font-bold uppercase text-textSecondary md:text-mdTertiary lg:text-lgPrimary">
              {item.time}
            </h3>

            {cardData2.map((data) => (
              <div className="flex items-center md:mt-[18px] lg:mt-[30px]">
                <Image
                  width={32}
                  height={32}
                  src={data.icon}
                  alt="Key"
                  className=""
                />
                <div className="flex flex-col md:ml-[10px] lg:ml-[18px] ">
                  <span className="font-medium tracking-wide text-[#3C3C3C] md:text-mdTertiary lg:text-lgPrimary">
                    {data.speed1}
                  </span>
                  <span className="text-[rgba(29, 36, 43, 0.6)] font-medium tracking-wide md:text-[0.625rem] md:leading-[0.75rem] lg:text-[1rem] lg:leading-[1.625rem]">
                    {data.speed2}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-solid-[rgba(29, 36, 43, 0.3)] flex items-center border-t md:mt-[20px] md:pt-[12px] lg:mt-[25px] lg:pt-[20px] ">
              <span className="font-semibold uppercase text-textMain md:text-mdTertiary  lg:text-lgPrimary">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ComplexSolution;
