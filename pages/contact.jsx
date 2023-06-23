import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { AiFillMail } from "react-icons/ai";

function FormControl({ label, type, value, setValue, placeholder, name, id }) {
  return (
    <div className="form-control flex flex-col items-start gap-6 w-full">
      <label htmlFor="email">
        {label}
        <sup>*</sup>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-5"
      />
    </div>
  );
}

function ContactCard() {
  return (
    <div
      className="contact-card px-6 py-3 rounded-md"
      style={{
        background:
          "linear-gradient(111.05deg, #E9F7FF 9.66%, #FFDBD5 57.52%, #FFF3CA 103.42%)",
      }}
    >
      <div className="contact-card-box bg-white py-12 px-6 shadow-xl rounded-md">
        <div className="contact-card-chip px-4 py-2 bg-yellow-500 max-w-[90px] rounded-full mb-6">
          <p>Contact</p>
        </div>
        <hr />
        <div className="contact-card-footer mt-3 flex items-start gap-6">
          <div className="contact-card-icon">
            <AiFillMail />
          </div>
          <div className="contact-card-heading">
            <h3>Phone</h3>
            <a href="#">nextlevel@marketing.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function contact() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <section className="hero-section flex items-center justify-center relative h-[575px] w-full bg-white relative">
        <h2 className="text-3xl md:text-6xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold z-50">
          Contact <span className="text-[#5956E8]">us</span>
        </h2>
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
      </section>
      <section className="contact-section bg-white py-12 px-6 md:px-32">
        <div className="section-header my-16 flex flex-col items-center gap-6 ">
          <div className="header-icon w-16 h-16 bg-purple-400 flex items-center justify-center px-3 rounded-full">
            <img src="/hand.svg" alt="handshake-icon" />
          </div>
          <p className="text-sm uppercase text-black/50">Contact us</p>
          <h1 className="text-2xl">Let’s build something awesome together</h1>
        </div>

        <div className="contact-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>

        <div
          className="contact-form-box my-16 py-12 px-3 md:px-16"
          style={{
            background:
              "linear-gradient(151.16deg, #FFF8F8 10.38%, #F5F7FF 95.44%)",
          }}
        >
          <div className="contact-form-content grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <FormControl
              id="name"
              name={"name"}
              placeholder={"Full Name"}
              type={"text"}
              label="Full Name"
            />
            <FormControl
              id="email"
              name={"email"}
              placeholder={"Your Email"}
              type={"email"}
              label="Your Email"
            />
            <FormControl
              id="company"
              name={"company"}
              placeholder={"Company"}
              type={"text"}
              label="Company"
            />
            <FormControl
              id="subject"
              name={"subject"}
              placeholder={"Subject"}
              type={"text"}
              label="Subject"
            />
          </div>
          <div className="form-control-bigger w-full mt-12 flex flex-col items-start gap-3">
            <label htmlFor="message">
              Message <sup>*</sup>
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="w-full resize-none py-3 px-5"
              placeholder="Hello there,I would like to talk about how to..."
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center my-12">
            <button className="w-[193px] bg-black h-[61px] mx-auto rounded-md text-white">
              Send Message
            </button>
          </div>
        </div>
      </section>
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}

export default contact;
