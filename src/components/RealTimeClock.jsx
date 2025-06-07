import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup interval
  }, []);

  return (
    <div>
      <h2>🕒 {currentTime.toLocaleTimeString()}</h2>
      <h3>📅 {currentTime.toLocaleDateString()}</h3>
    </div>
  );
};

export default RealTimeClock;