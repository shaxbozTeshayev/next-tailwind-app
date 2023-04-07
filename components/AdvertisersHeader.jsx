import Image from "next/image";
import React from "react";
import Container from "./Container";

const AdvertisersHeader = () => {
  return (
    <div className="relative md:h-screen">
      <Container>
        <div className="mt-16 flex flex-col gap-16 md:flex-row">
          <div className=" relative order-last h-72 md:order-2  md:h-96 md:w-2/5">
            <Image src="/images/HandPhone.png" fill objectFit="contain" />
          </div>
          <div className="md:order-1 md:w-3/5">
            <h1 className="text-3xl tracking-wide text-mainColor md:text-5xl">
              <span className="inline-block font-bold"> Ваша реклама</span> на
              экранах{" "}
              <span className="inline-block font-bold"> смартфонов</span>{" "}
              клиентов для бизнеса
            </h1>
            <p className="mt-3 text-xs tracking-wide text-[#000000] md:text-sm">
              при подключении к WIFI сети заведения
            </p>
            <button className="mt-16 inline-block rounded bg-mainColor py-2 px-4 text-center text-xs text-white shadow-md md:py-4 md:px-16 md:text-sm">
              Оставить заявку
            </button>
          </div>
        </div>
      </Container>
      <div className="absolute top-[548px] left-[30px] md:top-[676px] md:left-[190px]">
        <Image
          src="/icons/magnet.svg"
          alt=""
          width={64}
          height={64}
          className="lg:h-[165px] lg:w-[165px]"
        />
      </div>
      <div className="absolute top-[540px] left-[70px] rotate-[-30deg] lg:top-[620px] lg:left-[350px] lg:rotate-[-45deg]">
        <Image src="/icons/electric.svg" alt="" width={48} height={48} />
      </div>
      <div className="absolute top-[670px] left-[390px] hidden rotate-[0deg] lg:block">
        <Image src="/icons/electric.svg" alt="" width={60} height={60} />
      </div>
      <div className="absolute top-[746px] left-[400px] hidden rotate-[15deg] lg:block">
        <Image src="/icons/electric.svg" alt="" width={60} height={60} />
      </div>
      <div className="absolute top-[450px] left-[50px] lg:top-[556px] lg:left-[514px]">
        <Image
          src="/icons/advertisesContacts.svg"
          alt=""
          width={64}
          height={64}
          className="lg:h-[120px] lg:w-[120px]"
        />
      </div>
      <div className="absolute top-[350px] left-[80px] lg:top-[691px] lg:left-[778px]">
        <Image
          src="/icons/advertisesContacts.svg"
          alt=""
          width={64}
          height={64}
          className="lg:h-[120px] lg:w-[120px]"
        />
      </div>
      <div className="absolute top-[404px] left-[750px] hidden lg:block">
        <Image src="/icons/advertisesSmile.svg" alt="" width={96} height={96} />
      </div>
      <div className="absolute top-[572px] left-[929px]">
        <Image
          src="/icons/advertisesLocation.svg"
          alt=""
          width={72}
          height={72}
        />
      </div>
    </div>
  );
};

export default AdvertisersHeader;
