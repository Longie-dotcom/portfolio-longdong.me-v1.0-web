// Assets
import TEXT from "../../assets/TEXT";
import './Navbar.css';
import MyCat from '../../assets/pictures/mycat-1.png';

// Components
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();

    return (
        <div id="Navbar">
            <div className="navigate">
                <Button action={() => navigate('/contactPage')} name={TEXT.button_contact} />
                <Button action={() => navigate('/')} name={TEXT.button_about} />
            </div>

            <div onClick={() => navigate('/')} className="name">
                {TEXT.my_name}
            </div>

            <div className="navigate">
                <Button action={() => navigate('/experimentPage')} name={TEXT.button_experiment} />
                <Button action={() => navigate('/projectPage')} name={TEXT.button_project} />
            </div>
        </div>
    )
}

export default Navbar;