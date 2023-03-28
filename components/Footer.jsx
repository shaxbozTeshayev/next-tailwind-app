import Link from "next/link";
import React from "react";

const Footer = () => {
  const navigation = [
    "Для бизнес",
    "Интернет",
    "Для рекломодателей",
    "Контакты",
  ];

  return (
    <footer className="items-left mx-auto flex w-full flex-col justify-center bg-white pt-[50px] pb-[18px] md:px-[128px] lg:px-[187px]">
      <div className="text-fourthBlack font-Hexaframe text-[36px] leading-[43px] text-mainColor">
        UzCloud
      </div>
      <div className="flex justify-between md:mt-[40px] md:flex-col lg:flex-row">
        <div className="md-[40px] lg:align-center flex gap-[40px] lg:mt-[37px] lg:justify-center">
          {navigation.map((item, idx) => (
            <Link
              href="/"
              className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-mainColor"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="md:mt-[40px] md:flex md:gap-[210px]">
          <div className="flex flex-col">
            <p className=" font-Montserrat text-[16px] font-medium italic leading-[26px] text-textSecondary">
              Наш номер телефона
            </p>
            <p className="mt-[4px] font-Montserrat text-[20px] font-semibold italic leading-[32px] tracking-[.03em] text-textMain">
              +998 71 201 01 01
            </p>
            <div className="flex justify-center gap-[10px] align-middle">
              {/* <span className="textMain font-Montserrat text-[14px] font-normal italic leading-[22px] tracking-[.03em] text-textMain">
              Рабочее время:ПН - ПТ
            </span> */}
              {/* <span className="border-solid-[#7B8794] mt-[12px] h-0 w-[22px] rotate-90 border-[1px] "></span>
            <span>9:00 - 18:00</span> */}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-Montserrat text-[16px] font-medium italic leading-[26px] text-textSecondary">
              Наш адрес электронной почты
            </p>
            <p className="mt-[4px] font-Montserrat text-[20px] font-semibold italic leading-[32px] tracking-[.03em] text-textMain">
              uzdc@info.uz
            </p>
          </div>
        </div>
      </div>

      {/* <div className="border-solid-[#F3F7FF] mx-auto h-0 rotate-180 border-[1px] md:mt-[50px] md:w-[768px] lg:mt-[18px] lg:w-[1549px] "></div> */}
      <p className="dark:border-trueGray-700 border-solid-[#F3F7FF] border-t font-Montserrat text-[14px] font-medium italic leading-[22px] text-coolGray md:mt-[15px] lg:mt-[18px]">
        © {new Date().getFullYear()} АК "Узбектелеком". Все услуги
        лицензированы.
      </p>
    </footer>
  );
};

export default Footer;
