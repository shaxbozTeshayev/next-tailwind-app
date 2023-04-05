import React from "react";
import Image from "next/image";
import Card from "./ui/Card";
import Container from "./Container";

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

const OurServices = ({ title }) => {
  return (
    <Container>
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal xl:italic">
        {title}
      </h2>
      <div className="mt-5 flex flex-col items-center justify-between gap-5 md:flex-row xl:mt-8">
        <Card cardData={cardData} />
      </div>
    </Container>
  );
};

export default OurServices;
