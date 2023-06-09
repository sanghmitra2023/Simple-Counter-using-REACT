import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedCount = count.toString().padStart(6, "0");
  const digits = formattedCount.split("");

  return (
        <div className="counter-container">
            <div className="card empty-card">
                <i class="fa fa-clock fa-2xl myclock"></i>
            </div>
            <div className="card-container">
                    {digits.map((digit, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h3 className="card-text centered">{digit}</h3>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
};

export default SecondsCounter;