import api from "config/axiosConfig";

export const loginUser = async ({ email, password }) => {
  try {
    await api.post("/auth/login", { email, password });
    localStorage.setItem("isAuthenticated", true);
  } catch (e) {
    throw new Error(e.response?.data?.error || "Invalid credentials.");
  }
};

export const registerUser = async ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  try {
    await api.post("/auth/register", {
      name,
      email,
      password,
      confirmPassword,
    });
  } catch (e) {
    throw new Error(e.response?.data?.error || "Unknown error occurred.");
  }
};

export const logoutUser = async () => {
  try {
    await api.get("/auth/logout");
    localStorage.removeItem("isAuthenticated");
  } catch (e) {
    throw new Error(e.response?.data?.error || "Unknown error occurred.");
  }
};
