import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About </h2>
        <div className={styles.content}>
            <img className={styles.aboutImage}
            src={getImageUrl("about/aboutImage.png")}
            alt="me sitting with a laptop"
            
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor"></img>
                    <div >
                        <h3>Frontend Developer </h3>
                        <p>I am a frontend developer with experience in building responsive and optimised sites </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server"></img>
                    <div >
                        <h4>Backend Developer </h4>
                        <p>I have experience developing fast and optimised back-end systems and APIs </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"></img>
                    <div >
                        <h3>UI </h3>
                        <p>I have designed multiple landing pages and have created designed system as well </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};

export default About
