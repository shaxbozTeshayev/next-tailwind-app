import React from "react";
import Container from "./Container";
import Image from "next/image";

const InternetServices = ({ title }) => {
  const data = [
    "1.Найти и выбрать сеть #Uzcloud на своем устройстве;",
    "2.Авторизоваться по номеру мобильного телефона;",
    "3.Выбрать категорию бесплатного интернета;",
    "4.Просмотр представленной рекламы и выход в интернет.",
    "5.Пользоваться безлимитным доступом в сети интернет.",
  ];

  const cardData = [
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Бесплатный доступ",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Бесплатный доступ",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Бесплатный доступ",
    },
    {
      icon: "/icons/advertisesMoney.svg",
      title: "Бесплатный доступ",
    },
  ];

  return (
    <Container>
      <h2 className="text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal">
        {title}
      </h2>
      <div className="mt-10 flex flex-col md:flex-row md:gap-20">
        <div className="order-2 mt-5 grid grid-cols-2 gap-2 rounded-md bg-white p-3 md:order-1   md:w-3/5">
          {cardData.map((item) => (
            <div className="group flex flex-col items-center justify-center rounded-lg bg-white px-2 py-7 shadow-lg hover:bg-mainColor ">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mainColor">
                <Image src={item.icon} width={32} height={32} />
              </div>
              <p className="mt-4 inline text-center text-sm text-textMain group-hover:text-white xl:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="order-1 md:flex md:w-3/5 md:items-center">
          <div className="flex flex-col  justify-center">
            <h1 className="text-3xl tracking-wide text-mainColor md:text-5xl">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-4 text-sm tracking-wide text-textMain">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-3">
              {data.map((item) => (
                <li className="text-xs tracking-wide text-textMain">{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row md:gap-20">
        <div className="order-1 mt-5 grid grid-cols-2 gap-2 rounded-md bg-white p-3 md:order-2    md:w-3/5">
          {cardData.map((item) => (
            <div className="group flex flex-col items-center justify-center rounded-lg bg-white px-2 py-7 shadow-lg hover:bg-mainColor ">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mainColor">
                <Image src={item.icon} width={32} height={32} />
              </div>
              <p className="mt-4 inline text-center text-sm text-textMain group-hover:text-white xl:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="md:order-1 md:flex md:w-3/5 md:items-center">
          <div className="flex flex-col  justify-center">
            <h1 className="text-3xl tracking-wide text-mainColor md:text-5xl">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-4 text-sm tracking-wide text-textMain">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-3">
              {data.map((item) => (
                <li className="text-xs tracking-wide text-textMain">{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InternetServices;
