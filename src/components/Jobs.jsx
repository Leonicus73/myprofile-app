import { useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
  const [showAdvice, setShowAdvice] = useState(false);

  // Centralized advice text
  const adviceText =
    "💼 Tip: Keep your resume updated and network regularly to discover new opportunities.";

  // Toggle handler
  const toggleAdvice = () => {
    setShowAdvice((prev) => !prev);
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex justify-between items-start">
      <div className="flex-1">
        <Link
          to="/jobpage"
          className="text-xl font-bold text-white bg-yellow-500 px-3 py-1 rounded-lg hover:bg-green-600 inline-block"
        >
          💼 Jobs
        </Link>

        <p className="text-sm text-gray-700">
          💼 Current Role: Robotic Engineer | 🚀 Next Goal: AI Engineer
        </p>

        {showAdvice && (
          <p className="text-xs mt-2 text-blue-700">{adviceText}</p>
        )}
      </div>

      <button
        onClick={toggleAdvice}
        className="ml-4 p-2 bg-blue-500 text-white rounded-lg whitespace-nowrap"
      >
        {showAdvice ? "Hide Advice" : "Show Advice"}
      </button>
    </div>
  );
}

export default Jobs;