import React from "react";

export default function Container(props) {
  return (
    <div
      className={`sm:p-5 container mx-auto md:px-[8rem] lg:px-80 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
