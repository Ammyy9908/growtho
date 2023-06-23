import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

function FAQDropdown() {
  const [drop, setDrop] = useState(false);
  return (
    <div
      className="faq-dropdown py-6 px-6 border rounded-md w-full"
      style={{
        background:
          drop &&
          "linear-gradient(124.11deg, #E9F7FF 5.58%, #FFDBD5 21.8%, #FFF3CA 37.36%)",
      }}
    >
      <div className="faq-dropdown-header flex items-center justify-between">
        <p className="text-2xl">Can I cancel or change my order?</p>
        <button
          className={`w-8 h-8 ${
            drop ? "bg-[#5956E8]" : "bg-black"
          } flex items-center justify-center rounded-full text-white shadow-2xl`}
          onClick={() => {
            setDrop(!drop);
          }}
        >
          <BiChevronRight
            className={`${drop ? "rotate-90" : "rotate-0"} transition-all`}
          />
        </button>
      </div>
      {drop && (
        <div className="faqs my-12">
          <p>
            Lorem Ipsum has been the industry`s standard from dummy text ever
            since the unknown printer to galley of type and make a type specimen
            book.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            explicabo eveniet fugit aliquid animi alias itaque, expedita laborum
            molestias hic quasi deleniti debitis quae architecto doloribus eum
            eius quidem nam.
          </p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  return (
    <div className="py-16 px-3 md:px-32 flex w-full flex-col items-center">
      <div className="mt-12 flex flex-col items-center justify-center gap-6">
        <div className="section-icon">
          <img src="/bubble.svg" alt="chat-bubble" />
        </div>
        <p>FAQ</p>
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="faq-dropdowns w-full flex flex-col items-start gap-6 mt-12">
        <FAQDropdown />
        <FAQDropdown />
        <FAQDropdown />
      </div>
    </div>
  );
}

export default FAQ;
