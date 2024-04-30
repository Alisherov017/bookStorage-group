import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/books", bookData);
      alert("Книга успешно добавлена!");

      setBookData({
        image: "",
        title: "",
        author: "",
        description: "",
        link: "",
      });
    } catch (error) {
      console.error("Ошибка при добавлении книги:", error);
      alert("Произошла ошибка при добавлении книги!");
    }
    navigate("/admin");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formAdd">
        <h2>Add Product</h2>
        <input
          type="text"
          id="image"
          name="image"
          value={bookData.image}
          onChange={handleChange}
          required
          placeholder="Image URL:"
        />

        <input
          type="text"
          id="title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          required
          placeholder="Title:"
        />

        <input
          type="text"
          id="author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          required
          placeholder="Author:"
        />

        <textarea
          id="description"
          name="description"
          value={bookData.description}
          onChange={handleChange}
          required
          placeholder="Description:"
        />

        <input
          type="text"
          id="link"
          name="link"
          value={bookData.link}
          onChange={handleChange}
          required
          placeholder="Link:"
        />

        <button type="submit" className="addBook">Add Book</button>
      </form>
    </div>
  );
};

export default AddProduct;
