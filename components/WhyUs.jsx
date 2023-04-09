import Image from "next/image";
import React from "react";
import { whyUsData } from "../data/data";
import Container from "./Container";

const WhyUs = ({ title }) => {
  const data = [
    {
      num: "01",
      word1: "Широкое",
      word2: "покрытие",
    },
    {
      num: "02",

      word1: "Низкие",
      word2: "цены",
    },
    {
      num: "03",
      word1: "Безопасность",
      word2: "подключения",
    },
    {
      num: "04",
      word1: "Низкое",
      word2: "энергопотреб",
    },
    {
      num: "05",
      word1: "Сбор",
      word2: "данных",
    },
  ];

  return (
    <Container>
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal xl:italic">
        {title}
      </h2>
      <div className="mt-5 flex flex-col justify-between gap-8 md:mt-14 md:flex-row">
        {data.map((item) => (
          <div className="flex gap-10 md:flex-col md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-mainColor p-4 text-3xl text-white xl:italic">
              {item.num}
            </div>
            <p className="md:text-center">
              <span className="text-center text-xl font-medium tracking-wide text-mainColor xl:italic">
                {item.word1}
              </span>
              <br />
              <span className="text-center text-xl font-medium tracking-wide text-mainColor xl:italic">
                {item.word2}
              </span>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyUs;
