import { useEffect, useState } from "react";
import type { Product, Styles } from "./types";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
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
          setSortedProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setSearchTerm(query);
    setSortedProducts(filteredProducts);
  };

  if (loading) {
    return <p style={styles.loadingText}>Loading Products...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
        style={styles.searchInput}
      />
      <div style={styles.container}>
        <ul style={styles.productList}>
          {sortedProducts.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <img
                src={product.image}
                alt={product.title}
                style={styles.productImage}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    padding: "20px",
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    listStyleType: "none",
    padding: 0,
  },
  searchInput: {
    width: "300px",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  productItem: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    maxWidth: "300px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  productImage: {
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
  },
  loadingText: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default ProductList;
