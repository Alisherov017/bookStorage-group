import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const { id } = useParams();
  const API = `http://localhost:8000/product/${id}`;
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  });

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const res = await axios.get(API);
        setBookData(res.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchBookData();
  }, [API]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleEditBook = async () => {
    try {
      const res = await axios.put(API, bookData);
      console.log("Book edited successfully:", res.data);
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleInputChange}
        />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={bookData.description}
          onChange={handleInputChange}
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={bookData.image}
          onChange={handleInputChange}
        />
        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={bookData.link}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleEditBook}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPage;
