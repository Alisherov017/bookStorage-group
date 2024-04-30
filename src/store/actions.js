import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/books";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const { data } = await axios.get(API);
  return data;
});

export const addBook = createAsyncThunk("books/addBook", async (newBook) => {
  await axios.post(API, newBook);
  return newBook; // Возвращаем новую книгу
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id; // Возвращаем id удаленной книги
});

export const getOneBook = createAsyncThunk("books/getOneBook", async (id) => {
  const { data } = await axios.get(`${API}/${id}`);
  return data;
});

export const editBook = createAsyncThunk(
  "books/editBook",
  async ({ id, book }) => {
    await axios.put(`${API}/${id}`, book);
    return { id, book }; // Возвращаем id и обновленную книгу
  }
);
