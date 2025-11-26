import { useState } from "react";

function Health() {
  const [showAdvice, setShowAdvice] = useState(false);

  // Centralize the advice text so it's easy to change later
  const adviceText = "💡 Tip: Eat Healthy.";

  // Toggle handler
  const toggleAdvice = () => {
    setShowAdvice((prev) => !prev);
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-blue-600">🩺 Health</h3>
        <p className="text-sm text-gray-700">✔ Good | 🔴 Needs Improvement</p>

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

export default Health;