import Image from "next/image";
import React from "react";
import Container from "./Container";

const BusinessHeader = () => {
  return (
    <div className="relative md:min-h-screen">
      <Container>
        <div className="mt-16 flex flex-col gap-16 md:flex-row">
          <div className=" relative order-last h-72 md:order-1  md:h-96 md:w-2/5">
            <Image
              src="/images/HandPhone.png"
              fill
              objectFit="contain"
              alt="handphone"
            />
          </div>
          <div className="md:order-2 md:w-3/5">
            <h1 className="text-3xl tracking-wide text-mainColor md:text-5xl">
              Wi-fi авторизация{" "}
              <span className="inline-block font-bold">для бизнеса</span>
            </h1>
            <p className="mt-3 text-xs tracking-wide text-[#000000] md:text-sm">
              при подключении к WIFI сети заведения
            </p>
            <button className="mt-16 inline-block rounded bg-mainColor py-2 px-4 text-center text-xs text-white shadow-md hover:opacity-80 md:py-4 md:px-16 md:text-sm">
              Оставить заявку
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessHeader;
