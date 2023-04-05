import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../MobileNav";

const MainNavigation = () => {
  const headerNavLinks = [
    { href: "/", title: "Интернет" },
    { href: "/business", title: "Для бизнес" },
    { href: "/advertises", title: "Для рекломодателей" },
    { href: "/contact", title: "Контакты" },
  ];

  return (
    <header className="flex h-16 w-full items-center justify-around bg-[#FFFFFF] md:justify-between md:py-6 md:px-32  xl:h-24  xl:py-[2.5rem] xl:px-44">
      <div className="">
        <Link href="/">
          <Image
            src="/images/UzCloud.png"
            width="166"
            height="43"
            className="md:h-7 md:w-28 xl:h-11 xl:w-40"
          />
        </Link>
      </div>
      <nav>
        <div className="hidden justify-center md:flex md:items-center md:gap-5 xl:gap-10">
          {headerNavLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="md:text-md font-semibold italic text-coolGray hover:text-mainColor"
            >
              {item.title}
            </Link>
          ))}

          <div className="flex gap-3.5">
            <Image
              src="/icons/internet.svg"
              alt="search"
              width="20"
              height="20"
            />
            <p className="md:text-md font-semibold uppercase italic text-mainColor">
              Uz
            </p>
          </div>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};
export default MainNavigation;
