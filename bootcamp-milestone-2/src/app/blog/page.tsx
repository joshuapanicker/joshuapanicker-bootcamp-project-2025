import React from "react";
import BlogPreview from "@/components/BlogPreview";
import blogs from "@/app/blogData";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main>
      <h1 className={styles.blogTitle}>Joshua Panicker&apos;s blog</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}

