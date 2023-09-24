import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12 px-3 sm:px-16 lg:px-32 bg-[#292930] relative">
      <div className="footer text-white grid lg:grid-cols-2 gap-64">
        <div className="footer-content lg:col-span-2">
          <div className="footer-address-bar grid grid-cols-1 md:grid-cols-3 gap-12 ">
            <div className="address-box-1 flex flex-col items-start gap-3">
              <div className="address-header flex items-center gap-2">
                <span>
                  <img src="/phone.svg" alt="phone-icon" />
                </span>
                <span>Get in touch with</span>
              </div>
              <a
                href="tel:+917339991461"
                className="px-2 py-3 bg-[#3C3C45] rounded-md"
              >
                +91 73399 91461
              </a>
              <a href="mailto:contactgrowtho@gmail.com">
                <p>contactgrowtho@gmail.com</p>
              </a>
              <ul className="flex items-center justify-start gap-4">
                <li>
                  <a href="#" className="text-2xl">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl">
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div className="address-box-2">
              <div className="address-header flex items-center gap-3">
                <span>
                  <img src="/location.svg" alt="pin-icon" />
                </span>
                <span>Locations</span>
              </div>
              <p className="mt-3">Mathura, Uttar Pradesh</p>
              <p className="mt-3">Pune, Maharastra</p>
              <p className="mt-3">Mehsana, Gujarat</p>
            </div>

            <div className="site-pages">
              <div className="feature-title">
                <h3 className="font-bold text-xl">Links</h3>
              </div>
              <div className="feature-links">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/about">about</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr className="my-6" /> */}
          <div className="footer-features grid grid-cols-3 gap-3 my-12"></div>
          <div className="footer-copyright text-center">
            <p>
              Copyright © 2023 Growtho - Powered by{" "}
              <span className="font-bold text-yellow-500">Growtho</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
