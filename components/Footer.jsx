import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[50px] pl-[187px] pr-[187px] pb-[18px]">
      <div className="text-fourthBlack font-Hexaframe text-[36px] leading-[43px] text-mainColor">
        UzCloud
      </div>
      <div className="flex justify-between">
        <div className="mt-[37px]  flex justify-center gap-[40px] text-left align-middle ">
          <Link
            href=""
            className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-mainColor"
          >
            Для бизнес
          </Link>
          <Link
            href=""
            className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-mainColor"
          >
            Интернет
          </Link>
          <Link
            href=""
            className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-mainColor"
          >
            Для рекломодателей
          </Link>
          <Link
            href=""
            className="font-Montserrat text-[18px] font-semibold italic leading-[22px] text-mainColor"
          >
            Контакты
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="font-Montserrat text-[16px] font-medium italic leading-[26px] text-textSecondary">
            Наш номер телефона
          </p>
          <p className="textMain font-Montserrat text-[20px] font-semibold italic leading-[32px] tracking-[.03em] text-textMain">
            +998 71 201 01 01
          </p>
          <div className="flex justify-center gap-[10px] align-middle">
            <span className="textMain font-Montserrat text-[14px] font-normal italic leading-[22px] tracking-[.03em] text-textMain">
              Рабочее время:ПН - ПТ
            </span>
            <span className="border-solid-[#7B8794] mt-[12px] h-0 w-[22px] rotate-90 border-[1px] "></span>
            <span>9:00 - 18:00</span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-Montserrat text-[16px] font-medium italic leading-[26px] text-textSecondary">
            Наш адрес электронной почты
          </p>
          <p className="textMain font-Montserrat text-[20px] font-semibold italic leading-[32px] tracking-[.03em] text-textMain">
            uzdc@info.uz
          </p>
        </div>
      </div>

      <div className="border-solid-[#F3F7FF] mt-[18px] h-0 w-[1549px] rotate-180 border-[1px] "></div>
      <p className="mt-[18px] font-Montserrat text-[14px] font-medium italic leading-[22px] text-coolGray">
        © 2023 АК "Узбектелеком". Все услуги лицензированы.
      </p>
    </footer>
  );
};

export default Footer;
