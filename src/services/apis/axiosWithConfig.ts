import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  params: {
    language: "en-US",
  },
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
  },
});

export default axiosWithConfig;
