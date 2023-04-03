import React from "react";
import Container from "./Container";
import Image from "next/image";

const OurAdvavntages = ({ title }) => {
  const data = [
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Низкие цены",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Низкие цены",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Низкие цены",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Низкие цены",
    },
  ];

  return (
    <Container>
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[3.75rem] grid grid-cols-4 gap-[1.25rem]">
        {data.map((item) => (
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-white px-[3rem] py-[1rem]">
            <span className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-mainColor">
              <Image src={item.icon} width={32} height={32} />
            </span>
            <p className="mt-[1rem] inline text-center text-lgSecondary text-textMain">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurAdvavntages;
