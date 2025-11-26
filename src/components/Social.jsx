import { useState } from "react";

function Social() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    setAdvice("💰 Tip: Be friendly");
  };
  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex justify-between items-center">
  <div className="flex-1">
    <h3 className="text-xl font-bold text-yellow-600">👥 Social</h3>
    <p className="text-gray-700">👥 Active | 📉 Socializing Less</p>
    {advice && <p className="mt-2 text-yellow-700">{advice}</p>}
 </div> 
    {/* Spacing Adjusted for the Button */}
    <button onClick={getAdvice} className="ml-4 p-2 bg-yellow-500 text-white rounded-lg whitespace-nowrap">
      Advice
    </button>
    </div>
  );
}

export default Social;