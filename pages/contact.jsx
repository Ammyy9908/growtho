import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter/Newsletter";
import Popup from "@/components/Popup";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useState } from "react";
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

function ContactCard({ title, description, link }) {
  return (
    <div className="contact-card px-6 py-3 rounded-md">
      <div className="contact-card-box bg-white py-12 px-6 rounded-md">
        <div className="contact-card-chip">
          <p className="text-3xl font-bold">{title}</p>
        </div>
        <hr />
        <p>{description}</p>
        {link && (
          <a
            href={link}
            className="px-3 py-2 bg-yellow-400 flex w-[130px] items-center justify-center rounded-md font-bold mt-3"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sented, setSented] = useState(false);

  const handleContact = async () => {
    console.log(name, email, company, subject, message);

    try {
      const r = await axios.post(`/api/contact`, {
        name,
        email,
        company,
        subject,
        message,
      });
      console.log(r);
      if (r.data["message"]) {
        setSented(true);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setCompany("");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full h-screen">
      <Navbar />
      <section className="hero-section flex items-center justify-center relative h-[575px] w-full bg-white relative">
        <h2 className="text-3xl md:text-6xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold z-20">
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

        <div className="contact-cards grid grid-cols-1  lg:grid-cols-2 gap-8">
          <ContactCard
            title={"Call Us"}
            description="Please Feel Free to Contact Us , We are happy to assist You.Click to call us and Get immediate Solution to your problem."
            link={"tel:7339991461"}
          />
          <ContactCard
            title={"Business Enquirers"}
            description={
              "Call us as we will Clear All your Quires and Respond to all enquirers. We are thankful to you to give as the opportunity."
            }
            link={"tel:7339991461"}
          />
          <ContactCard
            title={"Email"}
            description={
              "Don't Hesitate to mail us, we will respond with in 24 Hours surly.We are glad you are Mailing us."
            }
            link={"mailto:contactgrowtho@gmail.com"}
          />
          <ContactCard
            title={"Whatsapp"}
            description={
              "We are also available on Whatsapp for you ease. We are flexible for our Client Ease but Strict with Work Dead line."
            }
            link={"https://wa.me/917339991461"}
          />
          <ContactCard
            title={"Social Media"}
            description={
              "We are also available on Instagram & other Social Media Handel for you ease.Also Check Out Our Social Media Handel."
            }
            link={"https://www.instagram.com/growtho.in/"}
          />
          <ContactCard
            title={"Opening Hours"}
            description={
              "Business Days - MONDAY TO SATURDAY Business Hours 9 Am To 7 PM."
            }
          />
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
              value={name}
              setValue={setName}
            />
            <FormControl
              id="email"
              name={"email"}
              placeholder={"Your Email"}
              type={"email"}
              label="Your Email"
              value={email}
              setValue={setEmail}
            />
            <FormControl
              id="company"
              name={"company"}
              placeholder={"Company"}
              type={"text"}
              label="Company"
              value={company}
              setValue={setCompany}
            />
            <FormControl
              id="subject"
              name={"subject"}
              placeholder={"Subject"}
              type={"text"}
              label="Subject"
              value={subject}
              setValue={setSubject}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center my-12">
            <button
              className={`w-[193px] ${
                !name || !email || !subject || !company || !message
                  ? "bg-black/50"
                  : "bg-black"
              } h-[61px] mx-auto rounded-md text-white`}
              onClick={handleContact}
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
      {/* <FAQ /> */}
      <Footer />
      {sented && <Popup setSented={setSented} />}
    </div>
  );
}

export default Contact;
