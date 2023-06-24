import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import blogs from "@/data/blogs";
import Footer from "@/components/footer";

function Blog() {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      console.log(blogs);
      setBlog(blogs.filter((s) => s.slug == slug)[0]);
    }
  }, [slug]);

  console.log(blog);

  return (
    <div className="h-screen">
      <Navbar />
      <section className="hero-section flex items-center justify-center relative h-[575px] w-full bg-white relative">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 text-center text-white">
          <h2 className="text-white text-3xl md:text-6xl font-semibold z-50">
            {blog ? blog.title : ""}
          </h2>
          <p className="mt-3">{blog ? blog.short_description : ""}</p>
        </div>
        <img
          src={blog ? blog.thumb : ""}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="overlay absolute w-full h-full bg-black/50"></div>
      </section>

      <section className="py-12 px-32">
        {blog &&
          blog.sections.map((section, index) => {
            return (
              <div className="blog-section" key={index}>
                <h1 className="text-3xl">{section.title}</h1>
                <p>{section.description}</p>
                <ul
                  className="
                mt-12"
                >
                  {section.list.map((lst, i) => {
                    return (
                      <li key={"0" + i} className="my-3">
                        <p>{lst}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
