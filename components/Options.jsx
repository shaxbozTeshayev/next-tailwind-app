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
    <Container className="lg:py-[100px]">
      <h1 className="text-center font-medium uppercase text-textMain lg:text-2xl">
        {title}
      </h1>
      <div className="mt-[40px] flex gap-[30px]">
        {cardData1.map((item) => (
          <div className="w-1/4 rounded-[10px] bg-white p-[30px]">
            <h3 className="text-[24px] font-bold uppercase leading-[29px] text-textSecondary">
              {item.time}
            </h3>

            {cardData2.map((data) => (
              <div className="mt-[30px] flex items-center">
                <Image width={29} height={23} src={data.icon} alt="Key" />
                <div className="ml-[18px] flex flex-col ">
                  <span className="text-[24px] font-medium leading-[29px] tracking-[0.02em] text-[#3C3C3C]">
                    {data.speed1}
                  </span>
                  <span className="text-[rgba(29, 36, 43, 0.6)] text-[16px] font-medium leading-[26px] tracking-[0.02em]">
                    {data.speed2}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-solid-[rgba(29, 36, 43, 0.3)] mt-[25px] flex items-center justify-around border-t pt-[20px] ">
              <span className="text-[24px] font-bold uppercase leading-[29px] text-[#3C3C3C]">
                {item.price}
              </span>
              <span className=" text-[16px] font-medium leading-[26px] text-[#FF894C] line-through">
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
