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

  return (
    <Container className="py-[100px]">
      <h1 className="text-center font-medium uppercase text-textMain lg:text-2xl">
        {title}
      </h1>
      <div className="flex gap-[134px]  lg:mt-[38px]">
        <div className="relative w-2/5">
          <div className="h-[560px] w-[520px]">
            <div className="z-1 absolute top-0 left-0 h-[480px] w-[480px] rounded-[10px] bg-white"></div>
            <div className="absolute top-[20px] left-[20px] z-10 flex h-[240px] w-[240px] flex-col  items-center justify-center rounded-[10px] bg-white  shadow-2xl">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-mainColor">
                <Image
                  width={36}
                  height={21}
                  src="/icons/OurServicesIconKey.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline text-[20px] font-medium leading-[32px] tracking-[0.03em] text-textMain">
                Бесплатный доступ
              </p>
            </div>
            <div className="absolute top-[60px] left-[280px] z-10 flex h-[240px] w-[240px] flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-mainColor">
                <Image
                  width={50}
                  height={27}
                  src="/icons/OurServicesIconADS.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline text-[20px] font-medium leading-[32px] tracking-[0.03em] text-textMain">
                Показ рекламы
              </p>
            </div>
            <div className="absolute top-[280px] left-[20px] z-10 flex h-[240px] w-[240px] flex-col items-center justify-center rounded-[10px] bg-white shadow-xl ">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-mainColor ">
                <Image
                  width={30}
                  height={30}
                  src="/icons/OurServicesIconClock.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline px-[30px] text-center text-[20px] font-medium leading-[32px] tracking-[0.03em] text-textMain">
                Ограниченное время сеанса
              </p>
            </div>
            <div className="absolute top-[320px] left-[280px] z-10 flex h-[240px] w-[240px] flex-col items-center justify-center rounded-[10px] bg-mainColor shadow-2xl">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-white">
                <Image
                  width={29}
                  height={23}
                  src="/icons/OurServicesIconSpeed.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline text-center text-[20px] font-medium leading-[32px] tracking-[0.03em] text-white">
                Ограниченный скорость до 2 мб/с
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="items-left mt-[60px] flex flex-col justify-center">
            <h1 className="text-[54px] leading-[66px] tracking-[0.03em] text-mainColor">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-[13px] text-[20px] leading-[32px] tracking-[0.03em] text-textMain">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-[25px]">
              {data.map((item) => (
                <li className="text-[20px] leading-[32px] tracking-[0.03em] text-textMain">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex gap-[134px]  lg:mt-[100px]">
        <div className="w-3/5">
          <div className="items-left mt-[60px] flex flex-col justify-center">
            <h1 className="text-[54px] leading-[66px] tracking-[0.03em] text-mainColor">
              Uztelecom <span className="font-bold">Paid</span> Wi-Fi
            </h1>

            <h2 className="mt-[13px] text-[20px] leading-[32px] tracking-[0.03em] text-textMain">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-[25px]">
              {data.map((item) => (
                <li className="text-[20px] leading-[32px] tracking-[0.03em] text-textMain">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="relative w-2/5">
          <div className="h-[560px] w-[520px]">
            <div className="z-1 absolute top-0 left-0 h-[480px] w-[480px] rounded-[10px] bg-white"></div>
            <div className="absolute top-[20px] left-[20px] z-10 flex h-[240px] w-[240px] flex-col  items-center justify-center rounded-[10px] bg-white  shadow-2xl">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-mainColor">
                <Image
                  width={36}
                  height={21}
                  src="/icons/OurServicesIconKey.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline text-[20px] font-medium leading-[32px] tracking-[0.03em] text-textMain">
                Бесплатный доступ
              </p>
            </div>
            <div className="absolute top-[60px] left-[280px] z-10 flex h-[240px] w-[240px] flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-mainColor">
                <Image
                  width={50}
                  height={27}
                  src="/icons/OurServicesIconADS.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline text-[20px] font-medium leading-[32px] tracking-[0.03em] text-textMain">
                Показ рекламы
              </p>
            </div>
            <div className="absolute top-[280px] left-[20px] z-10 flex h-[240px] w-[240px] flex-col items-center justify-center rounded-[10px] bg-white shadow-xl ">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-mainColor ">
                <Image
                  width={30}
                  height={30}
                  src="/icons/OurServicesIconClock.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline px-[30px] text-center text-[20px] font-medium leading-[32px] tracking-[0.03em] text-textMain">
                Ограниченное время сеанса
              </p>
            </div>
            <div className="absolute top-[320px] left-[280px] z-10 flex h-[240px] w-[240px] flex-col items-center justify-center rounded-[10px] bg-mainColor shadow-2xl">
              <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-white">
                <Image
                  width={29}
                  height={23}
                  src="/icons/OurServicesIconSpeed.svg"
                  alt="Key"
                />
              </div>
              <p className="mt-[40px] inline text-center text-[20px] font-medium leading-[32px] tracking-[0.03em] text-white">
                Ограниченный скорость до 2 мб/с
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InternetServices;
