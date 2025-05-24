import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-352792921038.us-central1.run.app", // Ganti dengan base URL backend-mu
  withCredentials: true, // untuk kirim cookie kalau dibutuhkan
});

export default instance;
