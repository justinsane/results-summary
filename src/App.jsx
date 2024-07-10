import React from "react";
import data from "./data";

function App() {
  return (
    <body className="flex h-screen justify-center md:items-center">
      <div className="overflow-hidden rounded-t-none bg-white shadow-lg md:flex md:rounded-3xl">
        <div className="w-auto rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-6 md:w-64 md:rounded-3xl ">
          <p className="text-md pb-5 text-center font-bold text-white/70">
            Your Result
          </p>
          <div className="flex items-center justify-center pb-4">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue">
              <div className="flex  w-full flex-col items-center justify-center">
                <p className="text-4xl font-bold text-white">76</p>
                <p className="mt-[-1px] text-sm text-light-lavender/40">
                  of 100
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="pb-2 pt-4 text-xl font-semibold text-white">
              Great
            </h1>
            <p className="px-4 pb-4 text-center text-light-lavender/80 md:text-xs">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <Summary />
      </div>
    </body>
  );
}

function Summary() {
  return (
    <div className="flex flex-col bg-white px-6 py-4">
      <p className="pb-2 text-lg font-semibold md:pb-0">Summary</p>
      {data.map((item) => (
        <div
          className={`my-2 flex items-center rounded-lg bg-opacity-5 px-3 py-4 md:py-2 bg-${item.color}`}
          key={item.category}
        >
          <img src={item.icon} alt={item.category} className="w-4" />
          <p
            className={`pl-2 text-sm font-semibold md:pr-16 text-${item.color}`}
          >
            {item.category}
          </p>
          <p className="ml-auto text-sm  font-bold">
            {item.score} <span className="text-black/40 "> &nbsp;/ 100</span>
          </p>
        </div>
      ))}
      <a href="https://www.google.com" className="">
        <button className="mt-5 w-full rounded-3xl bg-dark-gray-blue p-3 text-sm font-semibold text-white hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue">
          Continue
        </button>
      </a>
    </div>
  );
}

export default App;
