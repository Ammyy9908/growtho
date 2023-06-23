import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar w-[95%] lg:w-[85%] mx-auto flex items-center justify-between py-6">
      <Link href="/" className="text-3xl font-bold">
        GrowthO
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-start gap-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="contact bg-[#292930] px-3 py-3 text-white rounded-md shadow-xl"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
