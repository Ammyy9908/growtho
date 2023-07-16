import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import blogs from "@/data/blogs";
import Footer from "@/components/footer";
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
  const [blog, setBlog] = useState(null);

  const [related_posts, setRelatedPosts] = useState([]);
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      console.log(blogs);
      setBlog(blogs.filter((s) => s.slug == slug)[0]);
      setRelatedPosts(blogs.filter((s) => s.slug != slug));
    }
  }, [slug]);

  console.log(blog);
  console.log(related_posts);

  return (
    <div className="h-screen">
      <Navbar />
      <section className="hero-section flex items-center justify-center relative h-[475px] md:h-[575px] w-full bg-gray-400/20 relative">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 text-center text-white w-full md:w-[75%]">
          <h2 className="text-white text-xl sm:text-3xl md:text-6xl font-semibold z-50">
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

      <section className="py-12 px-6 md:px-12 lg:px-32">
        {blog && blog.JSX}

        <div className="mt-12">
          <h3 className="text-4xl font-bold">Related Posts</h3>

          <div className="related_posts post-cards mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {related_posts.length > 0 &&
              related_posts.map((p, pIndex) => {
                return (
                  <PostCard
                    key={pIndex}
                    thumb={p.thumb}
                    link={`/posts/${p.published_on.split("-")[0]}/${
                      p.published_on.split("-")[1]
                    }/${p.published_on.split("-")[2]}/${p.slug}`}
                    title={p.title}
                    description={p.short_description}
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
