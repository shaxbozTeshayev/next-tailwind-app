import React from "react";
import Image from "next/image";

const CardNews = (props) => {
  return (
    <div className="container mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {props.newsCardData.map((data) => (
        <div className="overflow-hidden">
          <div>
            <Image
              src={data.newsImg}
              width={335}
              height={200}
              alt="Card Image"
              className=""
            />
          </div>
          <div className="mt-1.5">
            <span className="text-xs font-medium uppercase text-textSecondary xl:italic">
              {data.newsTime}
            </span>
            <p className=" mt-4 text-lg font-medium uppercase text-textMain md:text-xl xl:italic">
              {data.newsDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNews;
