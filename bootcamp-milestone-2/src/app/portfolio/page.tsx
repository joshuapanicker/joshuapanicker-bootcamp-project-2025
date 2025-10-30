import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <main>
      <div className={styles.heroSection}>
        <h1 className={styles.portfolioTitle}>
          <span className={styles.titleHighlight}>Joshua Panicker&apos;s Portfolio</span>
        </h1>
        <p className={styles.portfolioSubtitle}></p>
      </div>

      <div className={styles.portfolioContainer}>
        <div className={`${styles.projectCard} ${styles.featured}`}>
          <div className={styles.projectImageContainer}>
            <Image
              src="/scuprojectpreview.PNG"
              alt="Virtual Tour Website Preview"
              width={800}
              height={200}
              className={styles.projectImage}
              unoptimized
            />
          </div>
          <h2 className={styles.projectName}>Virtual Tour Host Website</h2>
          <p className={styles.projectDescription}>
            Designed and built a website for Santa Clara University using
            WordPress. This website hosts the university&apos;s virtual tours,
            providing an interactive platform for prospective students to
            explore the campus.
          </p>
          <div className={styles.techStack}>
            <span className={styles.techTag}>WordPress</span>
            <span className={styles.techTag}>Web Design</span>
            <span className={styles.techTag}>Virtual Tours</span>
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://scutours.com/"
              className={`${styles.projectLink} ${styles.primary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <Image
              src="/uberprojectpreview.PNG"
              alt="Uber Hackathon Project Preview"
              width={800}
              height={200}
              className={styles.projectImage}
              unoptimized
            />
          </div>
          <h2 className={styles.projectName}>
            Uber Virtual Global Hackathon Project
          </h2>
          <p className={styles.projectDescription}>
            Product design for Uber which helps maximize accessibility for
            differently abled users. Created innovative solutions to improve
            transportation accessibility through user-centered design.
          </p>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Figma</span>
            <span className={styles.techTag}>Canva</span>
            <span className={styles.techTag}>Product Design</span>
            <span className={styles.techTag}>Accessibility</span>
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://www.youtube.com/watch?v=O6xAWTcFRKA&t=1s"
              className={`${styles.projectLink} ${styles.primary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <Image
              src="/websiteprojectpreview.PNG"
              alt="Personal Website Preview"
              width={800}
              height={200}
              className={styles.projectImage}
              unoptimized
            />
          </div>
          <h2 className={styles.projectName}>Personal Website</h2>
          <p className={styles.projectDescription}>
            Designed and built a personal website using HTML and CSS. Created a
            responsive portfolio showcasing my projects, experience, and skills
            with modern web design principles.
          </p>
          <div className={styles.techStack}>
            <span className={styles.techTag}>HTML</span>
            <span className={styles.techTag}>CSS</span>
            <span className={styles.techTag}>Web Design</span>
          </div>
          <div className={styles.projectLinks}>
            <Link href="/" className={`${styles.projectLink} ${styles.primary}`}>
              View Project
            </Link>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <Image
              src="/githubprojectpreview.PNG"
              alt="Programming Projects Preview"
              width={800}
              height={200}
              className={styles.projectImage}
              unoptimized
            />
          </div>
          <h2 className={styles.projectName}>
            Independent Programming Projects
          </h2>
          <p className={styles.projectDescription}>
            Various independent programming projects demonstrating skills in
            Java, C++, and Python. Includes data structures implementations,
            algorithms, and practical applications.
          </p>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Java</span>
            <span className={styles.techTag}>C++</span>
            <span className={styles.techTag}>Python</span>
            <span className={styles.techTag}>Data Structures</span>
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://github.com/joshuapanicker"
              className={`${styles.projectLink} ${styles.primary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

