import React, { useState } from "react";
import Modal from "../modal/ModalAdmin";
import { Link } from "react-router-dom";

const AllBooksAdmin = ({ booksData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="all">
      <div className="h">
        <h2>All books</h2>
        <Link to="/addProduct">
          <button className="add">Add product</button>
        </Link>
      </div>
      <div className="container">
        {booksData &&
          booksData.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.image} alt={book.title} className="card-img" />
              <h3 className="card-title">{book.title}</h3>
              <span className="card-author">{book.author}</span>
              <p className="card-description">{book.description}</p>
              <button className="view" onClick={() => openModal(book)}>
                View
              </button>
            </div>
          ))}
      </div>
      {isModalOpen && <Modal book={selectedBook} onClose={closeModal} />}
    </div>
  );
};

export default AllBooksAdmin;
