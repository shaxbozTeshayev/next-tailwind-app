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
      <h1 className="text-center font-medium uppercase text-textMain md:text-mdPrimary text-lgPrimary">
        {title}
      </h1>
      <div className="flex md:mt-[40px] md:gap-[84px] gap-[134px]">
        <div className="relative w-2/5">
          <div className="md:h-[19.375rem] md:w-[20.875rem] h-[35rem] w-[32.5rem]">
            <div className="z-1 absolute top-0 left-0 rounded-[10px] bg-white md:h-[18rem] md:w-[18rem] h-[30rem] w-[30rem]"></div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[12px] md:left-[12px] md:h-[9rem]  md:w-[9rem] top-[20px] left-[20px] h-[15rem]  w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem]">
                <Image
                  width={36}
                  height={21}
                  src="/icons/OurServicesIconKey.svg"
                  alt="Key"
                  className="md:h-auto md:w-[20px] w-[36px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Бесплатный доступ
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[35px] md:left-[166px] md:h-[9rem] md:w-[9rem] top-[60px] left-[280px] h-[15rem] w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem]">
                <Image
                  width={50}
                  height={27}
                  src="/icons/OurServicesIconADS.svg"
                  alt="Key"
                  className="md:h-auto md:w-[28px] w-[50px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Показ рекламы
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-xl md:top-[167px] md:left-[11px] md:h-[9rem] md:w-[9rem] top-[280px] left-[20px] h-[15rem] w-[15rem] ">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem] ">
                <Image
                  width={30}
                  height={30}
                  src="/icons/OurServicesIconClock.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] w-[30px]"
                />
              </div>
              <p className="inline px-[30px] text-center font-medium tracking-wide text-textMain  md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Ограниченное время сеанса
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-mainColor shadow-2xl md:top-[190px] md:left-[166px] md:h-[9rem] md:w-[9rem] top-[320px] left-[280px] h-[15rem] w-[15rem]">
              <div className="flex justify-center rounded-full bg-white md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem]">
                <Image
                  width={29}
                  height={23}
                  src="/icons/OurServicesIconSpeed.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] w-[29px]"
                />
              </div>
              <p className="inline text-center font-medium tracking-wide text-white md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Ограниченный скорость до 2 мб/с
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="items-left flex flex-col justify-center md:mt-[35px] mt-[60px]">
            <h1 className="tracking-wide text-mainColor md:text-[1.75rem] md:leading-[2.125rem] text-[3.375rem] leading-[4.125rem]">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-[13px] tracking-wide text-textMain md:text-mdSecondary text-lgSecondary">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-[25px]">
              {data.map((item) => (
                <li className="tracking-wide text-textMain md:text-mdSecondary text-lgSecondary">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex md:mt-[40px] md:gap-[84px] gap-[134px]">
        <div className="w-3/5">
          <div className="items-left flex flex-col justify-center md:mt-[35px] mt-[60px]">
            <h1 className="tracking-wide text-mainColor md:text-[1.75rem] md:leading-[2.125rem] text-[3.375rem] leading-[4.125rem]">
              Uztelecom <span className="font-bold">Free</span> Wi-Fi
            </h1>

            <h2 className="mt-[13px] tracking-wide text-textMain md:text-mdSecondary text-lgSecondary">
              Как пользоваться и как подключиться?
            </h2>

            <ol className="mt-[25px]">
              {data.map((item) => (
                <li className="tracking-wide text-textMain md:text-mdSecondary text-lgSecondary">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="relative w-4/5">
          <div className="md:h-[19.375rem] md:w-[20.875rem] h-[35rem] w-[32.5rem]">
            <div className="z-1 absolute top-0 left-0 rounded-[10px] bg-white md:h-[18rem] md:w-[18rem] h-[30rem] w-[30rem]"></div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[12px] md:left-[12px] md:h-[9rem]  md:w-[9rem] top-[20px] left-[20px] h-[15rem]  w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem]">
                <Image
                  width={36}
                  height={21}
                  src="/icons/OurServicesIconKey.svg"
                  alt="Key"
                  className="md:h-auto md:w-[20px] w-[36px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Бесплатный доступ
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-2xl md:top-[35px] md:left-[166px] md:h-[9rem] md:w-[9rem] top-[60px] left-[280px] h-[15rem] w-[15rem]">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem]">
                <Image
                  width={50}
                  height={27}
                  src="/icons/OurServicesIconADS.svg"
                  alt="Key"
                  className="md:h-auto md:w-[28px] w-[50px]"
                />
              </div>
              <p className="inline font-medium tracking-wide text-textMain md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Показ рекламы
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-white shadow-xl md:top-[167px] md:left-[11px] md:h-[9rem] md:w-[9rem] top-[280px] left-[20px] h-[15rem] w-[15rem] ">
              <div className="flex justify-center rounded-full bg-mainColor md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem] ">
                <Image
                  width={30}
                  height={30}
                  src="/icons/OurServicesIconClock.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] w-[30px]"
                />
              </div>
              <p className="inline px-[30px] text-center font-medium tracking-wide text-textMain  md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
                Ограниченное время сеанса
              </p>
            </div>
            <div className="absolute z-10 flex flex-col items-center justify-center rounded-[10px] bg-mainColor shadow-2xl md:top-[190px] md:left-[166px] md:h-[9rem] md:w-[9rem] top-[320px] left-[280px] h-[15rem] w-[15rem]">
              <div className="flex justify-center rounded-full bg-white md:h-[2.625rem] md:w-[2.625rem] h-[4.375rem] w-[4.375rem]">
                <Image
                  width={29}
                  height={23}
                  src="/icons/OurServicesIconSpeed.svg"
                  alt="Key"
                  className="md:h-auto md:w-[18px] w-[29px]"
                />
              </div>
              <p className="inline text-center font-medium tracking-wide text-white md:mt-[23px] md:text-mdSecondary mt-[40px] text-lgSecondary">
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
