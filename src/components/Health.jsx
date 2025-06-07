import { useState } from "react";

function Health() {
      const [advice, setAdvice] = useState("");
    
      const getAdvice = () => {
        setAdvice("💰 Tip: Eat Healthy.");
      };

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md flex justify-between items-center">
  <div>
    <h3 className="text-xl font-bold text-blue-600">🩺 Health Status</h3>
    <p className="text-gray-700">✔ Good | 🔴 Needs Improvement</p>
    {advice && <p className="mt-2 text-blue-700">{advice}</p>}
  </div>
  <button onClick={getAdvice} className="ml-4 p-2 bg-blue-500 text-white rounded-lg whitespace-nowrap">
    Advice
  </button>
</div>
  );
}

export default Health;