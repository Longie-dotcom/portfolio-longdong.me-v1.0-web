import './Footer.css';
import TEXT from '../assets/TEXT';
import FooterBG from '../assets/pictures/footer-bg.png';

// Components
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessPopup from '../component/SuccessPopUp/SuccessPopUp';

function Footer() {
    const formRef = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            TEXT.service_email,
            TEXT.template_email,
            formRef.current,
            TEXT.emailjs_public_key
        )
            .then(
                (result) => {
                    console.log(result.text);
                    formRef.current.reset();
                    setShowSuccess(true);
                },
                (error) => {
                    console.log(error.text);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div id="Footer">
            {showSuccess &&  (<SuccessPopup onClose={() => setShowSuccess(false)} />)}
            <img src={FooterBG} alt="Footer Background" className="footer-bg" />

            <div className='form'>
                <div className='thank-section'>
                    <h2>{TEXT.footer_thank_title}</h2>
                    <p>{TEXT.footer_thank_message}</p>
                </div>

                <div className='contact-section'>
                    <h2>{TEXT.footer_contact_title}</h2>
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
                            placeholder={TEXT.footer_contact_subject_placeholder || "Subject"}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder={TEXT.footer_contact_message_placeholder}
                            rows="5"
                            required
                        ></textarea>
                        <button type="submit">{TEXT.footer_contact_button}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
