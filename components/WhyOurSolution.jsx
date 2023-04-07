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
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
        {data.map((item) => (
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mainColor md:h-12 md:w-12">
              <Image src={item.icon} width={24} height={24} />
            </span>
            <p className="mt-8 inline text-center text-sm tracking-wide text-textMain md:mt-5 xl:text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyOurSolution;
