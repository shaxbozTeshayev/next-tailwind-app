import React from "react";
import CardNews from "./ui/CardNews";
import Image from "next/image";
import Container from "./Container";

const newsCardData = [
  {
    newsImg: "/images/cardImg1.png",
    newsTime: "22 октября, 20:45 ",
    newsDescription: `Введение в Quasar Framework:
    Создание кроссплатформенных приложений`,
  },
  {
    newsImg: "/images/cardImg2.png",
    newsTime: "22 октября, 20:45 ",
    newsDescription: `Введение в Quasar Framework:
    Создание кроссплатформенных приложений`,
  },
  {
    newsImg: "/images/cardImg3.png",
    newsTime: "22 октября, 20:45 ",
    newsDescription: `Введение в Quasar Framework:
    Создание кроссплатформенных приложений`,
  },
];

const News = () => {
  return (
    <Container>
      <h2 className="text-center font-medium uppercase text-darkColor md:text-[18px] md:leading-[22px] text-[24px] italic leading-[29px]">
        Новости
      </h2>
      <div className="container mx-auto tracking-wide md:mt-[27px] mt-[40px]">
        <CardNews newsCardData={newsCardData} />
      </div>
      <div className="mt-[24px] justify-center gap-[23px] align-middle md:hidden flex">
        <button className="cursor-pointer rounded-full bg-white py-[27px] px-[23px]">
          <Image src="/icons/btnLeft.svg" width={24} height={16} />
        </button>
        <button className="cursor-pointer rounded-full bg-mainColor py-[27px] px-[23px]">
          <Image src="/icons/btnRight.svg" width={24} height={16} />
        </button>
      </div>
    </Container>
  );
};

export default News;
