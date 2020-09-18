import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Hy34dovc86E5rY9uxD_g0N-jcfJS020bryCGWqfUU1Y",
  },
});

// const searchImages = (term) => {};
