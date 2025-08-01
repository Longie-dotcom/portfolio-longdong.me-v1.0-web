import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TEXT from '../../assets/TEXT';
import SuccessPopup from '../../component/SuccessPopUp/SuccessPopUp';
import './ContactPage.css';
import Discord from '../../assets/pictures/discord.png';
import Zalo from '../../assets/pictures/zalo.png';
import GitHub from '../../assets/pictures/github.png';
import LinkedIn from '../../assets/pictures/linkedin.png';

function ContactPage() {
    const formRef = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            TEXT.service_email,
            TEXT.template_email,
            formRef.current,
            TEXT.emailjs_public_key
        ).then(
            () => {
                setShowSuccess(true);
                formRef.current.reset();
            },
            () => alert("Something went wrong. Please try again.")
        );
    };

    return (
        <div className="contact-page">
            <h1>{TEXT.footer_contact_title}</h1>
            <p>{TEXT.footer_thank_message}</p>

            <div className="contact-form-wrapper">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder={TEXT.footer_contact_name_placeholder}
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder={TEXT.footer_contact_email_placeholder}
                        required
                    />
                    <input
                        type="text"
                        name="user_subject"
                        placeholder="Subject"
                    />
                    <textarea
                        name="message"
                        placeholder={TEXT.footer_contact_message_placeholder}
                        rows="6"
                        required
                    ></textarea>
                    <button type="submit">{TEXT.footer_contact_button}</button>
                </form>

                <div className="contact-links">
                    <h3>{TEXT.contact_title}</h3>
                    <div className="social-icons">
                        <a href={TEXT.contact_github} target="_blank" rel="noreferrer">
                            <img src={GitHub} alt="GitHub" />
                        </a>
                        <a href={TEXT.contact_zalo} target="_blank" rel="noreferrer">
                            <img src={Zalo} alt="Zalo" />
                        </a>
                        <a href={TEXT.contact_discord} target="_blank" rel="noreferrer">
                            <img src={Discord} alt="Discord" />
                        </a>
                        <a href={TEXT.contact_linkedin} target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>

            {showSuccess && <SuccessPopup message={TEXT.footer_contact_success} onClose={() => setShowSuccess(false)} />}
        </div>
    );
}

export default ContactPage;
