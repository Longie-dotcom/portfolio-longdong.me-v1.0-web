import './GalleryPopUp.css';

function GalleryPopUp({ images, onClose }) {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('gallery-popup')) {
            onClose();
        }
    };

    return (
        <div className="gallery-popup" onClick={handleOverlayClick}>
            <div className="gallery-content">
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="gallery-images">
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`Gallery ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GalleryPopUp;
