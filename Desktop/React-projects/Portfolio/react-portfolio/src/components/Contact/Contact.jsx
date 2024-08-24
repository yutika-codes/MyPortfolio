import React from 'react'
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}><h2>Contact</h2>
        <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='email Icon'/>
                <a href='mailto:myemail@gmail.com'>myemail@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedin Icon'/>
                <a href='https://www.linkedin.com/myname'>linkedin.com/myname</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='github Icon'/>
                <a href='https://www.github.com/myname'>github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
