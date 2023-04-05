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
    <Container>
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[3.5rem] grid grid-cols-5">
        <div className="flex items-start justify-center">
          <Image src="/icons/advertisesFeet.svg" width={48} height={48} />
        </div>

        {data.map((item) => (
          <div className="flex flex-col items-center justify-center gap-[1.75rem]">
            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-mainColor text-[2rem] text-white">
              {item.num}
            </div>
            <p className="inline text-center text-lgSecondary font-medium tracking-wide  text-mainColor">
              {item.title}
            </p>
          </div>
        ))}
        <div className="flex items-start justify-center">
          <Image src="/icons/advertisesRocket.svg" width={48} height={48} />
        </div>
      </div>
    </Container>
  );
};

export default WorkStages;
