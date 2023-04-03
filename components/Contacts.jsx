import Image from "next/image";
import React from "react";
import Container from "./Container";

const Contacts = ({ title }) => {
  return (
    <Container>
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary ">
        {title}
      </h1>
      <div className="mt-[2.5rem] flex gap-[1rem]">
        <div className="max-h-[25rem] w-2/5 bg-white p-[2.5rem]">
          <ul className="flex flex-col gap-[2.5rem] text-lgSecondary tracking-wide">
            <li className="flex flex-col">
              <span className="font-medium text-textSecondary">Адрес</span>
              <span className="font-semibold text-textMain">
                Узбекистан Ташкент Мирзо-Улугбекский район 7-проезд Сайрам
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-medium text-textSecondary">
                Наш адрес электронной почты
              </span>
              <span className="font-semibold text-textMain">uzdc@info.uz</span>
            </li>
            <li className="flex flex-col">
              <span className="font-medium text-textSecondary">
                Наш номер телефона
              </span>
              <span className="font-semibold text-textMain">
                +998 71 201 01 01
              </span>
            </li>
          </ul>
        </div>
        <div className="">
          <Image src="/images/MapContacts.png" width={834} height={622} />
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
