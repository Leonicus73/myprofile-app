import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-blue-300 text-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome</h1>
      <p className="mt-4 text-lg">Explore financial, health, social connections, and luck!</p>

      {/* Navigation Button to Profile Page */}
      <Link to="/profile" className="mt-4 p-2 bg-blue-600 text-white rounded-lg">
        Go to Profile
      </Link>
    </div>
  );
}

export default App;


