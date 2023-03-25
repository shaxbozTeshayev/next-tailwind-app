import React from "react";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <section className="relative h-screen w-full ">
      <div className="mx-auto flex flex-col items-center  md:px-[163px] lg:px-[504px]">
        <h1 className="text-center font-Montserrat font-normal italic tracking-[.03em] text-mainColor md:mt-[60px] md:text-[48px]  md:leading-[59px] lg:mt-[100px] lg:text-[60px] lg:leading-[73px]">
          Повысьте <span className="font-bold">продуктивность</span> вашей
          компании
        </h1>
        <p className="px-[55px] text-center font-Montserrat font-medium italic tracking-[.03em] text-textMain md:mt-[30px] md:text-[18px] md:leading-[29px] lg:mt-[40px] lg:text-[20px] lg:leading-[32px]">
          Услуги нашего оператора Wi-Fi могут стать отличным подспорьем для
          развития вашего бизнеса, поэтому свяжитесь с нами и получите множество
          наших предложений!!!
        </p>
        <button className="shadow-[0_5px_15px_-10px_rgba(116, 104, 255, 0.2)] inline-block rounded-[5px] bg-mainColor text-center italic text-white md:mt-[40px] md:py-[18px] md:px-[58px] lg:mt-[42px] lg:px-[28px] lg:py-[14px]">
          Оставить заявку
        </button>
      </div>
      <div className="absolute md:hidden lg:top-[45px] lg:left-[215px] lg:block">
        <Image
          src="/icons/headerCloud1.svg"
          alt="Cloud"
          width={315}
          height={235}
        />
      </div>
      <div className="absolute md:left-[901px] md:top-[148px] lg:top-[25px] lg:left-[1800px]">
        <Image
          src="/icons/headerCloud2.svg"
          alt="Cloud"
          width={124}
          height={92}
        />
      </div>
      <div className="absolute top-[143px] left-[1373px] md:hidden lg:block">
        <Image
          src="/icons/headerCloud3.svg"
          alt="Cloud"
          width={273}
          height={223}
        />
      </div>
      <div className="absolute md:top-[159px] md:left-0 lg:top-[304px] lg:left-0">
        <Image
          src="/icons/headerCloud4.svg"
          alt="Cloud"
          width={125}
          height={125}
        />
      </div>
      <div className="absolute md:top-[467px] md:left-[-4px] lg:top-[450px] lg:left-[407px]">
        <Image
          src="/icons/headerCloud5.svg"
          alt="Cloud"
          width={227}
          height={94}
        />
      </div>
      <div className="absolute md:top-[787px] md:left-[114px] lg:top-[614px] lg:left-[160px]">
        <Image
          src="/icons/headerCloud6.svg"
          alt="Cloud"
          width={109}
          height={64}
        />
      </div>
      <div className="absolute md:top-[737px] md:left-[643px] lg:top-[565px] lg:left-[1493px]">
        <Image
          src="/icons/headerCloud7.svg"
          alt="Cloud"
          width={214}
          height={77}
        />
      </div>
      <div className="absolute md:top-[533px] md:left-[730px] lg:left-[1369px] lg:top-[356px]">
        <Image
          src="/icons/headerWive1.svg"
          alt="Cloud"
          width={89}
          height={120}
        />
      </div>
      <div className="absolute md:top-[594px] md:left-[271px] lg:left-[458px] lg:top-[620px]">
        <Image
          src="/icons/headerWive1.svg"
          alt="Cloud"
          width={89}
          height={120}
        />
      </div>
    </section>
  );
};

export default HeaderSection;
