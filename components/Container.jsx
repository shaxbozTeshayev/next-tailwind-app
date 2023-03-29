import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container mx-auto md:px-[128px] lg:px-[315px] ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
