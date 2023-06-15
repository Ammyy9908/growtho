import React from "react";

function Navbar() {
  return (
    <div className="navbar w-[95%] lg:w-[85%] mx-auto flex items-center justify-between py-6">
      <a href="#" className="text-3xl font-bold">
        GrowthO
      </a>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-start gap-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a
              href="#"
              className="contact bg-[#292930] px-3 py-3 text-white rounded-md shadow-xl"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
