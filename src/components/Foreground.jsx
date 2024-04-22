import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Foreground() {
  const dummyData = [
    {
      desc: "Lorem ipsum dolor sit amet.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      fileSize: ".2mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      fileSize: ".26mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      fileSize: ".2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];

  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5"
    >
      {dummyData.map((data, index) => (
        <Card data={data} key={index} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
