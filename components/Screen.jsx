import React from "react";
import Container from "./Container";
import Image from "next/image";

const Screen = () => {
  const data = [
    {
      icon: "/icons/advertisesVideo.svg",
      title: "JPEG",
      description: "формат",
    },
    {
      icon: "/icons/advertisesVideo.svg",
      title: "JPEG",
      description: "формат",
    },
    {
      icon: "/icons/advertisesVideo.svg",
      title: "JPEG",
      description: "формат",
    },
    {
      icon: "/icons/advertisesVideo.svg",
      title: "JPEG",
      description: "формат",
    },
  ];

  return (
    <Container>
      <nav className="border-b-4 px-[3.75rem] py-[2rem]">
        <ul className=" flex items-center justify-between  text-lgSecondary tracking-wide text-textMain">
          <li className="screenActive">Брендирование страницы</li>
          <li>Баннер</li>
          <li>Видеоролик</li>
          <li>Опрос</li>
        </ul>
      </nav>
      <div className="flex gap-[7.5rem] py-[3.125rem]">
        <div className="w-2/5 pl-[6.25rem]">
          <img
            src="/images/iphone14.png"
            alt="iphone14"
            className="h-auto w-[294px]"
          />
        </div>
        <div className="w-3/5">
          <h1 className="font-bold tracking-wide text-mainColor text-[3.375rem] leading-[4.125rem]">
            Брендирование страницы
          </h1>
          <p className="mt-[10px] text-lgSecondary font-medium tracking-[0.02em] text-textMain">
            В данном виде брендинга главным становится логотип, оформление и
            дизайн упаковки, а также философия и ценность продукта — то есть
            брендбук. Основная задача товарного брендинга — выделиться на фоне
            конкурентов.
          </p>
          <div className="mt-[2rem] grid w-2/3 grid-cols-2 gap-[2rem]">
            {data.map((item) => (
              <div className="flex rounded-[12px] bg-white p-[1.6rem]">
                <span className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-mainColor">
                  <Image src={item.icon} width={32} height={32} />
                </span>
                <div className="ml-[12px] flex flex-col items-start">
                  <span className="text-center text-lgPrimary font-bold uppercase text-mainColor">
                    {item.title}
                  </span>
                  <span className="text-center text-lgSecondary tracking-wide text-textSecondary">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Screen;
