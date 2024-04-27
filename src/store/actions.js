import axios from "axios";

export const changeMode = (newMode) => {
  return {
    type: "CHANGE_MODE",
    payload: newMode,
  };
};

export const submitForm = (formData) => {
  const API = "http://localhost:8000/users";
  return async () => {
    try {
      const requestData = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      };

      const response = await axios.post(API, requestData);
      console.log(response.data);
    } catch (error) {}
  };
};
