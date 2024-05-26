import React from "react";
import ReactDOM from "react-dom";

const SimpleModal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="modal" style={{display:'inline-flex'}}>
            <div className="modal-background"></div>
            <p>{title}</p>
            <div className="modal-content">
                    {children}
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={handleCloseClick}></button>
        </div>

    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default SimpleModal
