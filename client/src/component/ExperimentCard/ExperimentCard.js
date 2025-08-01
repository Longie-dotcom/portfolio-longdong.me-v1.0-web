// Assets
import './ExperimentCard.css';
import TEXT from '../../assets/TEXT';

// Components
import Draggable from 'react-draggable';

function ExperimentCard({ action, defaultX, defaultY }) {

    return (
        <Draggable bounds="parent" defaultPosition={{ x: defaultX, y: defaultY }}>
            <div
                className="experiment-card"
            >
                <div className="experiment-content">
                    <div className="experiment-title">{TEXT.experiment_card_title}</div>
                    <div className="experiment-description">
                        {TEXT.experiment_card_description}
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default ExperimentCard;
