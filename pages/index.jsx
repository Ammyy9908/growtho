import Navbar from "@/components/navbar";
import ServiceCard from "@/components/serviceCard";
import TestimonialCard from "@/components/testimonialCard";
import services from "@/data/services";
import { BiChevronRight } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useCallback, useRef } from "react";
import Footer from "@/components/footer";

import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import VideoTestimonial from "@/components/VideoTestimonial";

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
    <main className="w-full h-screen">
      <Navbar />

      <section className="hero_section w-[85%] mx-auto py-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="hero-section-content flex flex-col items-start gap-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
            Get Your Business Visible to Your Audience.
            {/* <span className="text-[#5956E8]">marketing</span> agency */}
          </h1>
          <p>
            Boost your sale by reaching right Audience. Having a Website for
            your Business, is as important as having Aadhar Card. Get your
            business Recognized by your audience.
          </p>
          <div className="hero-controls flex items-center gap-6">
            <Link
              href="/services"
              className="px-3 py-2 text-white bg-[#292930] rounded-md"
            >
              Our Sevices
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-black  border-2 border-[#292930] rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:flex hero-section-graphic">
          <img src="/home-illustration.png" alt="" />
        </div>
      </section>

      <section className="service-section bg-[#292930] py-32">
        <div className="container w-[85%] mx-auto">
          <div className="section-header text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <h3 className="text-3xl w-full text-center">
              High-impact services to take your business to the next level
            </h3>
          </div>

          <div className="service-grid w-full grid grid-cols-1 md:grid-cols-3  gap-16 my-12">
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

      <section className="process-section py-16">
        <div className="container w-[90%] lg:w-[75%] mx-auto  flex flex-col text-center items-center justify-center">
          <div className="w-[230px] h-[230px]">
            <img src="/7@4x.png" alt="growtho-image" />
          </div>
          <div className="mt-6">
            <h3 className="text-md sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
              The #1 digital marketing services company
            </h3>
            <p className="text-black/50 my-2 text-md md:text-xl">
              Boost your sale by reaching right Audience. Having a Website for
              your Business, is as important as having Aadhar Card. Get your
              business Recognized by your audience. Growtho dedicates it’s
              service to clients, helping them to succeed. We scrutinize work as
              an opportunity and lend our hands to incipient. What makes you
              grow over digitally, is the guidance you need from us.
            </p>
          </div>
        </div>
        {/* 
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
        </div> */}
      </section>

      <div className="testimonial-container w-[85%] mx-auto py-12">
        <div className="testimonial-header flex flex-col gap-12 md:flex-row items-start justify-between">
          <div className="flex items-center gap-12">
            <div className="testimonial-bubble">
              <img src="/bubble.svg" alt="chat-bubble" />
            </div>

            <div className="testimonial-header-content">
              <p className="uppercase text-sm text-black/50">Clients</p>
              <h3 className="text-3xl font-bold">What our client says?</h3>
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
              <TestimonialCard
                name="Handuja"
                comment={
                  "I really appreciate your work. Website you made for us is very attractive and nice. Even the logo you designed for us was so good. I liked your service , in future if i needed anyone i will definitely contact you again."
                }
                logo="/handuja-bakers-full-logo-transparent-1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialCard
                name="Loco High"
                comment={
                  "Variety of services are provided here, and they never disappoint us because of their splendid work. Best Work at Cheap Cost, Happy with Reasonable Price ."
                }
                logo="/Coco-High-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialCard
                name="Samridhi Jewellers"
                comment={
                  "I am very happy with their work, very helpful team very Supportive. Always On-Time, all Demands satisfyingly Done. I also got more client for them because of Team's Amazing Work."
                }
                logo="/IMG-20210125-WA0009.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section className="video-testimonials w-[85%] mx-auto py-12">
        <h2 className="text-center text-2xl font-semibold">
          Listen from our Clients
        </h2>

        <div className="video-testimonials-cards w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <VideoTestimonial source="/videos/1.mp4" />
          <VideoTestimonial source="/videos/2.mp4" />
          <VideoTestimonial source="/videos/3.mp4" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
