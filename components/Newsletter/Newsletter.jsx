import React from "react";

function Newsletter() {
  return (
    <div className="bg-black py-12 px-6 md:px-12 relative ">
      <img
        src="/newsletter.svg"
        alt="news-letter-background"
        className="absolute inset-0"
      />
      <div className="newsletter-content w-full  z-50 text-white flex flex-col items-center py-12">
        <h3 className="text-xl md:text-3xl font-bold">
          Subscribe to our <span className="text-[#FFDC60]">newsletter</span>
        </h3>

        <div className="newsletter-form w-[55%] grid items-center gap-6 grid-cols-1 md:grid-cols-3 mx-auto mt-12">
          <input
            type="text"
            placeholder="Enter Your Email."
            className="h-12 px-2 col-span-2 rounded-md"
          />
          <button className="bg-[#FFDC60] rounded-md h-12">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
