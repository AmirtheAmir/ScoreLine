import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-[7%] font-custominline justify-between bg-zinc-900  items-center py-4 border-b-2 border-double border-amber-500 drop-shadow-md text-neutral-300 sticky top-0 z-50 mx-6">
      <div className="flex justify-center items-center hover:scale-110 transition-all duration-500">
        <span className="text-3xl tracking-widest">
          Score
          <span className="text-amber-500 font-bold font-customregular">
            Line
          </span>
        </span>
      </div>
      <div className="flex space-x-6">
        <ul className="flex-row flex text-lg tracking-widest leading-none gap-36 ">
          <li className="cursor-pointer hover:text-amber-500 hover:scale-110 transition-all duration-500 flex flex-row items-center space-x-1 fill-neutral-300">
            <Link to="/" className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="w-5 h-5 mr-1 fill-current"
              >
                <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
              </svg>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-500 flex flex-row items-center space-x-1 fill-neutral-300">
            <Link to="/formulaone" className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="w-5 h-5 mr-1 fill-current"
              >
                <path d="m20.772 10.156-1.368-4.105A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.105A2.003 2.003 0 0 0 2 12v5c0 .753.423 1.402 1.039 1.743-.013.066-.039.126-.039.195V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195A1.993 1.993 0 0 0 22 17v-5c0-.829-.508-1.541-1.228-1.844zM4 17v-5h16l.002 5H4zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6z"></path>
                <circle cx="6.5" cy="14.5" r="1.5"></circle>
                <circle cx="17.5" cy="14.5" r="1.5"></circle>
              </svg>
              Formula 1
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <ul className="flex flex-row gap-16">
          <li className="cursor-pointer  hover:scale-125 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-5 h-5 fill-amber-500"
            >
              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
            </svg>
          </li>
          <li className="cursor-pointer hover:scale-125 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-5 h-5  fill-amber-500"
            >
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </li>
          <li className="cursor-pointer hover:scale-125 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-5 h-5  fill-amber-500"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
            </svg>
          </li>
          <li className="cursor-pointer hover:scale-125 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-5 h-5  fill-amber-500"
            >
              <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.424V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833L7.684 18.9v.319H2.036V18.9l1.992-2.417a.971.971 0 0 0 .257-.833V7.269z"></path>
            </svg>
          </li>
        </ul>
      </div>
      <button className="w-32 tracking-wider flex flex-row bg-neutral-300 py-1 rounded-2xl text-zinc-900 text-lg items-center justify-center hover:scale-110  transition-all duration-500 hover:bg-transparent hover:text-neutral-300 border hover:border-neutral-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="w-5 h-5 mr-2 fill-current"
        >
          <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
          <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
        </svg>
        Login
      </button>
    </nav>
  );
}

export default Navbar;
