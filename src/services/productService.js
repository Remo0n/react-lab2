import axios from "../interceptors/axiosInstance";

const productService = {
  getProducts: () => {
    return axios.get("https://fakestoreapi.com/products");
  },
  getProductById: (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
  },
};

export default productService;
