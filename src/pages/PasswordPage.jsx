import React, { useState } from "react";

const PasswordPage = () => {
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === "bestadmin") {
      window.location.href = "/admin";
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="passPage">
      <h1>Enter the password</h1>
      <input
        type="password"
        id="passMain"
        value={password}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PasswordPage;
