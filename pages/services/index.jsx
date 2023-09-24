import Navbar from "@/components/navbar";
import ServiceCard from "@/components/serviceCard";
import React from "react";
import services from "@/data/services";
import Footer from "@/components/footer";
function Services() {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <section className="hero_section w-[85%] mx-auto pt-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="hero-section-content flex flex-col items-start gap-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
            Our Services
            {/* <span className="text-[#5956E8]">marketing</span> agency */}
          </h1>
          <p>
            Discover a suite of digital solutions crafted with precision to meet
            your unique needs. From innovative marketing strategies to
            cutting-edge web design, we empower your brand to shine in the
            digital realm. Embark on a transformative journey with us, where
            your vision meets our expertise. Let`s shape the digital future,
            together.
          </p>
        </div>
        <div className="flex hero-section-graphic">
          <img src="/our-service.svg" alt="" />
        </div>
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
