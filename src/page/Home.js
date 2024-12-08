import styles from './Home.module.css';
import logo from '../assets/logo.png';

function Home () {
    return <section className={styles.hero}>
        <img className={`${styles.hero__image} ${styles.hero__image__1}`} src={logo} alt="Hero Image" />
        <h1 className={styles.hero__title}>Welcome to the Home Page</h1>
        <img className={`${styles.hero__image} ${styles.hero__image__2}`} src={logo} alt="Hero Image" />
    </section>
}

export default Home;