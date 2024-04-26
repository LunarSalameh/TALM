import React from "react";

function OfferSection() {
  return (
    <div className=" flex flex-col flex-wrap mt-10 mb-10">
      <div className=" w-full flex flex-col justify-center items-center">
        <div className="text-4xl uppercase font-bold  mt-2 mb-2 text-[#180800]">
          Our Services{" "}
        </div>
        <hr className="border-[#180800] border-2 w-1/5 mb-8"></hr>

        <div className="flex flex-row flex-wrap gap-14 mb-5">
          <div className="hover:bg-[#b0988147] flex flex-col justify-start text-[#180800] shadow-md hover:shadow-lg p-5  shadow-[#180800b1] w-[40vh] h-[54vh] rounded-lg  bg-gray-50 ">
            <img
              src="./img/iternary.gif"
              alt="travel iternary"
              className="h-36 object-contain"
            />
            <div className="font-semibold my-3">Travel Iternary</div>
            <p className="ml-2">
              Tailor your journey to your preferences with our customizable
              itineraries, designed to suit every traveler's unique interests
              and schedule.
            </p>
          </div>
          <div className="hover:bg-[#b0988147] text-[#180800] flex flex-col justify-start shadow-md hover:shadow-lg p-5 shadow-[#180800b1] w-[40vh] h-[54vh] rounded-lg  bg-gray-50 ">
            <img
              src="./img/booking.gif"
              alt="travel iternary"
              className="h-36 object-contain"
            />
            <div className="font-semibold my-3">Hassle-Free Booking</div>
            <p className="ml-2">
              Plan your trip with ease using our convenient booking platform,
              offering a seamless experience for flights, accommodations, tours,
              and activities.
            </p>
          </div>
          <div className="hover:bg-[#b0988147] ] text-[#180800] flex flex-col justify-start shadow-md hover:shadow-lg p-5 shadow-[#180800b1] w-[40vh] h-[54vh] rounded-lg bg-gray-50 ">
            <img
              src="./img/travel-guide.gif"
              alt="travel iternary"
              className="h-36 object-contain"
            />
            <div className="font-semibold my-3">
              Comprehensive Travel Guides
            </div>
            <p className="ml-2 ">
              Dive deep into the heart of Jordan with our detailed travel
              guides, packed with insider tips, must-see attractions, and hidden
              gems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
