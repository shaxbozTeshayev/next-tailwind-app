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
    <Container>
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary lg:text-lgPrimary">
        {title}
      </h1>
      <div className="flex md:mt-[40px] md:gap-[84px] lg:gap-[134px]">
        <div className="relative w-2/5">
          <div className="md:h-[19.375rem] md:w-[20.875rem] lg:h-[35rem] lg:w-[32.5rem]">
            <div className="z-1 absolute top-0 left-0 rounded-[10px] bg-white md:h-[18rem] md:w-[18rem] lg:h-[30rem] lg:w-[30rem]"></div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[12px] md:left-[12px] md:h-[9rem]  md:w-[9rem] lg:top-[20px] lg:left-[20px] lg:h-[15rem]  lg:w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
                <Image
                  width={36}
                  height={21}
                  src="/icons/OurServicesIconKey.svg"
                  alt="Key"
                  className="md:h-auto md:w-[20px] lg:w-[36px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Бесплатный доступ
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[35px] md:left-[166px] md:h-[9rem] md:w-[9rem] lg:top-[60px] lg:left-[280px] lg:h-[15rem] lg:w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
                <Image
                  width={50}
                  height={27}
                  src="/icons/OurServicesIconADS.svg"
                  alt="Key"
                  className="md:h-auto md:w-[28px] lg:w-[50px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Показ рекламы
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-xl md:top-[167px] md:left-[11px] md:h-[9rem] md:w-[9rem] lg:top-[280px] lg:left-[20px] lg:h-[15rem] lg:w-[15rem] ">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem] ">
                <Image
                  width={30}
                  height={30}
                  src="/icons/OurServicesIconClock.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] lg:w-[30px]"
                />
              </div>
              <p className="inline px-[30px] text-center font-medium tracking-wide text-textMain  md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Ограниченное время сеанса
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-mainColor shadow-2xl md:top-[190px] md:left-[166px] md:h-[9rem] md:w-[9rem] lg:top-[320px] lg:left-[280px] lg:h-[15rem] lg:w-[15rem]">
              <div className="flex justify-center rounded-full bg-white md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
                <Image
                  width={29}
                  height={23}
                  src="/icons/OurServicesIconSpeed.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] lg:w-[29px]"
                />
              </div>
              <p className="inline text-center font-medium tracking-wide text-white md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Ограниченный скорость до 2 мб/с
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="items-left flex flex-col justify-center md:mt-[35px] lg:mt-[60px]">
            <h1 className="tracking-wide text-mainColor md:text-[1.75rem] md:leading-[2.125rem] lg:text-[3.375rem] lg:leading-[4.125rem]">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-[13px] tracking-wide text-textMain md:text-mdSecondary lg:text-lgSecondary">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-[25px]">
              {data.map((item) => (
                <li className="tracking-wide text-textMain md:text-mdSecondary lg:text-lgSecondary">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex md:mt-[40px] md:gap-[84px] lg:gap-[134px]">
        <div className="w-3/5">
          <div className="items-left flex flex-col justify-center md:mt-[35px] lg:mt-[60px]">
            <h1 className="tracking-wide text-mainColor md:text-[1.75rem] md:leading-[2.125rem] lg:text-[3.375rem] lg:leading-[4.125rem]">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-[13px] tracking-wide text-textMain md:text-mdSecondary lg:text-lgSecondary">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-[25px]">
              {data.map((item) => (
                <li className="tracking-wide text-textMain md:text-mdSecondary lg:text-lgSecondary">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="relative w-4/5">
          <div className="md:h-[19.375rem] md:w-[20.875rem] lg:h-[35rem] lg:w-[32.5rem]">
            <div className="z-1 absolute top-0 left-0 rounded-[10px] bg-white md:h-[18rem] md:w-[18rem] lg:h-[30rem] lg:w-[30rem]"></div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[12px] md:left-[12px] md:h-[9rem]  md:w-[9rem] lg:top-[20px] lg:left-[20px] lg:h-[15rem]  lg:w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
                <Image
                  width={36}
                  height={21}
                  src="/icons/OurServicesIconKey.svg"
                  alt="Key"
                  className="md:h-auto md:w-[20px] lg:w-[36px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Бесплатный доступ
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[35px] md:left-[166px] md:h-[9rem] md:w-[9rem] lg:top-[60px] lg:left-[280px] lg:h-[15rem] lg:w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
                <Image
                  width={50}
                  height={27}
                  src="/icons/OurServicesIconADS.svg"
                  alt="Key"
                  className="md:h-auto md:w-[28px] lg:w-[50px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Показ рекламы
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-xl md:top-[167px] md:left-[11px] md:h-[9rem] md:w-[9rem] lg:top-[280px] lg:left-[20px] lg:h-[15rem] lg:w-[15rem] ">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem] ">
                <Image
                  width={30}
                  height={30}
                  src="/icons/OurServicesIconClock.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] lg:w-[30px]"
                />
              </div>
              <p className="inline px-[30px] text-center font-medium tracking-wide text-textMain  md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
                Ограниченное время сеанса
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-mainColor shadow-2xl md:top-[190px] md:left-[166px] md:h-[9rem] md:w-[9rem] lg:top-[320px] lg:left-[280px] lg:h-[15rem] lg:w-[15rem]">
              <div className="flex justify-center rounded-full bg-white md:h-[2.625rem] md:w-[2.625rem] lg:h-[4.375rem] lg:w-[4.375rem]">
                <Image
                  width={29}
                  height={23}
                  src="/icons/OurServicesIconSpeed.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] lg:w-[29px]"
                />
              </div>
              <p className="inline text-center font-medium tracking-wide text-white md:mt-[23px] md:text-mdSecondary lg:mt-[40px] lg:text-lgSecondary">
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
