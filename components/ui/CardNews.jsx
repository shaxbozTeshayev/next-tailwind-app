import React from "react";
import Image from "next/image";

const CardNews = (props) => {
  return (
    <div className="grid gap-[20px] md:grid-cols-2 grid-cols-3">
      {props.newsCardData.map((data) => (
        <div className="max-w overflow-hidden">
          <img
            src={data.newsImg}
            alt="Card Image"
            className="h-auto rounded-t-lg md:w-[374px] w-[372px]"
          />
          <div className="mt-[5px]">
            <span className="  font-medium uppercase italic text-textSecondary md:text-[12px] md:leading-[19px] text-[16px] leading-[26px]">
              {data.newsTime}
            </span>
            <p className=" font-medium uppercase text-textMain md:mt-[16px] mt-[9px] text-[20px] italic leading-[32px]">
              {data.newsDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNews;
