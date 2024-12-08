import styles from './Contact.module.css';
import logo from '../assets/contact-logo-1.png';

function Contact () {
    return (
        <section className={styles.sub__hero}>
            <img className={styles.sub__hero__image} src={logo} alt="Hero Image" />
            <div className={styles.sub__hero__textcontent}>
                <h1 className={styles.sub__hero__title}>Welcome to the Contact Page</h1>
                <p>Call at 8282822828</p>
            </div>
        </section>
    );
}

export default Contact;