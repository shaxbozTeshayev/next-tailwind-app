import React from "react";
import Container from "./Container";
import Image from "next/image";

const Options = ({ title }) => {
  const cardData1 = [
    {
      time: "1 час",
      price: "1000 Uzs",
    },
    {
      time: "1 час",
      price: "1000 Uzs",
    },
    {
      time: "1 час",
      price: "1000 Uzs",
    },
    {
      time: "1 час",
      price: "1000 Uzs",
    },
  ];

  const cardData2 = [
    {
      icon: "/icons/OurServicesIconSpeed.svg",
      speed1: "10 Мбит/сек",
      speed2: "скорость",
    },
    {
      icon: "/icons/OurServicesIconClockBlue.svg",
      speed1: "1 час",
      speed2: "срок действия",
    },
    {
      icon: "/icons/OurServicesIconUpBlue.svg",
      speed1: "Не ограничен",
      speed2: "интернет трафик ",
    },
  ];
  return (
    <Container className="md:py-[100px]">
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[40px] flex md:gap-[18px] lg:gap-[30px]">
        {cardData1.map((item) => (
          <div className="w-1/4 rounded-[10px] bg-white md:p-[18px] lg:p-[30px]">
            <h3 className="font-bold uppercase text-textSecondary md:text-mdTertiary lg:text-lgPrimary">
              {item.time}
            </h3>

            {cardData2.map((data) => (
              <div className="flex items-center md:mt-[18px] lg:mt-[30px]">
                <Image
                  width={29}
                  height={23}
                  src={data.icon}
                  alt="Key"
                  className="h-auto md:w-[17px]"
                />
                <div className="flex flex-col md:ml-[10px] lg:ml-[18px] ">
                  <span className="font-medium tracking-[0.02em] text-[#3C3C3C] md:text-mdTertiary lg:text-lgPrimary">
                    {data.speed1}
                  </span>
                  <span className="text-[rgba(29, 36, 43, 0.6)] font-medium tracking-[0.03em] md:text-[0.625rem] md:leading-[0.75rem] lg:text-[1rem] lg:leading-[1.625rem]">
                    {data.speed2}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-solid-[rgba(29, 36, 43, 0.3)] flex items-center border-t md:mt-[20px] md:pt-[12px] lg:mt-[25px] lg:pt-[20px] ">
              <span className=" font-bold uppercase text-[#3C3C3C] md:text-mdTertiary  lg:text-lgPrimary">
                {item.price}
              </span>
              <span className="font-medium text-[#FF894C] line-through md:ml-[11px] md:text-[0.625rem] md:leading-[0.75rem] lg:ml-[16px] lg:text-[1rem] lg:leading-[1.625rem]">
                3000 UZS
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Options;
