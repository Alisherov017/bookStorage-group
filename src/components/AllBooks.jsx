import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import { Link } from "react-router-dom";

const AllBooks = ({ booksData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredBooks = booksData.filter((book) => {
    const { title, author, description } = book;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseQuery) ||
      author.toLowerCase().includes(lowerCaseQuery) ||
      description.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="all">
      <h2>All books</h2>
      <input className="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <div className="container">
        {filteredBooks.map((book, index) => (
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

export default AllBooks;
