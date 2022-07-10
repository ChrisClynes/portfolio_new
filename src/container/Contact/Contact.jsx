import { useState } from 'react';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { FiPhone, FiMail } from 'react-icons/fi'

import './Contact.scss';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    

    const handleInput = (e) => {
        console.log(e)
    }

    const handleSubmit = () => {
        
    }

    const { name, email, message } = contactForm;

    return (    
        <>
            <h2 className="head-text">Get in touch with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <FiMail/>
                    <a href="mailto:chrisclynesdev@gmail.com" className="p-text">chrisclynesdev@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <FiPhone/>
                    <a href="tel: (636) 385-0180" className="p-text">(636) 385-0180</a>
                </div>
            </div>
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={handleInput} 
                    />
                </div>
                <div className="app__flex">
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={handleInput} 
                    />
                </div>
                <div className="app__flex">
                    <textarea 
                        name="message"
                        className="p-text" 
                        placeholder="Send me a message" 
                        value={message} 
                        onChange={handleInput} 
                    />
                </div>
                <button 
                    type="button"
                    className="p-text"
                    onClick={handleSubmit}
                    disabled={isLoading ? true : false} 
                >
                    {isLoading ? "Sending" : "Send"} 
                </button>
            </div>

        </>
    )
}

export default AppWrapper(
    MotionWrap(Contact, "app__footer"), 
    "contact",
    "app__primarybg"
);