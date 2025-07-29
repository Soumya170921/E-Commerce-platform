import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Product Listings</h1>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;