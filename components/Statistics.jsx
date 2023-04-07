import React from "react";
import Image from "next/image";

const Statistics = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="bgLinear flex flex-col items-center justify-center gap-4 p-7 md:w-1/2 md:items-end md:justify-end md:pl-32 md:pr-24">
        <div className="flex h-20 w-20 justify-center rounded-full bg-white">
          <Image
            width={29}
            height={23}
            src="/icons/OurServicesIconSpeed.svg"
            alt="Key"
            className=""
          />
        </div>
        <h1 className="text-lg font-bold tracking-wide text-white xl:text-4xl">
          200 000+
        </h1>
        <p className="inline text-center text-xs font-medium tracking-wide text-white md:text-right xl:text-xl">
          Количество ежедневных просмотров активных рефералов гарантирует вам
          хорошие результаты
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 bg-white p-7 md:w-1/2 md:items-start md:justify-start md:pl-24 md:pr-32">
        <div className="flex h-20 w-20 justify-center rounded-full bg-mainColor">
          <Image
            width={29}
            height={23}
            src="/icons/OurServicesIconContact.svg"
            alt="Key"
            className=""
          />
        </div>
        <h1 className="text-lg font-bold tracking-wide text-mainColor xl:text-4xl">
          102 000+
        </h1>
        <p className="inline text-center text-xs font-medium tracking-wide text-textMain md:text-left xl:text-xl">
          Количество ежедневных просмотров активных рефералов гарантирует вам
          хорошие результаты
        </p>
      </div>
    </div>
  );
};

export default Statistics;
