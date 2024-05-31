import React from 'react';
import styles from './Uploads.module.css';

function Uploads() {
  return (
    <>
      <section
        className={styles.aboutusSection}
        id="aboutusSection"
      >
        <div
          className={styles.quote}
          id="quote"
        >
          <h2
            id="quoteH2_1"
          >
            Write, share, inspire.
          </h2>
          <h2
            id="quoteH2_2"
          >
            The stage for developer stories.
          </h2>
        </div>
        <div
          className={styles.totalContent}
          id="totalContent"
        >
          <div
            className={styles.leftsideContent}
            id="leftsideContent"
          >
            <div
              className={styles.content}
              id="content"
            >
              <p
                id="contentP"
              >
                Write, share, and inspire on our streamlined blogging platform, where code meets creativity. Elevate your developer stories and fuel tech conversations, all while building your network in the community.esses. That&apos;s why we&apos;ve brought together a team of experts who are passionate about helping our clients succeed online.
              </p>
            </div>
            <div
              className={styles.socialmediaLinks}
              id="socialmediaLinks"
            >
              <div
                className={styles.linkedin}
                id="linkedin"
              >
                <img
                  alt="LinkedIn"
                  id="linkedinImg"
                  src="../images/linkedin.png"
                />
              </div>
              <div
                className={styles.github}
                id="github"
              >
                <img
                  alt="GitHub"
                  id="githubImg"
                  src="../images/github.png"
                />
              </div>
              <div
                className={styles.twitter}
                id="twitter"
              >
                <img
                  alt="Twitter"
                  id="twitterImg"
                  src="../images/logos.png"
                />
              </div>
              <div
                className={styles.insta}
                id="insta"
              >
                <img
                  alt="Instagram"
                  id="instaImg"
                  src="../images/instagram.png"
                />
              </div>
            </div>
          </div>
          <div
            className={styles.rightsideContent}
            id="rightsideContent"
          >
            <img
              alt="About Us"
              id="rightsideContentImg"
              src="../images/Screenshot 2024-04-15 220549.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Uploads;
