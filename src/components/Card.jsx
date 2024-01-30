import React, { useRef } from "react";

import { FaRegFileAlt } from "react-icons/fa";

import { LuDownload } from "react-icons/lu";

import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";

function Card({ data, ref }) {
  return (
    <motion.div
      drag
      dragConstraints={ref}
      whileDrag={{ scale: 1.3 }}
      className=" relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 px-5 py-10 text-white p-5 overflow-hidden "
    >
      <FaRegFileAlt />

      <p className="text-sm leading-tight mt-5">{data.desc}</p>

      <div className="footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between mb-5 px-8 py-3 ">
          <h5>{data.fileSize}</h5>

          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoClose size="0.7em" color="white" />
            ) : (
              <LuDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div
            className={`tag w-full h-10 ${data.tag.tagColor} flex items-center justify-center `}
          >
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
