import React from "react";
import Image from "next/image";

const CardNews = (props) => {
  return (
    <div className="grid gap-[20px] lg:grid-cols-3">
      {props.newsCardData.map((data) => (
        <div className="max-w overflow-hidden">
          <img
            src={data.newsImg}
            width={372}
            height={220}
            alt="Card Image"
            className="w-full rounded-t-lg"
          />
          <div className="mt-[5px]">
            <span className=" font-Montserrat text-[16px] font-medium uppercase italic leading-[26px] text-textSecondary">
              {data.newsTime}
            </span>
            <p className="mt-[9px] font-Montserrat text-[20px] font-medium uppercase italic leading-[32px] text-textMain">
              {data.newsDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNews;
