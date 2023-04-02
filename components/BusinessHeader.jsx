import Image from "next/image";
import React from "react";
import Container from "./Container";

const BusinessHeader = () => {
  return (
    <div className="relative min-h-screen">
      <Container className="">
        <div className="flex gap-[12.5rem] py-[9.375rem]">
          <div>
            <Image width={427} height={698} src="/images/HandPhone.png" />
          </div>
          <div className="w-3/5">
            <h1 className="tracking-[0.03em] text-mainColor lg:text-[3.375rem] lg:leading-[4.125rem]">
              Wi-fi авторизация{" "}
              <span className="inline-block font-bold">для бизнеса</span>
            </h1>
            <p className="mt-[1.375rem] text-lgSecondary tracking-[0.03em] text-[#000000]">
              при подключении к WIFI сети заведения
            </p>
            <button className="shadow-[0_5px_15px_-10px_rgba(116, 104, 255, 0.2)] mt-[4.6rem] inline-block rounded-[5px] bg-mainColor text-center text-white lg:mt-[2.6rem] lg:px-[1.75rem] lg:py-[14px]">
              Оставить заявку
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessHeader;
