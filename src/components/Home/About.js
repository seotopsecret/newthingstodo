import React from 'react'
import Title from '../Title'
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
    return (
<section className={styles.about}>
<Title title="about" subtitle="us"/>
 <div className={styles.aboutCenter}>
     <article className={styles.aboutImg}>
         <div className={styles.imgContainer}>
             <img src={img} alt="about things to do"/>
         </div>
     </article>
        <article className={styles.aboutInfo}>
            <h4>What do you want to do today?</h4>
            <p>The ThingsToDo Co. connects you instantly with more than 350,000 things to do around the world. 
                Our purpose is to encourge you to experience the world by adding things to do 
                to your bucket list by country, city and suburb.  
                </p>
                <p>Search, book and experience the world with the lowest price guarantee backed up by Viator, A TripAdvisor company  
                </p>
                <button type="button" className="btn-primary">
                    read more
                </button>
        </article>
    
        </div>
        </section>
    )
}

export default About
