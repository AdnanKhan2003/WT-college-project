import styles from './About.module.css';
import logo from '../assets/logo.png';

function About () {
    return (
        <section className={styles.sub__hero}>
            <img className={styles.sub__hero__image} src={logo} alt="Hero Image" />
            <div className={styles.sub__hero__textcontent}>
                <h1 className={styles.sub__hero__title}>Welcome to the About Page</h1>
                <p>Hey everyone! My name is Khan Adnan and <br></br> I am from F.Y.MCA batch</p>
            </div>
        </section>
    );
}

export default About;