import React from "react";
import Image from "next/image";
import Container from "./Container";

const Statistics = () => {
  return (
    <div className="flex w-full">
      <div className="bgLinear flex w-1/2 flex-col items-end justify-end gap-[15px] py-[3.75rem] pl-[18.75rem] pr-[6.25rem]">
        <div className="flex justify-center rounded-full bg-white md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
          <Image
            width={29}
            height={23}
            src="/icons/OurServicesIconSpeed.svg"
            alt="Key"
            className="md:h-auto md:w-[18px] lg:w-[29px]"
          />
        </div>
        <h1 className="font-bold tracking-[0.03em] text-white md:text-[1.75rem] md:leading-[2.125rem] lg:text-[3.375rem] lg:leading-[4.125rem]">
          200 000+{" "}
        </h1>
        <p className="inline text-right text-lgSecondary font-medium tracking-[0.03em] text-white">
          Количество ежедневных просмотров активных рефералов гарантирует вам
          хорошие результаты
        </p>
      </div>
      <div className="flex w-1/2 flex-col items-start justify-start gap-[15px] bg-white py-[3.75rem] pr-[18.75rem] pl-[6.25rem]">
        <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
          <Image
            width={29}
            height={23}
            src="/icons/OurServicesIconContact.svg"
            alt="Key"
            className="md:h-auto md:w-[18px] lg:w-[29px]"
          />
        </div>
        <h1 className="font-bold tracking-[0.03em] text-mainColor md:text-[1.75rem] md:leading-[2.125rem] lg:text-[3.375rem] lg:leading-[4.125rem]">
          102 000+
        </h1>
        <p className="inline text-left text-lgSecondary font-medium tracking-[0.03em] text-textMain">
          Количество ежедневных просмотров активных рефералов гарантирует вам
          хорошие результаты
        </p>
      </div>
    </div>
  );
};

export default Statistics;
