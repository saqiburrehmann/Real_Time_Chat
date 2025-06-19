import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.respomse.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async () => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.respomse.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  //   todo: optimize this one later
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
