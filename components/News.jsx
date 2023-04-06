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

const News = ({ title }) => {
  return (
    <Container className="mb-24">
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal xl:italic">
        {title}
      </h2>

      <CardNews newsCardData={newsCardData} />

      <div className="mt-[24px] hidden justify-center gap-[23px]  md:flex">
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
