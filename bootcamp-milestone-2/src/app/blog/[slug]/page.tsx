import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogs from "@/app/blogData";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <div className={styles.blogPage}>
        <h1 className={styles.blogPageTitle}>{blog.title}</h1>
        <p className={styles.blogPageDate}>{blog.date}</p>
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          width={800}
          height={300}
          className={styles.blogPageImage}
          unoptimized
        />
        <div className={styles.blogPageContent}>
          <p>{blog.description}</p>

          <h2>First Steps</h2>
          <p>
            My prior website design experience had only consisted of template
            design using WordPress to create a website for Santa Clara
            University (refer to my portfolio for more information). However, I
            had no prior experience utilizing HTML, CSS, or Javascript to design
            a website from scratch. The Hack4Impact Starter Pack provided me
            with the fundamental knowledge required for utilizing CSS and HTML
            to design a functional website.
          </p>

          <h2>Learning the Basics</h2>
          <p>
            I started by learning HTML to design the basic framework of the
            website, and then moved on to CSS for styling the website. The most
            challenging part for me was understanding how to make the website
            interactive and aesthetically pleasing for the end user.
          </p>

          <h2>Adding Interactivity</h2>
          <p>
            Once I had the basic structure and styling down, I started to learn
            how to use JavaScript to add interactive elements. Through the
            Hack4Impact bootcamp, I learned about DOM manipulation and how it
            could help my website come to life through a more interactive
            system.
          </p>

          <h2>What I Learned</h2>
          <p>
            Beyond the experience I gained with utilizing tools such as CSS,
            HTML, and Javascript, I also learned some more practical skills I
            could utilize in the future such as being able to design a product
            from scratch with a tool I had no prior experience with. While there
            were times where I found parts of the process tedious, I learned to
            problem solve by doing research and adapting upon the resources I
            was given to build this website.
          </p>
        </div>
      </div>
    </main>
  );
}

