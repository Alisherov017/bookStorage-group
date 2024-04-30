// ModalAdmin.jsx

import React from "react";
import { Link } from "react-router-dom";
import { deleteBook } from "../../store/actions";
import { useDispatch } from "react-redux";

const ModalAdmin = ({ book, onClose }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = async () => {
    try {
      await dispatch(deleteBook(book.id)); // Отправляем запрос на удаление книги
      onClose(); // Закрываем модальное окно
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

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
            <Link to={`/edit/${book.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDeleteBook}>Delete</button>
            <button id="modal-button" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdmin;
