import { useState } from "react";
import { Link } from "react-router-dom";

function Financial() {
  const [advice, setAdvice] = useState("");
  const [showAdvice, setShowAdvice] = useState(false);

  const getAdvice = () => {
    // Always set the advice text when toggling on
    setAdvice("💰 Tip: Save at least 20% of your income and avoid impulse purchases.");
    // Toggle visibility
    setShowAdvice(!showAdvice);
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md flex justify-between items-start">
      <div className="flex-1">
        <Link
          to="/financialpage"
          className="text-xl font-bold text-white bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 inline-block"
        >
          💰 Financial
        </Link>

        <p className="text-sm text-gray-700 mt-2">💰 Stable | ⚠ Review Expenses</p>

        {showAdvice && (
          <p className="text-xs mt-2 text-green-700">{advice}</p>
        )}
      </div>

      <button
        onClick={getAdvice}
        className="ml-4 p-2 bg-green-500 text-white rounded-lg"
      >
        {showAdvice ? "Hide Advice" : "Show Advice"}
      </button>
    </div>
  );
}

export default Financial;