import React from "react";
import Container from "./Container";
import Image from "next/image";

const WorkStages = ({ title }) => {
  const data = [
    {
      num: "01",
      title: "Как рекламодатель оставьте заявку",
    },
    {
      num: "02",
      title: "Как рекламодатель оставьте заявку",
    },
    {
      num: "03",
      title: "Как рекламодатель оставьте заявку",
    },
  ];

  return (
    <Container className="mb-10">
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-5">
        <div className="flex items-start justify-center">
          <Image
            src="/icons/advertisesFeet.svg"
            width={32}
            height={32}
            className="md:h-[48px] md:w-[48px]"
          />
        </div>

        {data.map((item) => (
          <div className="flex flex-col items-center justify-center gap-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mainColor text-xl text-white md:h-20 md:w-20 lg:text-3xl">
              {item.num}
            </div>
            <p className="inline text-center text-xs font-medium tracking-wide text-mainColor  xl:text-lg">
              {item.title}
            </p>
          </div>
        ))}
        <div className="flex items-start justify-center">
          <Image
            src="/icons/advertisesRocket.svg"
            width={32}
            height={32}
            className="md:h-[48px] md:w-[48px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default WorkStages;
