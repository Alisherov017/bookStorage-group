import React, { useEffect } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ book, onClose }) => {

  // !  удаление
  const API = "http://localhost:8000/product";
  const dispatch = useDispatch();

const handleDeleteBook = async () => {
  try {
     await dispatch(deleteProduct(book.id)); // Отправляем запрос на удаление книги
    dispatch(getProducts()); // Получаем обновленный список продуктов после удаления
    onClose();
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};


  // !openlink
  const openLink = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
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
