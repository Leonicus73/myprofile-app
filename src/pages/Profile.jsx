import RealTimeClock from "../components/RealTimeClock";
import Temperature from "../components/Temperature";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import profilePic from "../assets/Pics/MYSELF.jpg";
import Financial from "../components/Financial";
import Jobs from "../components/Jobs";
import Health from "../components/Health";
import Luck from "../components/Luck";
import Social from "../components/Social";
import ReportCard from "../components/ReportCard";

function Profile() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 p-6">
      
      {/* Left Column: Profile + Status + Todo */}
      <div className="col-span-2 bg-blue-300 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Profile Page</h2>

        <div className="flex items-center justify-center space-x-6 mt-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
          />
          <div className="text-left">
            <RealTimeClock />
            <Temperature />
          </div>
        </div>

        {/* Status Sections */}
        <div className="mt-6 space-y-4">
          <Health color="red" />
          <Financial color="green" />
          <Jobs color="yellow" />
          <Social color="purple" />
          <Luck color="indigo" />
        </div>

        {/* To-Do List Section */}
        <div className="mt-6">
          <TodoList />
        </div>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link to="/" className="p-2 bg-blue-500 text-white rounded-lg">
            🔙 Back to Home
          </Link>
        </div>
      </div>

      {/* Right Column: Analysis Reports */}
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-700">Analysis Reports</h3>
        <div className="mt-4 space-y-4">
          <ReportCard title="Health Analysis" />
          <ReportCard title="Financial Trends" />
          <ReportCard title="Job Progress" />
          <ReportCard title="Social Trends" />
          <ReportCard title="Luck Forecast" />
        </div>
      </div>
    </div>
  );
}

export default Profile;