import Image from "next/image";
import React from "react";
import Container from "./Container";

const Contacts = ({ title }) => {
  return (
    <Container className="pb-10">
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <div className=" bg-white p-6 md:w-2/5">
          <ul className="flex flex-col gap-10 text-base tracking-wide">
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
