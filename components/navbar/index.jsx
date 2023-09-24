import Link from "next/link";
import React from "react";
import { HiMenu } from "react-icons/hi";
function Navbar() {
  return (
    <div className="navbar w-[95%] lg:w-[90%] mx-auto flex items-center justify-between py-3 z-5">
      <Link href="/" className="text-xl md:text-3xl font-bold">
        <img src="/brand-logo.jpeg" alt="GrowthO" className="w-[210px]" />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex items-center justify-start gap-12">
          <li>
            <Link href="/" className="text-lg font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-lg font-bold">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg font-bold">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-lg font-bold">
              Blogs
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="contact bg-[#292930] px-3 py-3 text-white rounded-md shadow-xl hover:scale-90"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="lg:hidden menu-btn w-8 h-8 flex items-center justify-center relative group"
        tabIndex={1}
      >
        <HiMenu />
        <div
          className="mobile-nav min-w-[170px] bg-white px-3 py-6 bg-whiite shadow-md absolute z-50 right-6 top-5 rounded-md scale-0 group-hover:scale-100 transition-all"
          style={{
            transformOrigin: "top right",
          }}
        >
          <ul className="w-full flex flex-col items-center gap-2">
            <li>
              <Link href="/" className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-bold">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-bold">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="font-bold">
                Blogs
              </Link>
            </li>

            <li>
              <Link href="/contact" className="font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
