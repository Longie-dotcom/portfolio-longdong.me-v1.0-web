// Assets
import './Button.css';

// Components

function Button({ name, action }) {
    return (
        <button onClick={() => action()} id="Button">
            {name}
        </button>
    )
}

export default Button;