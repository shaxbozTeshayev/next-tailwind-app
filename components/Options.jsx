import React from "react";
import Container from "./Container";
import Image from "next/image";

const Options = ({ title }) => {
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
    // {
    //   time: "Базовый",
    //   price: "1 250 000 Uzs / мес",
    // },
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
    // {
    //   icon: "/icons/OurServicesIconUpBlue.svg",
    //   speed1: "10 Мбит/сек",
    //   speed2: "скорость платного",
    // },
  ];

  return (
    <Container className="pb-10">
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {cardData1.map((item, idx) => (
          <div
            key={idx}
            className="duration-3000 group rounded-lg bg-white p-7 transition ease-in hover:bg-mainColor md:p-6"
          >
            <h3 className="text-2xl font-bold uppercase text-textSecondary group-hover:text-white">
              {item.time}
            </h3>

            {cardData2.map((data, idx) => (
              <div
                key={idx}
                className="mt-7 flex items-center group-hover:stroke-white"
              >
                <Image
                  width={32}
                  height={32}
                  src={data.icon}
                  alt="Key"
                  className="rounded-full group-hover:bg-white"
                />
                <div className="ml-5 flex flex-col ">
                  <span className="text-2xl font-medium tracking-wide text-[#3C3C3C] group-hover:text-white">
                    {data.speed1}
                  </span>
                  <span className="text-[rgba(29, 36, 43, 0.6)] text-lg font-medium tracking-wide group-hover:text-white">
                    {data.speed2}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-solid-[rgba(29, 36, 43, 0.3)] mt-6 flex items-center border-t pt-5">
              <span className="text-center text-2xl font-semibold uppercase text-textMain  group-hover:text-white">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Options;
