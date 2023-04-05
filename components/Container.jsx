import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container mx-auto mt-10 px-5 md:mt-16 md:px-24 xl:mt-24 xl:px-60 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
