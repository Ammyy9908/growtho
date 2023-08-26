import Link from "next/link";
import React from "react";

function ServiceCard({ title, Icon, description, page }) {
  console.log(Icon);
  return (
    <div className="service-card px-6 pt-6">
      <div className="service-card-inner-content flex flex-col items-start justify-between">
        {/* <div className="service-logo flex items-center justify-center">
          <img src={Icon} alt="icon" className="w-[144px]" />
        </div> */}
        <div className="text-white py-6 flex items-start flex-col">
          <h3 className=" text-xl font-semibold">{title}</h3>
          <p className="text-white/50">{description}</p>
          <Link
            href={page}
            className=" mt-6 w-[170px] flex items-center justify-center gap-3 bg-yellow-400 py-2 rounded-md shadow-2xl text-black font-semibold"
          >
            Read More.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
