import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


function Users() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=42&sortBy=title&order=asc",
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

  
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <p className="p-4 text-center">Loading products...</p>;

  
  return (
    <div className="p-5">
      <div className="text-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-xl p-2 mb-6 w-full lg:w-100 text-center"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button onClick={() => navigate(-1)}> <p className="text-2xl mb-3"><FaArrowCircleLeft /></p></button>

      {filteredProducts.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
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

              <h2 className="font-bold mt-2">{item.title}</h2>
              <p className="text-green-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
