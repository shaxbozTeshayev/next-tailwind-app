import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section className="mt-[150px] w-[1293]">
      <h2 className="text-center font-Montserrat font-medium uppercase italic leading-[29px] text-darkColor">
        Почему мы
      </h2>
      <div className="mt-[48px] flex justify-center gap-[15px]">
        <div className="">
          <div className="h-[70px] w-[70px] rounded-full bg-mainColor text-center">
            <span className="inline-block  align-middle font-Montserrat text-[30px] italic leading-[70px] text-[#FFFFFF]">
              01
            </span>
          </div>
        </div>

        <div className="mb-[20px]">
          <Image src="/icons/arrow.svg" alt="arrow" width="203" height="45" />
        </div>
        <div className="h-[70px] w-[70px] rounded-full bg-mainColor text-center align-middle">
          <span className="inline-block  align-middle font-Montserrat text-[30px] italic leading-[70px] text-[#FFFFFF]">
            02
          </span>
        </div>
        <div className="mt-[40px]">
          <Image src="/icons/arrow2.svg" alt="arrow" width="203" height="45" />
        </div>
        <div className="h-[70px] w-[70px] rounded-full bg-mainColor text-center align-middle">
          <span className="inline-block  align-middle font-Montserrat text-[30px] italic leading-[70px] text-[#FFFFFF]">
            03
          </span>
        </div>
        <div className="mb-[20px]">
          <Image src="/icons/arrow.svg" alt="arrow" width="203" height="45" />
        </div>
        <div className="h-[70px] w-[70px] rounded-full bg-mainColor text-center align-middle">
          <span className="inline-block  align-middle font-Montserrat text-[30px] italic leading-[70px] text-[#FFFFFF]">
            04
          </span>
        </div>
        <div className="mt-[40px]">
          <Image src="/icons/arrow2.svg" alt="arrow" width="203" height="45" />
        </div>
        <div className="h-[70px] w-[70px] rounded-full bg-mainColor text-center align-middle">
          <span className="inline-block  align-middle font-Montserrat text-[30px] italic leading-[70px] text-[#FFFFFF]">
            05
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
