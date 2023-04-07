import Image from "next/image";
import React from "react";
import Container from "./Container";

const WifiAuth = ({ title }) => {
  const data = [
    {
      icon: "/icons/done.svg",
      description: "защита от штрафа",
    },
    {
      icon: "/icons/done.svg",
      description: "Безлимитный авторизация ",
    },
    {
      icon: "/icons/done.svg",
      description: "Быстрая установка",
    },
  ];

  return (
    <Container>
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 ">
        {data.map((item) => (
          <div
            className="flex flex-col items-center justify-between gap-5
        p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mainColor md:h-14 md:w-14">
              <Image src={item.icon} width={24} height={24} />
            </div>
            <p className="inline text-center text-lg font-medium tracking-wide text-textMain  xl:text-xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WifiAuth;
