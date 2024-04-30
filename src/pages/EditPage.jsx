import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const { id } = useParams();
  const API = `http://localhost:8000/books/${id}`;
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const res = await axios.get(API);
        setBookData(res.data);
        setIsLoading(false);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="formAdd">
      <h2>Edit Book</h2>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleInputChange}
          placeholder="Title:"
        />
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
          placeholder="Author:"
        />
        <textarea
          name="description"
          value={bookData.description}
          onChange={handleInputChange}
          placeholder="Description:"
        />
        <input
          type="text"
          name="image"
          value={bookData.image}
          onChange={handleInputChange}
          placeholder="Image URL:"
        />
        <input
          type="text"
          name="link"
          value={bookData.link}
          onChange={handleInputChange}
          placeholder="Link:"
        />
        <button type="button" onClick={handleEditBook}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPage;
