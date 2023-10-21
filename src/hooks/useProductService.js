import { useEffect, useState } from "react";
import productService from "../services/productService";

function useProductService() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.getProducts();
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Fetch the products
    fetchProducts();
  }, []);

  const getProductById = async (id) => {
    console.log(id);
  };

  return { loading, products, error, getProductById };
}

export default useProductService;
