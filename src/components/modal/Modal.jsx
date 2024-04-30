import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ book, onClose }) => {
  // !openlink
  const openLink = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-container">
        <div className="modal-body">
          <div className="image-container">
            <img className="detail-image" src={book.image} alt={book.title} />
          </div>
          <div className="content-container">
            <h2 className="detail-title">{book.title}</h2>
            <p className="detail-author">Автор: {book.author}</p>
            <p className="detail-description">{book.description}</p>
            <div className="detail-stars"></div>
            <button>
              <span
                className="button-content"
                onClick={() => openLink(book.link)}
              >
                read
              </span>
            </button>
            <button className="modal-button" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
