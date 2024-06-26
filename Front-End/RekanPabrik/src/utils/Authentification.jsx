import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const token = response.data;
    return token;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Lanjutkan",
      });
    } else {
      alert("Error: " + error.message);
    }
    throw error;
  }
};

export const userInfo = async (Token) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      Swal.fire({
        title: errorMessage,
        text: "anda tiddak memiliki akses",
        icon: "error",
        confirmButtonText: "lanjutkan",
      });
    } else {
      alert("Error: " + error.message);
    }
    throw error;
  }
};
