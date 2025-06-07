import { useState } from "react";
import { Link } from "react-router-dom";

function Financial() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    setAdvice("💰 Tip: Save at least 20% of your income and avoid impulse purchases.");
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md flex justify-between items-center">
  <div className="flex-1">
    <Link to="/financialpage" className="text-xl font-bold text-green-600 block text-center p-2 bg-green-300 text-white rounded-lg hover:bg-green-600">
        💰 Financial Status
      </Link>
    <p className="text-gray-700">💰 Stable | ⚠ Review Expenses</p>
    {advice && <p className="mt-2 text-green-700">{advice}</p>}
  </div>
  {/* Spacing Adjusted for the Button */}
  <button onClick={getAdvice} className="ml-4 p-2 bg-green-500 text-white rounded-lg">
    Advice
  </button>
  
</div>
  );
}

export default Financial;