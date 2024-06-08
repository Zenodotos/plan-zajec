import React from "react";
import ClassCard from "./ClassCard";

export default function ClassesCards({ todaysClasses }) {
  return (
    <>
      {todaysClasses.map((item, index) => (
        <ClassCard item={item} key={index} />
      ))}
    </>
  );
}
