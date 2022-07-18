import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);

export const likePost = (id, userId) =>
  API.put(`posts/${id}/like`, { userId: userId });

export const unLikePost = (id, userId) =>
  API.put(`posts/${id}/like`, { userId: userId });

export const deletePost = (id, userId) =>
  API.delete(`/posts/${id}`, { userId: userId });

export const updatePost = (id, userId) =>
  API.put(`/posts/${id}`, { userId: userId });

export const commentPost = (id, userId) =>
  API.put(`/posts/${id}/comment`, { userId: userId });
