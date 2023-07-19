import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function TestimonialCard({ name, comment, logo }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-content flex w-full flex-col gap-6">
        <div className="company-feedback py-3 bg-white px-6">
          <div className="company-header flex items-start justify-between">
            <div
              className="company-meta flex items-start
             gap-6 flex-col"
            >
              <div className="company-logo w-[100px] h-[100px] bg-gray-300">
                <img
                  src={logo}
                  alt={`${name}_logo`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="company-name text-2xl">{name}</h3>
            </div>
            {/* <div className="company-rating flex items-center gap-2">
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiOutlineStar className=" text-xl" />
            </div> */}
          </div>
          <div className="company-feeaback-message">
            <p className="text-black/50">{comment}</p>
          </div>
        </div>
        {/* <div className="feedback-author flex items-start gap-6">
          <div className="feedback-author-avatar w-12 h-12 bg-black rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="feedback-author-meta">
            <h3>John Carter</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TestimonialCard;
