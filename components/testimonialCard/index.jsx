import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-content flex w-full flex-col gap-6">
        <div className="company-feedback py-6 bg-white px-6">
          <div className="company-header flex items-start justify-between">
            <div className="company-meta">
              <div className="company-logo"></div>
              <h3 className="company-name text-2xl">Company</h3>
            </div>
            <div className="company-rating flex items-center gap-2">
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiFillStar className="text-yellow-500 text-xl" />
              <AiOutlineStar className=" text-xl" />
            </div>
          </div>
          <div className="company-feeaback-message">
            <p>
              Lorem Ipsum has been the industry`s standard from dummy text ever
              since the unknown printer to galley of type and make a type
              specimen book.{" "}
            </p>
          </div>
        </div>
        <div className="feedback-author flex items-start gap-6">
          <div className="feedback-author-avatar w-12 h-12 bg-black rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="feedback-author-meta">
            <h3>John Carter</h3>
            <p className="text-black/50 text-sm">Marketing Lead at Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
