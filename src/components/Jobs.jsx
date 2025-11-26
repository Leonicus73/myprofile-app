import { useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    setAdvice("💼 Tip: Keep your resume updated and network regularly to discover new opportunities.");
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex-1">
        <Link
          to="/jobpage"
          className="text-xl font-bold text-yellow-600 block text-center p-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-600"
        >
          💼 Jobs
        </Link>
        <p className="text-gray-700">💼 Current Role: Robotic Engineer | 🚀 Next Goal: AI Engineer</p>
        {advice && <p className="mt-2 text-yellow-700">{advice}</p>}
      </div>

      {/* Advice Button */}
      <button
        onClick={getAdvice}
        className="ml-4 p-2 bg-yellow-500 text-white rounded-lg"
      >
        Advice
      </button>
    </div>
  );
}

export default Jobs;