import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [growthStage, setGrowthStage] = useState(5);
  const [isGrowing, setIsGrowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowthStage((prev) => {
        if (prev < 35 && isGrowing) {
          return prev + 1;
        } else if (prev > 5 && !isGrowing) {
          return prev - 1;
        } else {
          return prev;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, [isGrowing]);

  return (
    <button
      style={{ padding: `${growthStage}px` }}
      className={`border-[1px] border-black transition-colors duration-700 text-white rounded-md ${
        isGrowing ? "bg-sky-400" : "bg-amber-400"
      }`}
      onClick={() => setIsGrowing((prev) => !prev)}
    >
      {isGrowing ? "Küçült" : "Büyüt"}
    </button>
  );
};

export default App;
