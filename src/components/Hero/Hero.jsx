import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        {/* contains text on left hand side of the page  */}
        <h1 className={styles.title}>Hi ,I am Yutika </h1>
        <p className={styles.description}>I am currently studying MCA at Goa University , applying the technical skills to plan and build useful softwares !</p>
        <a href='mailto:yutikachari111@email.com' className={styles.contactBtn}>Contact me</a>
    </div>
    <img src={getImageUrl("hero/hero2.jpg")} alt="hero image of me " className={styles.heroImg}></img>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   </section>
  )
}

export default Hero
