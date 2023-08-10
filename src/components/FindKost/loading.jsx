import React from "react";

function FindKostLoading() {
  return (
    <>
      <div className="w-full flex flex-wrap gap-1 lg:w-[70%]  justify-center py-12 lg:h-full lg:items-center ">
        <div className="flex items-center flex-wrap h-fit lg:gap-2 w-1/4">
          <h1 className="w-full text-center font-semibold lg:text-xl">
            Loading...
          </h1>
          <div className="w-full ">
            <div className="h-2 w-full rounded flex justify-center mx-auto bg-violet-100 overflow-hidden">
              <div className="h-2 w-3/4 rounded bg-primary animate-slideMobile100 lg:animate-slide100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindKostLoading;
