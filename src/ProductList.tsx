import { useEffect, useState } from "react";
import type { Product } from "./types";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.in/api/products?limit=20"
        );
        if (response.status === 200) {
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return <div></div>;
};

export default ProductList;
