import React from "react";
import Image from "next/image";

const Map = () => {
  return (
    <section className="mt-[100px] w-full bg-white">
      <h2 className="pt-[50px] text-center font-Montserrat font-medium uppercase italic leading-[29px] text-darkColor">
        Наши филиалы
      </h2>
      <div className="flex justify-center pb-[75px]">
        <Image src="/images/Map.png" width={1288} height={833} />
      </div>
    </section>
  );
};

export default Map;
