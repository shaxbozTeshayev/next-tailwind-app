import React from "react";
import Image from "next/image";

const MainNavigation = () => {
  return (
    <header className="flex h-[100px] w-full items-center justify-between bg-[#FFFFFF] py-7  px-36 md:h-[80px] md:py-[25px] md:px-[128px]">
      <div className="text-fourthBlack font-Hexaframe text-[36px] leading-[43px] text-mainColor md:text-[24px] md:leading-[29px]">
        UzCloud
      </div>
      <nav>
        <ul className="flex gap-[40px] md:gap-[20px]">
          <li className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-coolGray md:text-[16px] md:leading-[20px]">
            Интернет
          </li>
          <li className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-coolGray md:text-[16px] md:leading-[20px]">
            Для бизнес
          </li>
          <li className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-coolGray md:text-[16px] md:leading-[20px]">
            Для рекломодателей
          </li>
          <li className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-coolGray md:text-[16px] md:leading-[20px]">
            Контакты
          </li>
          <li className="flex gap-[14px]">
            <Image
              src="/icons/internet.svg"
              alt="search"
              width={20}
              height={20}
            />
            <p className="font-Montserrat text-[18px] font-semibold uppercase italic leading-[22px] text-mainColor">
              Uz
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
