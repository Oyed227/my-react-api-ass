import { useNavigate } from "react-router-dom";

function Navigate() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="border-2 rounded p-3 bg-blue-500 text-white hover:bg-blue-600 transition"
        onClick={() => navigate("/users")}
      >
        Go to Products
      </button>
    </div>
  );
}

export default Navigate;
