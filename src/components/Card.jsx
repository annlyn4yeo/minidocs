import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 30,
      }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-800 text-white py-10 px-8 overflow-hidden cursor-grab"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center text-black cursor-pointer">
            {data.close ? <IoClose size=".75em" /> : <LuDownload size=".75em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 flex items-center justify-center`}
            style={{ background: "rgb(21 128 61)" }}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
