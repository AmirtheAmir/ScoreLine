import React from "react";
import logorightside from "../../Assests/logorigtside.png";
function Textareacard() {
  return (
    <div className="w-3/4 flex">
      <div className="w-1/2 flex flex-col justify-between text-neutral-300 font-normal">
        <span className="font-customsoft text-base font-extralight border-b border-dashed mt-5 pb-44 text-justify tracking-wider">
          <span className="font-customsoftvintage text-amber-500 tracking-widest text-xl">
            Scoreline
          </span>{" "}
          is your ultimate destination for comprehensive sports data, featuring
          in-depth statistics and updates on F1, college football, MLB, and
          soccer. Whether you're tracking team performance, analyzing player
          stats, or staying informed on the latest trends, Scoreline provides
          everything you need to stay ahead in the world of sports. This site
          offers organized data and vast content oversee through multiple
          groups, varying from formula one, national american hockey league,
          major league baseball to the fresh american football leagues such as
          college football devisions. But in our lates update we have expanded
          to Tennis also for our more interested customers.
        </span>
        <div className="flex flex-row bg-neutral-300 rounded-2xl h-1/5 items-center p-3">
          <div className=" rounded-2xl w-24 flex justify-center items-center transform -rotate-90">
            <span className="font-customtext tracking-wider text-3xl text-neutral-950 font-bold mb-6">
              Author
            </span>
          </div>
          <span className="font-customsoftvintage text-base tracking-widertext-justify text-neutral-950 ">
            Curated by a passionate sports enthusiast, dedicated to delivering
            accurate and insightful data for fans who live and breathe sports.
          </span>
        </div>
      </div>
      {/* right side of the textare */}
      <div className=" w-1/2 flex justify-center items-center">
        <img src={logorightside} className="w-[500px]" />
      </div>
    </div>
  );
}

export default Textareacard;
