import React from "react";
import Card from "./Card";

function Foreground() {
  const dummyData = [
    {
      desc: "Lorem ipsum dolor sit amet.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "sky" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      fileSize: ".2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5">
      {dummyData.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </div>
  );
}

export default Foreground;
