import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export const fetchDashboardData = async (username) => {
  try {
    const response = await api.get(`/github/dashboard/${username}`);
    return response.data.data;
  } catch (error) {
    console.error("API ERROR:", error);

    if (error.response) {
      throw new Error(error.response.data.message);
    }

    if (error.request) {
      throw new Error("Backend server not responding");
    }

    throw new Error("Network Error");
  }
};