import React from "react";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <section className="relative h-screen">
      <div className="mx-auto flex flex-col items-center px-5 md:px-40">
        <h1 className="mt-64 text-center text-3xl font-normal tracking-wide text-mainColor lg:mt-16 lg:text-5xl lg:italic xl:mt-24 xl:text-6xl">
          Повысьте <span className="font-bold">продуктивность</span> вашей
          компании
        </h1>
        <p className="mt-1.5 text-center text-xs font-medium tracking-wide text-textMain md:mt-8 md:text-lg lg:italic xl:text-xl">
          Услуги нашего оператора Wi-Fi могут стать отличным подспорьем для
          развития вашего бизнеса, поэтому свяжитесь с нами и получите множество
          наших предложений!!!
        </p>
        <button className="mt-10 inline-block rounded-md bg-mainColor px-6 py-4 text-center text-white shadow-md hover:opacity-80 md:py-4 md:px-14 lg:mt-10 lg:italic">
          Оставить заявку
        </button>
      </div>

      <div className="absolute top-[25px] left-[280px] md:left-[930px] md:top-[150px]">
        <Image
          src="/icons/headerCloud2.svg"
          alt="Cloud"
          width={124}
          height={92}
        />
      </div>

      <div className="absolute hidden md:top-[129px] md:left-0 md:block">
        <Image
          src="/icons/headerCloud4.svg"
          alt="Cloud"
          width={125}
          height={125}
        />
      </div>
      <div className="md:left-300px absolute top-[100px] left-[36px] md:top-[380px]">
        <Image
          src="/icons/headerCloud5.svg"
          alt="Cloud"
          width={227}
          height={94}
        />
      </div>

      <div className="absolute top-[550px] left-[332px] md:top-[429px] md:left-[830px]">
        <Image
          src="/icons/headerWive1.svg"
          alt="Cloud"
          width={89}
          height={100}
        />
      </div>
    </section>
  );
};

export default HeaderSection;
