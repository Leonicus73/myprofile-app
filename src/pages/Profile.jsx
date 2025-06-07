import RealTimeClock from "../components/RealTimeClock";
import Temperature from "../components/Temperature";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import profilePic from "../assets/pics/MYSELF.jpg";
import Financial from "../components/Financial";
import Health from "../components/Health";
import Luck from "../components/Luck";
import Social from "../components/Social";

function Profile() {
  return (
    <div className="max-w-2xl mx-auto bg-blue-300 shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-700">Profile Page</h2>

      <div className="flex items-center justify-center space-x-6 mt-4">
        {/* Profile Picture */}
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
        />
      
        {/* Time, Date & Temperature */}
        <div className="text-left">
          <RealTimeClock />
          <Temperature />
        </div>
      </div>



      {/* Status Sections */}
      <div className="mt-6 space-y-4">
        <Health />
        <Financial />
        <Social /> 
        <Luck />             
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
  );
}

export default Profile;