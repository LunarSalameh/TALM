import React from "react";

function homeSection() {
  return (
    <div className=" flex flex-col flex-wrap">
      <div className="homeSection-bg rounded-bl-lg   lg:min-h-[90vh] sm:min-h-[60vh] md:min-h-[70vh] min-h-[50vh] w-full flex flex-col justify-center items-center">
        <div className="inline text-shadow-lg shadow-white lg:text-8xl md:text-7xl sm:text-5xl text-4xl text-center text-[#180800] opacity-100 ">
          Welcome to <b className="font-bold">TALM </b>
        </div>
        <div className="text-2xl mt-5 text-[#180800]">
          your ultimate travel companion for exploring Jordan and beyond!
        </div>
        <hr className="border-[#180800] border-2 w-2/4 mt-5"></hr>

        <button className="rounded-full p-4 mt-16 hover:bg-[#180800d2] bg-[#180800] text-white">
          Start Planning your trip
        </button>
      </div>
      {/* <div className="custom-shape-divider-bottom absolute  ">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1100 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

export default homeSection;
