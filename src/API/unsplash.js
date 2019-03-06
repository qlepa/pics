import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1731a433e0b0c44453867ea3b2458ebfb4ee0dc237c3f3c4e2726f59e640505c"
  }
});
