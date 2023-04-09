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
    <Container>
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-3 gap-10">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center">
              <Image width={235} height={480} src={item.img} alt="Cloud" />
            </div>
            <p className="hidden text-center text-base font-medium text-textMain xl:inline">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Identification;
