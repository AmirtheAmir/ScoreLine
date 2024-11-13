import React from "react";

function Explain() {
  return (
    <div className="flex flex-row font-customsoftvintage text-neutral-300">
      <div className="h-full w-1/3 px-3 separator flex items-center justify-center">
        <span className="text-justify">
          In the left container you see a search box, you should enter a {/**/}
          <span className="text-red-600">4 digit number</span> or the word{" "}
          <span className="text-red-600">current</span> to indicate the year
          that the race was ran, the word{" "}
          <span className="text-red-600">R</span> in the middle indicates the
          round that you are looking at. the{" "}
          <span className="text-red-600">name of the race</span> is written on
          the top right.
        </span>
      </div>
      <div className="h-full px-3 w-1/3 separator flex items-center justify-center">
      <span className="text-justify">
          On the Right side you will see the drivers info, but in order to be able to see this information you have to first pick the year and then click on the standing button which is infont of the name of race. then the information will be at your sight that is in accending order.
        </span>
      </div>
      <div className="h-full pr-3 w-1/3 separator flex items-center justify-center">
      <span className="text-justify">
          Enjoy your search.
        </span>
      </div>
    </div>
  );
}

export default Explain;
