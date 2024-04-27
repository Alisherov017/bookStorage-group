import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode, submitForm } from "../store/actions";

const JoinPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(submitForm(formData, mode));
  };

  return (
    <div className="join">
      <h2>{mode === "signup" ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mode-btns">
          <button onClick={() => dispatch(changeMode("signup"))}>
            Sign Up
          </button>
          <button onClick={() => dispatch(changeMode("login"))}>Login</button>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {mode === "signup" && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </>
        )}
        {mode === "login" && (
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        )}
        <button type="submit">{mode === "signup" ? "Sign Up" : "Login"}</button>
      </form>
    </div>
  );
};

export default JoinPage;
