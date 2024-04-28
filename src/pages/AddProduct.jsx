import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";

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
      // Отправка данных книги на сервер
      await axios.post("http://localhost:8000/product", bookData);
      alert("Книга успешно добавлена!");

      // Очистка формы после добавления
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
     navigate("/home");
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={bookData.image}
          onChange={handleChange}
          required
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={bookData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="link">Link:</label>
        <input
          type="text"
          id="link"
          name="link"
          value={bookData.link}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddProduct;
