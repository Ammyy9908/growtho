import React from "react";

function ServiceCard({ title, Icon }) {
  console.log(Icon);
  return (
    <div className="service-card">
      <div className="service-card-inner-content flex flex-col items-start gap-6">
        <div className="service-logo w-[153px] h-[153px] bg-[#292930] rounded-full flex items-center justify-center">
          <img src={Icon} alt="icon" />
        </div>
        <div className="text-white py-6 flex items-start flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-white/50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            tenetur nobis vero rerum ratione consectetur magni harum fugit
            ducimus labore qui, dolores, facere eaque quia doloribus, cupiditate
            debitis facilis repudiandae.
          </p>
          <a
            href="#"
            className="read-more-btn mt-6 w-full flex items-center justify-center gap-3"
          >
            Read More.
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
