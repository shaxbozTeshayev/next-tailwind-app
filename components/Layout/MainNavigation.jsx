import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainNavigation = () => {
  const navigation = [
    {
      nav: "Интернет",
      link: "/",
    },
    {
      nav: "Для бизнес",
      link: "/",
    },
    {
      nav: "Для рекломодателей",
      link: "/",
    },
    {
      nav: "Контакты",
      link: "/",
    },
  ];

  return (
    <header className="flex h-[6.25rem] w-full items-center justify-between bg-[#FFFFFF] py-7  px-36 md:h-[5rem] md:py-[1.5rem] md:px-[8rem]">
      <div className="text-fourthBlack font-Hexaframe text-[36px] leading-[43px] text-mainColor md:text-[24px] md:leading-[29px]">
        UzCloud
      </div>
      <nav>
        <div className="flex md:gap-[1.2rem] lg:gap-[2.5rem]">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="font-semibold italic text-coolGray md:text-mdPrimary"
            >
              {item.nav}
            </Link>
          ))}

          <div className="flex gap-[14px]">
            <Image
              src="/icons/internet.svg"
              alt="search"
              width="20"
              height="20"
            />
            <p className="font-semibold uppercase italic text-mainColor md:text-mdPrimary">
              Uz
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
