import React from "react";
import Marquee from "react-fast-marquee";

function Newscard() {
  const traits = [
    "Fiable ",
    "Powerful",
    "Unified",
    "Detailed",
    "Quick",
    "Accurate",
    "Trusted",
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
    <Marquee gradient={false} speed={40} pauseOnHover={false}>
      {traits.map((trait, index) => (
        <div
          key={index}
          className="w-44 h-44 flex justify-center items-center bg-amber-500 rounded-full text-stone-900 font-customvintage text-2xl text-center mx-16"
        >
          {trait}
        </div>
      ))}
    </Marquee>
  </div>
  );
}

export default Newscard;
