import { useState } from "react";

function Luck() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    setAdvice("💰 Tip: Do good deeds.");
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-purple-600">🍀 Luck</h3>
        <p className="text-sm text-gray-700">🍀 Lucky Today | 🌧 Tough Luck</p>
        {advice && <p className="text-sm mt-2 text-purple-700">{advice}</p>}
      </div>
     {/* Spacing Adjusted for the Button */}
      <button onClick={getAdvice} className="ml-4 p-2 bg-purple-500 text-white rounded-lg whitespace-nowrap">
        Advice
      </button>
    </div>
  );
}

export default Luck;