import React from "react";

function Signincard() {
  return (
    <div className="w-1/4 border-2 rounded-2xl mt-4">
      <form  className="font-custominline  text-neutral-300 w-full flex flex-col  items-center justify-between h-full">
        <div className="rounded-2xl items-center w-3/6 h-1/6 flex justify-center mt-3">
          <h1 className="text-amber-500 text-6xl tracking-wider">Sign UP</h1>
        </div>
        <div className="font-customsoftvintage text-lg flex justify-between flex-col h-4/6 w-11/12 mb-6 text-neutral-300 tracking-wider">
          <div className="flex justify-between">
            <label>Name</label>
            <input className="rounded-2xl bg-transparent border-2 p-2 text-sm mb-2 w-6/12 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></input>
          </div>
          <div className="flex justify-between">
            <label>LastName</label>
            <input className="rounded-2xl bg-transparent border-2 p-2 text-sm mb-2 w-6/12 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></input>
          </div>
          <div className="flex justify-between">
            <label>
              Account name <span className="text-red-700">*</span>
            </label>
            <input className="rounded-2xl bg-transparent border-2 p-2 text-sm mb-2 w-6/12 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></input>
          </div>
          <div className="flex justify-between">
            <label className="rounded-2xl">
              Password <span className="text-red-700">*</span>
            </label>
            <input className="rounded-2xl bg-transparent border-2 p-2 text-sm mb-2 w-6/12 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></input>
          </div>
          <div className="flex justify-between">
            <label>
              Email <span className="text-red-700">*</span>
            </label>
            <input className="rounded-2xl bg-transparent border-2 p-2 text-sm mb-2 w-6/12 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></input>
          </div>
          <div className="flex justify-end items-end w-full">
            <button className="bg-amber-500 text-zinc-900 w-6/12 h-12 rounded-2xl text-lg tracking-widest font-customsoftvintage transition-all duration-500 hover:bg-transparent hover:text-amber-500 border-neutral-950 border-2 hover:border-neutral-300">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signincard;
