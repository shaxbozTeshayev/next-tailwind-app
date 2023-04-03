import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container mx-auto sm:p-5 md:mt-[3.75rem] md:px-[8rem] lg:mt-[6.25rem] lg:px-80 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
