import React from "react";
import Image from "next/image";
import Container from "./Container";

const Map = ({ title }) => {
  return (
    <div className="w-full bg-white">
      <Container>
        <h2 className="pt-10 text-center text-base font-medium uppercase text-textMain md:text-lg md:font-normal xl:italic">
          {title}
        </h2>
        <div className="p-5">
          <img src="/images/Map.png" className="h-auto w-full" alt="Cloud" />
        </div>
      </Container>
    </div>
  );
};

export default Map;
