import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup interval
  }, []);

  return (
    <div>
      <p className="text-sm">🕒 {currentTime.toLocaleTimeString()}</p>
      <p className="text-sm">📅 {currentTime.toLocaleDateString()}</p>
    </div>
  );
};

export default RealTimeClock;