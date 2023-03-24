import React from "react";
import CardNews from "./CardNews";
import Image from "next/image";

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
    <section className="pt-[100px] pb-[120px]">
      <h2 className="text-center font-Montserrat font-medium uppercase italic leading-[29px] text-darkColor">
        Новости
      </h2>
      <div className="container mx-auto mt-[40px] max-w-[1288px] tracking-[.03em]">
        <CardNews newsCardData={newsCardData} />
      </div>
      <div className="mt-[24px] flex justify-center gap-[23px] align-middle">
        <button className="cursor-pointer rounded-full bg-white py-[27px] px-[23px]">
          <Image src="/icons/btnLeft.svg" width={24} height={16} />
        </button>
        <button className="cursor-pointer rounded-full bg-mainColor py-[27px] px-[23px]">
          <Image src="/icons/btnRight.svg" width={24} height={16} />
        </button>
      </div>
    </section>
  );
};

export default News;
