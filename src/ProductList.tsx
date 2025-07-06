import { useState } from "react";
import type { Product } from "./types";

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
  return (
    <div>
      
    </div>
  )
}

export default ProductList;
