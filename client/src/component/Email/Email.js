// Assets
import "./Email.css";
import TEXT from "../../assets/TEXT";

// Components
import Draggable from "react-draggable";
import Button from "../Button/Button";
import { useState } from "react";

function Email({ action, defaultX, defaultY }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <Draggable
        onMouseDown={action}
            bounds="parent"
            defaultPosition={{ x: defaultX, y: defaultY }}
        >
            <div
                onMouseLeave={() => setIsHover(false)}
                onMouseOver={() => setIsHover(true)}
                id="Email">
                {isHover && (
                    <div className="non-mobile-button">
                        <Button action={action} name={TEXT.button_open_email} />
                    </div>
                )}

                <div className="mobile-button">
                    <Button action={action} name={TEXT.button_open_email} />
                </div>

                <div className="line">
                    <div className="line-left"></div>
                    <div className="line-right"></div>
                </div>
                <div className="text">
                    <div className="from">
                        {TEXT.email_from}&nbsp;{TEXT.my_name}
                    </div>
                    <div className="to">
                        {TEXT.email_to}&nbsp;{TEXT.email_to_friend}
                    </div>
                </div>
            </div>
        </Draggable>
    );
}


export default Email;
