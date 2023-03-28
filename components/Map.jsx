import React from "react";
import Image from "next/image";
import Container from "./Container";

const Map = () => {
  return (
    <div className="w-full bg-white md:mt-[20px] lg:mt-[100px]">
      <Container>
        <h2 className="text-center font-Montserrat font-medium uppercase text-darkColor md:pt-[40px] md:text-[18px] md:leading-[22px] lg:pt-[50px] lg:text-[24px] lg:italic lg:leading-[29px]">
          Наши филиалы
        </h2>
        <div className="pb-[70px]">
          <img src="/images/Map.png" className="h-auto w-full" />
        </div>
      </Container>
    </div>
  );
};

export default Map;
