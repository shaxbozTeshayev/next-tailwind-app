import Image from "next/image";
import React from "react";

const ContactsMain = () => {
  return (
    <section className="contactBgLinear relative w-full bg-mainColor">
      {/* <div className="absolute h-auto md:top-[136px] md:left-[21px] md:w-[214px] top-[255px] left-[41px] w-[214px]">
        <img src="/icons/cloud-contact1.svg" className="w-full" alt="Cloud" />
      </div>
      <div className="absolute h-auto md:left-[229px] md:top-[24px] md:w-[66px] left-[430px] top-[46px] w-[124px]">
        <img src="/icons/cloud-contact2.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="absolute h-auto md:top-[54px] md:left-[157px] md:w-[71px] left-[296px] top-[102px] w-[133px]">
        <img src="/icons/wire-contact1.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="absolute md:left-[753px] md:top-[14px] md:w-[71px] top-[26px] left-[1413px] w-[133px]"> 
        <img src="/icons/wire-contact1.svg" alt="Cloud" className="w-full" />
      </div>
      <div className="absolute md:top-[73px] md:left-[873px] md:w-[121px] top-[137px] left-[1638px] w-[227px]">
        <img src="/icons/cloud-contact3.svg" alt="Cloud" className="w-full" />
      </div>
      */}
      <div className="mx-auto flex flex-col justify-center p-12 md:px-56 md:py-20">
        <h2 className="text-center text-sm font-medium  uppercase text-backgroundColor md:text-lg md:italic">
          Хотите связаться с нами ?
        </h2>
        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-center">
          <input
            type="text"
            placeholder="Ваше полное имя"
            className="w-2/5 rounded-md border border-solid border-[#174880] p-5 text-base font-medium placeholder:text-coolGray md:placeholder:italic"
          />
          <input
            type="text"
            placeholder="Введите свой номер телефона"
            className="w-3/5 rounded-md border border-solid border-[#174880] p-5 text-base font-medium placeholder:text-coolGray md:placeholder:italic"
          />
          <button
            type="button"
            className="cursor-pointer rounded-md bg-mainColor p-5 text-center text-base text-white shadow-md ring ring-white ring-offset-0 md:italic"
          >
            Отправка
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactsMain;
