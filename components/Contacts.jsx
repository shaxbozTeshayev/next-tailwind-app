import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <section className="relative w-full bg-mainColor py-[150px] px-[560px]">
      <div className="absolute top-[255px] left-[41px]">
        <Image
          src="/icons/cloud-contact1.svg"
          alt="Cloud"
          width={214}
          height={77}
        />
      </div>
      <div className="absolute top-[46px] left-[430px]">
        <Image
          src="/icons/cloud-contact2.svg"
          alt="Cloud"
          width={124}
          height={92}
        />
      </div>
      <div className="absolute top-[102px] left-[296px]">
        <Image
          src="/icons/wire-contact1.svg"
          alt="Cloud"
          width={133}
          height={175}
        />
      </div>
      <div className="absolute top-[26px] left-[1413px]">
        <Image
          src="/icons/wire-contact1.svg"
          alt="Cloud"
          width={133}
          height={175}
        />
      </div>
      <div className="absolute top-[137px] left-[1638px]">
        <Image
          src="/icons/cloud-contact3.svg"
          alt="Cloud"
          width={227}
          height={94}
        />
      </div>
      <div className="mx-auto flex max-w-[802px] flex-col">
        <h2 className="text-center font-Montserrat text-[24px] font-medium uppercase italic leading-[29px] text-backgroundColor">
          Хотите связаться с нами ?
        </h2>
        <div className="mt-[40px] flex justify-between gap-[30px]">
          <input
            type="text"
            placeholder="Ваше полное имя"
            className="w-2/5 py-[18px] pl-[21px] pr-[124px] text-[14px] font-medium leading-[22px] placeholder:italic placeholder:text-coolGray"
          />
          <input
            type="text"
            placeholder="Введите свой номер телефона"
            className="w-2/5 py-[18px] pl-[21px] pr-[28px] text-[14px] font-medium leading-[22px] placeholder:italic placeholder:text-coolGray"
          />
          <button className="w-1/5 rounded-[5px] bg-mainColor py-[18px] text-center italic text-white ring ring-white ring-offset-0 ">
            Отправка
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
