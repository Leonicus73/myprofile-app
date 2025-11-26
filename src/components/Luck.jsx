import { useState } from "react";

function Luck() {
  const [showAdvice, setShowAdvice] = useState(false);

  // Centralized advice text
  const adviceText = "🍀 Tip: Do good deeds.";

  // Toggle handler
  const toggleAdvice = () => {
    setShowAdvice((prev) => !prev);
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-purple-600">🍀 Luck</h3>
        <p className="text-sm text-gray-700">🍀 Lucky Today | 🌧 Tough Luck</p>

        {showAdvice && (
          <p className="text-xs mt-2 text-purple-700">{adviceText}</p>
        )}
      </div>

      <button
        onClick={toggleAdvice}
        className="ml-4 p-2 bg-purple-500 text-white rounded-lg whitespace-nowrap"
      >
        {showAdvice ? "Hide Advice" : "Show Advice"}
      </button>
    </div>
  );
}

export default Luck;