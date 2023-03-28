import React from "react";
import Image from "next/image";

const CardNews = (props) => {
  return (
    <div className="grid gap-[20px] md:grid-cols-2 lg:grid-cols-3">
      {props.newsCardData.map((data) => (
        <div className="max-w overflow-hidden">
          <img
            src={data.newsImg}
            alt="Card Image"
            className="h-auto rounded-t-lg md:w-[374px] lg:w-[372px]"
          />
          <div className="lg:mt-[5px]">
            <span className=" font-Montserrat font-medium uppercase italic text-textSecondary md:text-[12px] md:leading-[19px] lg:text-[16px] lg:leading-[26px]">
              {data.newsTime}
            </span>
            <p className="font-Montserrat font-medium uppercase text-textMain md:mt-[16px] lg:mt-[9px] lg:text-[20px] lg:italic lg:leading-[32px]">
              {data.newsDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNews;
