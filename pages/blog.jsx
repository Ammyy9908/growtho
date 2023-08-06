import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import blogs from "@/data/blogs";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

function PostCard({ thumb, title, description, link }) {
  return (
    <Link href={link}>
      <div className="post-card shadow-md">
        <div className="post-card-content">
          <div className="post-card-image h-[244px] ">
            <img
              src={thumb}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="post-card-text-content py-3 px-3">
            <div className="post-card-header">
              <h1 className="font-semibold text-xl">{title}</h1>
              <span>September 1, 2022</span>
            </div>
            <h2 className="text-sm text-black/50 mt-3">{description}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleFilterBlogs = (category) => {
    console.log(category);
    console.log(blogs);
    const filtered = blogs.filter((d) => d.tags.includes(category));

    console.log(filtered);
    setFilteredBlogs(filtered);
  };
  return (
    <div className="w-full">
      <Navbar />
      <section className="hero-section flex items-center justify-center  h-[275px] w-full bg-gray-400/20 relative">
        {/* <h2 className="text-3xl md:text-6xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold z-50">
          Our <span className="text-[#5956E8]">Blogs</span>
        </h2> */}
        <img
          src="/blogs.png"
          alt="Blog Graphic"
          className="w-full h-full  absolute inset-0"
        />
      </section>
      {/* <section className="article-section py-32 px-8 md:px-32">
        <div className="article-section-content">
          <div className="article-section-header">
            <div className="article-heading-content flex items-start gap-8">
              <div className="section-icon w-10 h-10 bg-green-300"></div>
              <div className="article-heading-text-content">
                <p className="uppercase text-xs">Articles</p>
                <h3 className="text-2xl max-w-[370px]">
                  Browse our content on growth marketing
                </h3>
              </div>
            </div>
          </div>
          <div className="article-blog py-12 px-10 bg-[#FFF3CA] my-12 shadow-xl">
            <div className="article-blog-content grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="article-blog-text-content w-full">
                <div className="article-blog-header w-full flex items-start justify-between">
                  <span className="tag font-bold">Marketing</span>
                  <span>September 1, 2022</span>
                </div>
                <div className="mt-16">
                  <h2 className="text-3xl">
                    How to increase your Twitter reach by over 200% with this
                    simple trick
                  </h2>
                  <p className="text-black/50 my-6">
                    Tincidunt donec vulputate ipsum erat urna auctor. Eget
                    phasellus ideirs.adipiscing elit. Tincidunt donec vulputate
                    ipsum erat urna auctor.{" "}
                  </p>
                  <a
                    href="#"
                    className="px-3 py-2 bg-white flex w-[130px] items-center shadow-xl rounded-md"
                  >
                    <span>Read More</span>
                    <span>
                      <BiChevronRight />
                    </span>
                  </a>
                </div>
              </div>
              <div className="article-blog-image">
                <img
                  src="https://images.unsplash.com/photo-1687253363362-d2c7add0919e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80"
                  alt="blog-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="post-section py-32 px-8 md:px-32">
        <div className="post_section_container">
          <div className="post_section_header flex flex-col gap-3 md:flex-row items-center justify-between">
            <h1>Latest Posts</h1>
            <div className="post-tags">
              <ul className="w-full flex items-center gap-6">
                <li
                  className={`px-3 py-3 border rounded-md ${
                    activeCategory === "all" && "bg-black text-white"
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      handleFilterBlogs("all");
                    }}
                  >
                    All
                  </button>
                </li>
                <li
                  className={`px-3 py-3 border rounded-md ${
                    activeCategory === "seo" && "bg-black text-white"
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveCategory("seo");
                      handleFilterBlogs("SEO");
                    }}
                  >
                    SEO
                  </button>
                </li>
                <li
                  className={`px-3 py-3 border rounded-md ${
                    activeCategory === "social-media" && "bg-black text-white"
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveCategory("social-media");
                      handleFilterBlogs("Social Media");
                    }}
                  >
                    Social Media
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="post-cards mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {filteredBlogs.length > 0
              ? filteredBlogs.map((blog, index) => {
                  return (
                    <PostCard
                      key={index}
                      thumb={"http://via.placeholder.com/640x360"}
                      title={blog.title}
                      description={blog.short_description}
                      link={`/posts/${blog.published_on.split("-")[0]}/${
                        blog.published_on.split("-")[1]
                      }/${blog.published_on.split("-")[2]}/${blog.slug}`}
                    />
                  );
                })
              : blogs.map((blog, index) => {
                  return (
                    <PostCard
                      key={index}
                      thumb={"http://via.placeholder.com/640x360"}
                      title={blog.title}
                      description={blog.short_description}
                      link={`/posts/${blog.published_on.split("-")[0]}/${
                        blog.published_on.split("-")[1]
                      }/${blog.published_on.split("-")[2]}/${blog.slug}`}
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

export default Blog;
