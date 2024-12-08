import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./Registration.module.css";
import right from '../assets/right.png';

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  function Submitted () {
    return <span className={`${styles.message__box} ${styles.box__green}`}>
        <img className={styles.message__box__img} src={right} alt="" />
        <p>Form submitted successfully</p>
    </span>
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Mock server request
      setIsSubmitted(true);
      // In real implementation, send data to the server here
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <section className={styles.sub__hero}>
      <div className={styles.sub__hero__wrapper}>
        <div className={styles.sub__hero__textcontent}>
          <img
            className={styles.sub__hero__image}
            src={logo}
            alt="Hero Image"
          />
          <div className={styles.sub__hero__textcontent}>
            <h1 className={styles.sub__hero__title}>
              Welcome to the About Page
            </h1>
            <p>
              Hey everyone! My name is Khan Adnan and <br></br> I am from
              F.Y.MCA batch
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.contact__form}>
          {isSubmitted && <Submitted />}
          <p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className={styles.invalid__input}>{formErrors.name}</p>
            )}
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className={styles.invalid__input}>{formErrors.email}</p>
            )}
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className={styles.invalid__input}>{formErrors.password}</p>
            )}
          </p>

          <button className={styles.btn__submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Registration;
