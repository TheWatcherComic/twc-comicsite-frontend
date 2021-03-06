import React, { Children } from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import Viewer from "viewerjs";
import ComicData from "../COMICS.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const ViewerC = (props) => {
  var conta = 0;
  let array = ComicData[props.children[0]];
  let newarray = [];
  let chapter = "/" + props.children[1];
  let pages = ComicData[props.children[0]]

    for (let indexTwo = 1; indexTwo <= array.pages[props.children[1]]; indexTwo++) {
      if (indexTwo < 10) {
        newarray.push(array.urlImages + chapter + "/0" + indexTwo + ".jpg");
      } else if (indexTwo >= 10) {
        newarray.push(array.urlImages + chapter + "/" + indexTwo + ".jpg");
      }
  }

  const handleNext = () => {

    if (conta < newarray.length) {
      conta = conta + 1;
    document.getElementById("test").src = newarray[conta];

    }
    if (conta >= newarray.length) {
      document.getElementById("finish-button").classList.remove("hidden")
      document.getElementById("test").classList.add("hidden")
      console.log("END ")
      
    }
    window.scrollTo(0, 0);
  };
  const handleBack = () => {
    if (conta != 0) {
      conta = conta - 1;
    }
    window.scrollTo(0, 0);

    document.getElementById("test").src = newarray[conta];
  };
//
  return (
    <div className="py-6 px-0 sm:p-6 md:py-10 md:px-40 md:h-96">
      <div class="flex flex-col justify-center items-center md:gap-x-5">
        <div className="flex items-center md:shrink-0 ">
          <div
            id="image"
            className="w-full object-cover md:w-fit rounded-lg md:rounded-lg"
          >
            <p id="finish-button" className="dark:text-white font-black justify-center items-center cursor-pointer bg-red-500 p-8 rounded-xl mt-60 hidden" onClick={()=>window.history.go(-1)}>ISSUE FINISHED, GO BACK TO ISSUE LIST</p>
            <img id="test" class="object-contain mb-20" src={newarray[conta]} />
          </div>
        </div>
        <div className="flex flex-col justify-center mx-5">
          <div className="flex">
            <h1 className="mt-5 text-lg font-bold text-slate-900 md:text-sm dark:text-white">
              <button
                class="bg-zinc-50 opacity-25 hover:opacity-100 fixed  bottom-24 md:bottom-10 left-8 md:left-1/4 dark:bg-zinc-50 border-2 dark:border-zinc-700 border-zinc-50 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl dark:hover:bg-zinc-200 hover:drop-shadow-2xl"
                onClick={handleBack}
              >
                <ChevronLeftIcon class="text-black w-10" />
              </button>
              <button
                class="bg-zinc-50 opacity-25 hover:opacity-100 fixed bottom-24 md:bottom-10 right-8 md:right-1/4 dark:bg-zinc-50 border-2 dark:border-zinc-700 border-zinc-50 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl dark:hover:bg-zinc-200 hover:drop-shadow-2xl"
                onClick={handleNext}
              >
                <ChevronRightIcon class="text-black w-10" />
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ViewerC };
