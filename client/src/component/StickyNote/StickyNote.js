import './StickyNote.css';

function StickyNote({ text, style }) {
    return (
        <div id="StickyNote" style={style}>
            <div className='line'>

            </div>
            <p>{text}</p>
        </div>
    );
}

export default StickyNote;
