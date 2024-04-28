import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/product";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async () => {
    const { data } = await axios.get(API);
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addproducts",
  async (newProduct, { dispatch }) => {
    await axios.post(API, newProduct);
    dispatch(getProducts());
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    dispatch(getProducts());
  }
);

export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    return data;
  }
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, product }, { dispatch }) => {
    await axios.put(`${API}/${id}`, product);
    dispatch(getProducts());
  }
);
