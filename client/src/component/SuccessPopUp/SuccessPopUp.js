import './SuccessPopUp.css';
import TEXT from '../../assets/TEXT';

function SuccessPopUp({ onClose }) {
    return (
        <div className="success-popup-overlay">
            <div className="success-popup-box">
                <h2>{TEXT.sent_success_title}</h2>
                <p>{TEXT.sent_success_description}</p>
                <button onClick={onClose}>{TEXT.sent_success_close_button}</button>
            </div>
        </div>
    );
}

export default SuccessPopUp;
