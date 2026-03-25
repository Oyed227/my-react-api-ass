import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
       
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading product...</p>;
  if (error)
    return (
      <p className="p-4 text-center text-red-500">
        Error: {error} <br />
        <Link to="/users" className="text-blue-600 hover:text-blue-800">
          Go back to products
        </Link>
      </p>
    );

  return (
    <div className="p-5 mx-auto">
      <div className="p-4 max-w-md mx-auto border rounded shadow">
        <Link
          to="/users"
          className="inline-flex items-center mb-4 text-blue-600 hover:text-blue-800"
        >
          Back
        </Link>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover rounded"
        />
        <div className="pt-4">
          <p className="border-2 border-b-blue-50"></p>
        </div>
        <h1 className="font-bold text-2xl mt-4">{product.title}</h1>
        <p className="text-green-600 text-xl mt-2">${product.price}</p>
        <p className="mt-2 text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
