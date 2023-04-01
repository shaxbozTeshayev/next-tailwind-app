import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <section className="contactBgLinear relative mt-[100px] w-full bg-mainColor md:py-[70px] md:px-[222px] lg:py-[150px] lg:px-[560px]">
      <div className="absolute h-auto md:top-[136px] md:left-[21px] md:w-[214px] lg:top-[255px] lg:left-[41px] lg:w-[214px]">
        <img src="/icons/cloud-contact1.svg" className="w-full" alt="Cloud" />
      </div>
      <div className="absolute h-auto md:left-[229px] md:top-[24px] md:w-[66px] lg:left-[430px] lg:top-[46px] lg:w-[124px]">
        <img src="/icons/cloud-contact2.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="absolute h-auto md:top-[54px] md:left-[157px] md:w-[71px] lg:left-[296px] lg:top-[102px] lg:w-[133px]">
        <img src="/icons/wire-contact1.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="absolute md:left-[753px] md:top-[14px] md:w-[71px] lg:top-[26px] lg:left-[1413px] lg:w-[133px]">
        <img src="/icons/wire-contact1.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="absolute md:top-[73px] md:left-[873px] md:w-[121px] lg:top-[137px] lg:left-[1638px] lg:w-[227px]">
        <img src="/icons/cloud-contact3.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="mx-auto flex flex-col md:max-w-[580px] lg:max-w-[802px]">
        <h2 className="font-Montserrat text-center font-medium uppercase text-backgroundColor md:text-[18px] md:leading-[22px] lg:text-[24px] lg:italic lg:leading-[29px]">
          Хотите связаться с нами ?
        </h2>
        <div className="flex justify-between md:mt-[32px] md:gap-[20px] lg:mt-[40px] lg:gap-[30px]">
          <input
            type="text"
            placeholder="Ваше полное имя"
            className="w-2/5 font-medium placeholder:italic placeholder:text-coolGray md:py-[8px] md:pr-[73px] md:pl-[13px] md:text-[12px] md:leading-[19px] lg:py-[18px] lg:pr-[124px] lg:pl-[21px] lg:text-[14px] lg:leading-[22px]"
          />
          <input
            type="text"
            placeholder="Введите свой номер телефона"
            className="w-2/5  font-medium placeholder:italic placeholder:text-coolGray md:py-[7px] md:pr-[20px] md:pl-[12px] md:text-[12px] md:leading-[19px] lg:py-[18px] lg:pr-[28px] lg:pl-[21px] lg:text-[14px] lg:leading-[22px]"
          />
          <button className="mg:py-[8px] w-1/5 rounded-[5px] bg-mainColor text-center italic text-white ring ring-white ring-offset-0 md:text-[12px] md:leading-[19px] lg:py-[18px] lg:text-[14px] lg:leading-[22px] ">
            Отправка
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
