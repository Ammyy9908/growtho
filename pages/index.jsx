import Navbar from "@/components/navbar";
import ServiceCard from "@/components/serviceCard";
import TestimonialCard from "@/components/testimonialCard";
import { Inter } from "next/font/google";
import { BiChevronRight } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useCallback, useRef } from "react";
import Footer from "@/components/footer";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <main
      className="w-full h-screen bg-[#D9D9D9]"
      style={{
        background: `linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)`,
      }}
    >
      <Navbar />

      <section className="hero_section w-[75%] mx-auto py-32 grid md:grid-cols-2 gap-16">
        <div className="hero-section-content flex flex-col items-start gap-6">
          <h1 className="text-6xl font-semibold">
            A fully integrated digital{" "}
            <span className="text-[#5956E8]">marketing</span> agency
          </h1>
          <p>
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt ius ex. Ut vis mazim erroribus forensibus.
          </p>
          <div className="hero-controls flex items-center gap-6">
            <a
              href="#"
              className="px-3 py-2 text-white bg-[#292930] rounded-md"
            >
              Our Sevices
            </a>
            <a
              href="#"
              className="px-3 py-2 text-black  border-2 border-[#292930] rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="hidden md:flex hero-section-graphic">
          <img src="/banner.svg" alt="" />
        </div>
      </section>

      <section className="service-section bg-[#292930] py-32">
        <div className="container w-[85%] mx-auto">
          <div className="section-header text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <h3 className="text-3xl max-w-[675px]">
              High-impact services to take your business to the next level
            </h3>
            <a
              href="#"
              className="px-4 py-2 bg-white rounded-md text-black flex items-center justify-center gap-2 shadow-2xl"
            >
              <span> Our Services</span>
              <span className="w-4 h-4 bg-blue-600 text-white rounded-full">
                <BiChevronRight />
              </span>
            </a>
          </div>

          <div className="service-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-12">
            <ServiceCard
              title={"Social Media Marketing"}
              Icon={"/mobile.png"}
            />
            <ServiceCard title={"Paid Advertising"} Icon={"/mobile.png"} />
            <ServiceCard title={"Advanced Analytics"} Icon={"/mobile.png"} />
            <ServiceCard title={"SEO Optimization"} Icon={"/mobile.png"} />
            <ServiceCard title={"Funnel Optimization"} Icon={"/mobile.png"} />
            <ServiceCard title={"Condent Marketing"} Icon={"/mobile.png"} />
          </div>
        </div>
      </section>

      <section className="process-section py-32">
        <div className="container w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img src="/mobile.svg" alt="mobile-image" />
          </div>
          <div>
            <h3 className="text-3xl">
              The #1 digital marketing services company
            </h3>
            <p className="text-black/50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry ftyuu Ipsum has been the industry`s standard book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>

            <ul className="flex flex-col items-start gap-12 my-12">
              <li>
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="process-icon w-16 h-16  rounded-full flex items-center justify-center shadow-2xl border-2 border-black">
                    <img src="/tv.png" alt="tv-image" />
                  </div>
                  <div className="process-content">
                    <h3 className="text-xl">Guaranteed Results</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="process-icon w-16 h-16 shadow-2xl rounded-full flex items-center justify-center border-2 border-black">
                    <img src="/group.png" alt="tv-image" />
                  </div>
                  <div className="process-content">
                    <h3 className="text-xl">Guaranteed Results</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="process-container w-[85%] mx-auto py-12">
          <div className="w-full">
            <p className="uppercase text-center">03.Process</p>
            <h2 className="text-3xl font-bold mt-3 text-center">
              A simple, yet powerful and efficient process
            </h2>

            <div className="w-[75%] my-12 mx-auto grid grid-cols-1 gap-12">
              <div className="flex  flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-12">
                <img src="/Dashboard.svg" alt="dashboard" />
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-full shadow-2xl border-8 border-[#FFD1C8] flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-3xl">Marketing Plan</h2>
                    <p>
                      consectetur amet dolor sit comeneer ilremsilom dolce
                      issilm acalrm{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-full shadow-2xl border-8 border-[#FFD1C8] flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h2 className="text-3xl">Work Execution</h2>
                    <p>
                      consectetur amet dolor sit comeneer ilremsilom dolce
                      issilm acalrm{" "}
                    </p>
                  </div>
                </div>
                <img src="/Graphics.svg" alt="dashboard" />
              </div>
              <div className="flex  flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-12">
                <img src="/Graphics2.svg" alt="dashboard" />
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-full shadow-2xl border-8 border-[#FFD1C8] flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h2 className="text-3xl">Growth & Scale</h2>
                    <p>
                      consectetur amet dolor sit comeneer ilremsilom dolce
                      issilm acalrm{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-container w-[85%] mx-auto py-12">
          <div className="testimonial-header flex flex-col gap-12 md:flex-row items-start justify-between">
            <div className="flex items-center gap-12">
              <div className="testimonial-bubble">
                <img src="/bubble.svg" alt="chat-bubble" />
              </div>

              <div className="testimonial-header-content">
                <p className="uppercase text-sm text-black/50">
                  04.Testimonial
                </p>
                <h3 className="text-3xl font-bold">
                  We work with customers across all industries
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                className="prev-arrow w-12 h-12 bg-[#454545] flex items-center justify-center rounded-full text-white"
                onClick={handlePrev}
              >
                <BsChevronLeft />
              </button>
              <button
                className="next-arrow w-12 h-12 bg-[#ffffff] shadow-2xl nav_btn rounded-full flex items-center justify-center"
                onClick={handleNext}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
          <div className="testimonials my-12">
            <Swiper
              className="mySwiper"
              ref={sliderRef}
              spaceBetween={12}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay]}
              slidesPerView={1}
              breakpoints={{
                768: {
                  // width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <TestimonialCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <TestimonialCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <TestimonialCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <TestimonialCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <TestimonialCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <TestimonialCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <TestimonialCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
