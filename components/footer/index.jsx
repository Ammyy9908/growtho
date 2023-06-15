import React from "react";

function Footer() {
  return (
    <footer className="py-12 px-3 sm:px-16 lg:px-32 bg-[#292930]">
      <div className="footer text-white grid lg:grid-cols-3 gap-12">
        <div className="subscribe-box lg:col-span-1 bg-[#3C3C45] px-6 py-8 rounded-md">
          <div className="subscribe-box-content">
            <div className="company-logo">
              <a href="#" className="text-2xl font-bold text-center">
                GrowthO
              </a>
            </div>
            <div className="subscribe-content-box flex flex-col items-start justify-center gap-6">
              <div>
                <img src="megaphone.svg" alt="subscribe-icon" />
              </div>
              <h3 className="text-2xl">Subscribe now</h3>
              <p>Industry`s standard from dummy and make a type book. </p>
              <input
                type="text"
                className="px-2 py-2 w-full bg-black/50"
                placeholder="Enter Your Email..."
              />
              <button
                type="submit"
                className="w-full px-2 py-3 bg-yellow-400 text-black"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer-content lg:col-span-2">
          <div className="footer-address-bar grid grid-cols-2 gap-12">
            <div className="address-box-1 flex flex-col items-start gap-3">
              <div className="address-header flex items-center gap-2">
                <span>
                  <img src="/phone.svg" alt="phone-icon" />
                </span>
                <span>Get in touch with</span>
              </div>
              <a href="#" className="px-2 py-3 bg-[#3C3C45] rounded-md">
                +1 917 000 1212
              </a>
              <p> nextlevel@marketing.com</p>
            </div>
            <div className="address-box-2">
              <div className="address-header flex items-center gap-3">
                <span>
                  <img src="/location.svg" alt="pin-icon" />
                </span>
                <span>Location</span>
              </div>
              <p>10 Suna House 65 Rivington Street London EC2A 3QQ</p>
              <p> location</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="footer-features grid grid-cols-3 gap-3 my-12">
            <div className="site-pages">
              <div className="feature-title">
                <h3>Pages</h3>
              </div>
              <div className="feature-links">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="site-pages">
              <div className="feature-title">
                <h3>Utility Pages</h3>
              </div>
              <div className="feature-links">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="site-pages">
              <div className="feature-title">
                <h3>Follows</h3>
              </div>
              <div className="feature-links">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              Copyright © Nextlevel | Designed by VictorFlow - Powered by
              Webflow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
