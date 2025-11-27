import { Link } from "react-router-dom";

function FinancialPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6">
      {/* Left column: navigation buttons */}
      <div>
        <h2 className="text-2xl font-bold text-green-700">💰 Financial Page</h2>
        <p className="mt-2 text-gray-600">Manage your finances effectively.</p>

        <div className="mt-6 space-y-4">
          <Link to="/expenditure" className="w-33 p-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 block">
            Track Expenditure
          </Link>
          <Link to="/income" className="w-33 p-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 block">
            Manage Income
          </Link>
          <Link to="/budget" className="w-33 p-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 block">
            Budget Planner
          </Link>
          <Link to="/savings" className="w-33 p-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 block">
            Savings Goals
          </Link>
          <Link to="/investments" className="w-33 p-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 block">
            Investments
          </Link>
          <Link to="/profile" className="w-33 p-2 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 block">
            Back to Profile
          </Link>
        </div>
      </div>

      {/* Right column: contextual content */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-green-600">📊 Financial Overview</h3>
        <p className="text-sm text-gray-700 mt-2">
          Quick snapshot of your finances: expenditure vs. income, savings progress, and investment status.
        </p>

        {/* Example placeholders */}
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>💸 Monthly Expenditure: $2,300</li>
          <li>💵 Monthly Income: $3,500</li>
          <li>🏦 Savings Goal Progress: 45%</li>
          <li>📈 Investments: +8% this quarter</li>
        </ul>
      </div>
    </div>
  );
}

export default FinancialPage;