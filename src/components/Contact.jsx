import styles from './Contact.module.css';

import canadaImage from '../assets/shared/desktop/illustration-canada.svg';

import ausImage from '../assets/shared/desktop/illustration-australia.svg';

import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg';

import cityBackground from '../assets/home/desktop/bg-pattern-hero-home.svg';

import contactBackground from '../assets/contact/desktop/bg-pattern-hero-desktop.svg';

import errorIcon from '../assets/contact/desktop/icon-error.svg';

import leafBackground from '../assets/shared/desktop/bg-pattern-leaf.svg'

import { useRef, useState } from 'react';

const Contact = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  const changeHandler = (event) => {
    event.preventDefault()
    switch (event.target.name) {
      case 'name':
        if (event.target.value !== '') {
          nameRef.current.style.display = 'none'
        }
        setNameInput(event.target.value);
        break;
      case 'email':
        if (event.target.value !== '') {
          emailRef.current.style.display = 'none'
        }
        setEmailInput(event.target.value);
        break;
      case 'phone':
        if (event.target.value !== '') {
          phoneRef.current.style.display = 'none'
        }
        setPhoneInput(event.target.value);
        break;
      case 'message':
        if (event.target.value !== '') {
          messageRef.current.style.display = 'none'
        }
        setMessageInput(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (nameInput === '') {
      console.log('hmm')
      nameRef.current.style.display = 'flex'
    }
    if (emailInput === '') {
      console.log('hmm')
      emailRef.current.style.display = 'flex'
    }
    if (phoneInput === '') {
      console.log('hmm')
      phoneRef.current.style.display = 'flex'
    }
    if (messageInput === '') {
      console.log('hmm')
      messageRef.current.style.display = 'flex'
    }
    


  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${contactBackground})` }}
        className={styles.contactCard}
      >
                <img className={styles.leaf} src={leafBackground} alt="Leaf" />
        <div className={styles.contactCardInfo}>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className={styles.contactCardForm}>
          <form className={styles.contactForm}>
            <input
              type="text"
              required
              name="name"
              value={nameInput}
              onChange={changeHandler}
              placeholder="Name"
            />
            <input
              type="text"
              required
              name="email"
              value={emailInput}
              onChange={changeHandler}
              placeholder="Email Address"
            />
            <input
              type="text"
              required
              name="phone"
              value={phoneInput}
              onChange={changeHandler}
              placeholder="Phone"
            />
            <textarea
              type="textarea"
              name="message"
              value={messageInput}
              onChange={changeHandler}
              placeholder="Your Message"
            />
            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
          <div className={styles.errorMessages}>
            <div ref={nameRef} className={`${styles.error} ${styles.nameError}`}>Can't be empty <img src={errorIcon} alt="!" /></div>
            <div ref={emailRef} className={`${styles.error} ${styles.emailError}`}>Can't be empty  <img src={errorIcon} alt="!" /></div>
            <div ref={phoneRef} className={`${styles.error} ${styles.phoneError}`}>Can't be empty  <img src={errorIcon} alt="!" /></div>
            <div ref={messageRef} className={`${styles.error} ${styles.messageError}`}>Can't be empty  <img src={errorIcon} alt="!" /></div>
          </div>
        </div>
      </div>

      <div className={styles.contactCities}>
        <div className={styles.contactCity}>
          <div className={styles.contactCityImage}>
            <img src={canadaImage} alt="" />
            <img
              className={styles.canadaBackground}
              src={cityBackground}
              alt=""
            />
          </div>

          <p>Canada</p>
          <button>See Location</button>
        </div>
        <div className={styles.contactCity}>
          <div className={styles.contactCityImage}>
            <img src={ausImage} alt="" />
            <img className={styles.ausBackground} src={cityBackground} alt="" />
          </div>

          <p>Australia</p>
          <button>See Location</button>
        </div>
        <div className={styles.contactCity}>
          <div className={styles.contactCityImage}>
            <img src={ukImage} alt="" />
            <img className={styles.ukBackground} src={cityBackground} alt="" />
          </div>

          <p>United Kingdom</p>
          <button>See Location</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
