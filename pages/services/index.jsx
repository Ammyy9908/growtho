import Navbar from "@/components/navbar";
import ServiceCard from "@/components/serviceCard";
import React from "react";
import services from "@/data/services";
import Footer from "@/components/footer";
function Services() {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <section className="hero-section flex items-center justify-center relative h-[275px] md:h-[575px] w-full bg-white relative">
        <h2 className="text-3xl md:text-6xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold z-50">
          Our <span className="text-[#5956E8]">Services</span>
        </h2>
        <img
          src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
      </section>
      <section className="service-section bg-[#4f4f7f] py-32">
        <div className="container w-[85%] mx-auto">
          <div className="section-header text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <h3 className="text-3xl max-w-[675px]">
              High-impact services to take your business to the next level
            </h3>
          </div>

          <div className="service-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-12">
            {services.map((s) => {
              return (
                <ServiceCard
                  key={s.id}
                  title={s.title}
                  description={s.description}
                  Icon={s.thumb}
                  page={s.index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
