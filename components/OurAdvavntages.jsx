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
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-lg bg-white p-8"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mainColor">
              <Image src={item.icon} width={32} height={32} alt="Cloud" />
            </span>
            <p className="mt-4 inline text-center text-sm text-textMain xl:text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurAdvavntages;
