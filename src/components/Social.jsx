import { useState } from "react";

function Social() {
  const [showAdvice, setShowAdvice] = useState(false);

  // Centralized advice text
  const adviceText = "👥 Tip: Be friendly";

  // Toggle handler
  const toggleAdvice = () => {
    setShowAdvice((prev) => !prev);
  };

  return (
    <div className="bg-orange-100 p-4 rounded-lg shadow-md flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-yellow-600">👥 Social</h3>
        <p className="text-sm text-gray-700">👥 Active | 📉 Socializing Less</p>

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

export default Social;