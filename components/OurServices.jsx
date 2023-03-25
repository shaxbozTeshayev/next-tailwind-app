import React from "react";
import Image from "next/image";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title1: "наш сервис 1",
    title2: "Интернет",
    description: `Гостевая сеть с бесплатным доступом в интернет и различными
    ограничениями и без ограничений ...`,
    icon: "/icons/internet.svg",
  },
  {
    id: 2,
    title1: "наш сервис 2",
    title2: "Для бизнес",
    description: `Простой легальный способ аутентификации ваших посетителей для предоставления им доступа ...`,
    icon: "/icons/business.svg",
  },
  {
    id: 3,
    title1: "наш сервис 3",
    title2: "Интернет",
    description: `Сеть Wi-Fi можно использовать как 
    очень эффективный инструмент для 
    предоставления рекламы ...`,
    icon: "/icons/recommandation.svg",
  },
];

const OurServices = () => {
  return (
    <section className="md:px-[128px] lg:px-[316px]">
      <h2 className="text-center font-Montserrat uppercase italic text-darkColor md:text-[18px] md:font-normal md:leading-[22px] lg:text-[24px] lg:font-medium lg:leading-[29px]">
        Наши услуги
      </h2>
      <div className="mt-[40px] flex w-full justify-center md:gap-[20px] lg:gap-[85px]">
        <Card cardData={cardData} />
      </div>
    </section>
  );
};

export default OurServices;
