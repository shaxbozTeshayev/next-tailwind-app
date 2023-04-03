import React from "react";
import Container from "./Container";

import Image from "next/image";

const WhyOurSolution = ({ title }) => {
  const data = [
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Гостевой Wi-Fi по СМС",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Авторизация по закону",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Сбор базы ваших гостей",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Привлечение клиентов",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: `Сбор базы ваших гостей`,
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Статистика",
    },
  ];

  return (
    <Container>
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mx-[4rem] mt-[3.75rem] grid grid-cols-3 gap-[1.25rem]">
        {data.map((item) => (
          <div className="flex flex-col items-center justify-center rounded-[10px] bg-white p-[2.5rem]">
            <span className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-mainColor">
              <Image src={item.icon} width={32} height={32} />
            </span>
            <p className="mt-[2rem] inline text-center text-lgSecondary tracking-wide text-textMain">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyOurSolution;
