import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c649923042534f69ab24d24e224eba9b",
  },
});
