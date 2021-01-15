export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://tp-devops-final.herokuapp.com/api"
    : "http://localhost:2020/api";
export default API_URL;
