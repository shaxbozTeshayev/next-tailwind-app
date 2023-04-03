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
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[3.75rem] grid grid-cols-3 ">
        {data.map((item) => (
          <div
            className="flex flex-col items-center justify-between
        gap-[1.9rem]"
          >
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-mainColor">
              <Image src={item.icon} width={30} height={30} />
            </div>
            <p className="inline text-center text-lgSecondary font-medium tracking-wide  text-textMain">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WifiAuth;
