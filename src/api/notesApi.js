import useStore from "store/_store";
import api from "config/axiosConfig";

export const getNotes = async (search = "", category = "ALL", page = "1") => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const queryString = `?search=${search}&category=${category}&page=${page}`;
    const res = await api.get(`/notes${queryString}`);
    return res.data?.data;
  } catch (e) {
    if (e.response?.status === 401) useStore.getState().logout();
    throw new Error(e.response?.data?.error || "Unknown error occurred.");
  }
};

export const getArchivedNotes = async (page = "1") => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const res = await api.get(`/notes/archive?page=${page}`);
    return res.data?.data;
  } catch (e) {
    if (e.response?.status === 401) useStore.getState().logout();
    throw new Error(e.response?.data?.error || "Unknown error occurred.");
  }
};
