import React, { useState } from "react";
import Modal from "./modal/Modal";

const AllBooks = ({ booksData }) => {

  // ! FOR MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Функция для открытия модального окна и установки выбранной книги
  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="all">
      <h2>All books</h2>
      <div className="container">
        {/* from DB.JSON */}
        {booksData.map((book, index) => (
          <div className="card" key={index} onClick={() => openModal(book)}>
            <img src={book.image} alt={book.title} className="card-img" />
            <h3 className="card-title">{book.title}</h3>
            <span className="card-author">{book.author}</span>
            <p className="card-description">{book.description}</p>
          </div>
        ))}
      </div>
      {isModalOpen && <Modal book={selectedBook} onClose={closeModal} />}
    </div>
  );
};

export default AllBooks;
