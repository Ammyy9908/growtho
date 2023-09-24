import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import blogs from "@/data/blogs";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { NextSeo } from "next-seo";

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
    <main className="w-full">
      <NextSeo
        title="Digital Marketing Insights and Tips - Growtho Blogs"
        description="Dive deep into the world of digital marketing with Growtho Blogs. From the latest trends to actionable insights, our blog posts are crafted to equip you with the knowledge to steer your business to success. Stay ahead in the game with expert advice and tips from the Growtho team, your trusted partner in digital growth."
        openGraph={{
          title: "Digital Marketing Insights and Tips - Growtho Blogs",
          description:
            "Dive deep into the world of digital marketing with Growtho Blogs. From the latest trends to actionable insights, our blog posts are crafted to equip you with the knowledge to steer your business to success. Stay ahead in the game with expert advice and tips from the Growtho team, your trusted partner in digital growth.",
          url: "https://www.growtho.in/blogs",
          images: [
            {
              url: "/brand-logo.jpeg",
              width: 800,
              height: 600,
              alt: "GrwothO Digital Marketing",
            },
          ],
        }}
      />
      <Navbar />
      <section className="hero_section w-[85%] mx-auto pt-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="hero-section-content flex flex-col items-start gap-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
            Blogs
            {/* <span className="text-[#5956E8]">marketing</span> agency */}
          </h1>
          <p>
            Welcome to our Digital Insights Blog! Dive deep into the
            ever-evolving world of digital marketing with us. From the latest
            trends in social media marketing to the nuances of SEO, our expert
            contributors share their firsthand experiences, innovative
            strategies, and invaluable tips to guide your online endeavors.
          </p>
        </div>
        <div className="flex hero-section-graphic">
          <img src="/blog.svg" alt="" />
        </div>
      </section>

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
                      thumb={blog.thumb}
                      title={blog.title}
                      description={
                        blog.short_description.length > 120
                          ? blog.short_description.slice(0, 90) + "..."
                          : blog.description
                      }
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
                      thumb={blog.thumb}
                      title={blog.title}
                      description={
                        blog.short_description.length > 120
                          ? blog.short_description.slice(0, 90) + "..."
                          : blog.description
                      }
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
    </main>
  );
}

export default Blog;
