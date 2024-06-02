import axios from "axios";

const LAMAClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export { LAMAClient };
