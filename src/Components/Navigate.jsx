import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Navigate() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-50 items-center h-screen">
      <p className="font-mono lg:text-2xl font-bold P-40">
        Click here to go to your product page
      </p>{" "}
      <br />
      <p className="flex justify-center text-3xl mb-4">
        <FaArrowAltCircleDown />
      </p>
      <button
        className="border-2 rounded-xl p-3 bg-blue-500 text-white hover:bg-blue-600 transition"
        onClick={() => navigate("/users")}
      >
        <div className="flex gap-3">
          <p>Go to Products</p>
          <p className="mt-1 text-xl">
            <FaLongArrowAltRight />
          </p>
        </div>
      </button>
    </div>
  );
}

export default Navigate;
