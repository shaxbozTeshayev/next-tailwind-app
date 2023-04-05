import Image from "next/image";
import React from "react";
import Container from "./Container";

const AdvertisersHeader = () => {
  return (
    <div className="relative min-h-screen">
      <Container>
        <div className="flex gap-[3.75rem] py-[9.375rem]">
          <div className="w-2/3">
            <h1 className="tracking-wide text-mainColor text-[3.375rem] leading-[4.125rem]">
              <span className="inline-block font-bold">Ваша реклама</span> на
              экранах
              <span className="inline-block font-bold">смартфонов</span>{" "}
              клиентов
            </h1>
            <p className="mt-[1.375rem] text-lgSecondary tracking-wide text-[#000000]">
              при подключении к WIFI сети заведения
            </p>
            <button className="shadow-[0_5px_15px_-10px_rgba(116, 104, 255, 0.2)] mt-[4.6rem] inline-block rounded-[5px] bg-mainColor text-center text-white mt-[2.6rem] px-[1.75rem] py-[14px]">
              Оставить заявку
            </button>
          </div>
          <div>
            <Image width={427} height={698} src="/images/HandPhone.png" />
          </div>
        </div>
      </Container>
      <div className="absolute top-[676px] left-[190px]">
        <Image src="/icons/magnet.svg" alt="" width={165} height={165} />
      </div>
      <div className="absolute rotate-[-45deg] top-[620px] left-[350px]">
        <Image src="/icons/electric.svg" alt="" width={60} height={60} />
      </div>
      <div className="absolute rotate-[0deg] top-[670px] left-[390px]">
        <Image src="/icons/electric.svg" alt="" width={60} height={60} />
      </div>
      <div className="absolute rotate-[15deg] top-[746px] left-[400px]">
        <Image src="/icons/electric.svg" alt="" width={60} height={60} />
      </div>
      <div className="absolute top-[556px] left-[514px]">
        <Image
          src="/icons/advertisesContact.svg"
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="absolute top-[691px] left-[778px]">
        <Image
          src="/icons/advertisesContacts.svg"
          alt=""
          width={96}
          height={96}
        />
      </div>
      <div className="absolute top-[404px] left-[750px]">
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
