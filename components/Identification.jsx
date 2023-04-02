import React from "react";
import Container from "./Container";
import Image from "next/image";

const Identification = ({ title }) => {
  const data = [
    {
      img: "/images/iphone14mockup1.png",
      description:
        "При подключении к Wi-Fi, пользователю предлагается отправить смс",
    },
    {
      img: "/images/iphone14mockup2.png",
      description: `Получив смс с пин кодом, система 
        запоминает устройства и номер на 90дней`,
    },
    {
      img: "/images/iphone14mockup3.png",
      description: `Пользователь идентифицирован и может 
        пользоваться интернетом`,
    },
  ];
  return (
    <Container className="mt-[6.25rem]">
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[3.75rem] grid grid-cols-3 gap-[1.5rem]">
        {data.map((item) => (
          <div className="flex flex-col items-center justify-center gap-[1.4rem]">
            <div>
              <Image width={235} height={480} src={item.img} />
            </div>
            <p className="text-center text-[1rem] font-medium leading-[1.5rem] text-textMain">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Identification;
