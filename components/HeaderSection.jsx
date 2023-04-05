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
        <button className="shadow-[0_5px_15px_-10px_rgba(116, 104, 255, 0.2)] mt-10 inline-block rounded-md bg-mainColor px-6 py-4 text-center text-white md:py-4 md:px-14 lg:mt-10 lg:italic">
          Оставить заявку
        </button>
      </div>
      {/* <div className="absolute top-[45px] left-[215px] block md:hidden">
        <Image
          src="/icons/headerCloud1.svg"
          alt="Cloud"
          width={315}
          height={235}
        />
      </div>
      <div className="absolute top-[25px] left-[1800px] md:left-[901px] md:top-[148px]">
        <Image
          src="/icons/headerCloud2.svg"
          alt="Cloud"
          width={124}
          height={92}
        />
      </div>
      <div className="absolute top-[143px] left-[1373px] block md:hidden">
        <Image
          src="/icons/headerCloud3.svg"
          alt="Cloud"
          width={273}
          height={223}
        />
      </div>
      <div className="absolute top-[304px] left-0 md:top-[159px] md:left-0">
        <Image
          src="/icons/headerCloud4.svg"
          alt="Cloud"
          width={125}
          height={125}
        />
      </div>
      <div className="absolute top-[450px] left-[407px] md:top-[467px] md:left-[-4px]">
        <Image
          src="/icons/headerCloud5.svg"
          alt="Cloud"
          width={227}
          height={94}
        />
      </div>
      <div className="absolute top-[614px] left-[160px] md:top-[787px] md:left-[114px]">
        <Image
          src="/icons/headerCloud6.svg"
          alt="Cloud"
          width={109}
          height={64}
        />
      </div>
      <div className="absolute top-[565px] left-[1493px] md:top-[737px] md:left-[643px]">
        <Image
          src="/icons/headerCloud7.svg"
          alt="Cloud"
          width={214}
          height={77}
        />
      </div>
      <div className="absolute left-[1369px] top-[356px] md:top-[533px] md:left-[730px]">
        <Image
          src="/icons/headerWive1.svg"
          alt="Cloud"
          width={89}
          height={120}
        />
      </div>
      <div className="absolute left-[458px] top-[620px] md:top-[594px] md:left-[271px]">
        <Image
          src="/icons/headerWive1.svg"
          alt="Cloud"
          width={89}
          height={120}
        />
      </div> */}
    </section>
  );
};

export default HeaderSection;
