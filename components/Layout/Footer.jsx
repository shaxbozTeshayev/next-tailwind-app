import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navigation = [
    { href: "/", title: "Интернет" },
    { href: "/business", title: "Для бизнес" },
    { href: "/advertises", title: "Для рекломодателей" },
    { href: "/contact", title: "Контакты" },
  ];

  return (
    <footer className="mx-auto flex w-full flex-col justify-center bg-white px-5 md:px-32">
      <div className="mt-8">
        <Link href="/">
          <Image
            src="/images/UzCloud.png"
            width="166"
            height="43"
            className="md:h-7 md:w-28 xl:h-11 xl:w-40"
          />
        </Link>
      </div>
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:gap-24">
        <div className="mt-5 flex flex-col gap-5 md:order-last md:flex-row md:gap-24">
          <div className="">
            <p className=" text-base font-medium text-textSecondary md:italic">
              Наш номер телефона
            </p>
            <p className="mt-1 text-xl font-semibold tracking-wide text-textMain md:italic">
              +998 71 201 01 01
            </p>
          </div>
          <div className="">
            <p className="text-base font-medium text-textSecondary md:italic">
              Наш адрес электронной почты
            </p>
            <p className="mt-1 text-xl font-semibold tracking-wide text-textMain md:italic">
              uzdc@info.uz
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-7 md:flex-row md:gap-10">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-lg font-semibold text-mainColor lg:italic"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <p className="dark:border-trueGray-700 border-solid-[#F3F7FF] mt-8 border-t  pt-3 text-sm font-medium text-coolGray md:italic">
        © {new Date().getFullYear()} АК "Узбектелеком". Все услуги
        лицензированы.
      </p>
    </footer>
  );
};

export default Footer;
