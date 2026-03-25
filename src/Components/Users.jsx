import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Users() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=21&sortBy=title&order=asc",
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="p-4 text-center">Loading products...</p>;

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-40 object-cover rounded"
          />
          <div className="pt-4">
            <p className="border-2 border-b-blue-50"></p>
          </div>
          <h2 className="font-bold mt-2">{item.title}</h2>
          <p className="text-green-600">${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
