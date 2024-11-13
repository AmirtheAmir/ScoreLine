import React from "react";
import Newscard from "../../carousel/Carousel";
import Signincard from "../../Signin/Signincard";
import Textareacard from "../../TextArea/Textareacard";

function Homeelement() {
  return (
    <div className="flex flex-col mx-6 h-[93%]">
      <div className="flex h-2/3 flex-row">
        <Textareacard />
        <Signincard />
      </div>
      <div className="flex h-1/3 justify-center items-center">
        <Newscard />
      </div>
    </div>
  );
}

export default Homeelement;
