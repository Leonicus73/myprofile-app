import { Link } from "react-router-dom";

function FinancialPage() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-green-700">💰 Financial Page</h2>
      <p className="mt-2 text-gray-600">Manage your finances effectively.</p>

      {/* Navigation Buttons */}
      <div className="mt-6 space-y-4">
        <Link to="/expenditure" className="p-2 bg-blue-500 text-white rounded-lg block">
          Track Expenditure
        </Link>
        <Link to="/income" className="p-2 bg-yellow-500 text-white rounded-lg block">
          Manage Income
        </Link>
        <Link to="/Profile" className="p-2 bg-gray-500 text-white rounded-lg block">
          Back to Profile
        </Link>
      </div>
    </div>
  );
}

export default FinancialPage;