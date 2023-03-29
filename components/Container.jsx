import React from "react";

export default function Container(props) {
  return (
    <div
      className={`sm:p-5 lg:px-80 container mx-auto md:px-32 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
