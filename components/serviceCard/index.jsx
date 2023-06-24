import Link from "next/link";
import React from "react";

function ServiceCard({ title, Icon, description, page }) {
  console.log(Icon);
  return (
    <div className="service-card px-6 pt-6">
      <div className="service-card-inner-content flex flex-col items-start justify-between">
        <div className="service-logo flex items-center justify-center">
          <img src={Icon} alt="icon" className="w-[144px]" />
        </div>
        <div className="text-white py-6 flex items-start flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-white/50">{description}</p>
          <Link
            href={page}
            className="read-more-btn mt-6 w-full flex items-center justify-center gap-3"
          >
            Read More.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
