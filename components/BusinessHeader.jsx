import Image from "next/image";
import React from "react";
import Container from "./Container";

const BusinessHeader = () => {
  return (
    <div className="relative min-h-screen">
      <Container>
        <div className="flex gap-[12.5rem] py-[9.375rem]">
          <div>
            <Image width={427} height={698} src="/images/HandPhone.png" />
          </div>
          <div className="w-3/5">
            <h1 className="tracking-wide text-mainColor text-[3.375rem] leading-[4.125rem]">
              Wi-fi авторизация{" "}
              <span className="inline-block font-bold">для бизнеса</span>
            </h1>
            <p className="mt-[1.375rem] text-lgSecondary tracking-wide text-[#000000]">
              при подключении к WIFI сети заведения
            </p>
            <button className="shadow-[0_5px_15px_-10px_rgba(116, 104, 255, 0.2)] mt-[4.6rem] inline-block rounded-[5px] bg-mainColor text-center text-white mt-[2.6rem] px-[1.75rem] py-[14px]">
              Оставить заявку
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessHeader;
