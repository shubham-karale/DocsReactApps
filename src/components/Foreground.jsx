import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is Description Text You can change it from Foreground.jsx file",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-400",
      },
    },

    {
      desc: "This is Description Text You can change it from Foreground.jsx file",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-amber-500",
      },
    },

    {
      desc: "This is Description Text You can change it from Foreground.jsx file",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-fuchsia-600",
      },
    },

    {
      desc: "This is Description Text You can change it from Foreground.jsx file",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Update Now",
        tagColor: "bg-blue-500",
      },
    },
  ];

  return (
    <div className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-8  ">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
