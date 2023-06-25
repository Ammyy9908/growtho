import React from "react";
import { MdClear } from "react-icons/md";
function Popup({ setSented }) {
  return (
    <div className="w-full h-screen fixed bg-black/50  inset-0 flex items-center justify-center z-50 ">
      <div className="popup-body relative bg-white py-12 px-4 md:px-16 flex flex-col items-center rounded-md">
        <div className="popup-top">
          <div>
            <img src="/MailIcon.svg" alt="mail-icon" />
          </div>
        </div>
        <div className="popup-bottom">
          <button
            className="absolute right-10 top-4 w-8 h-8 shadow-md flex items-center justify-center rounded-full bg-[#8277FF] text-white"
            onClick={() => {
              setSented(false);
            }}
          >
            <MdClear />
          </button>
          <div className="popup-content">
            <div>
              <h1 className="text-2xl text-center">
                Thanks for Contacting us.
              </h1>
              <p className="text-sm  text-black/50">
                We will try to connect you please stay toon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
