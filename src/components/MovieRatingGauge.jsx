import React from "react";

const MovieRatingGauge = ({ voteAverage }) => {
  const percentage = (voteAverage / 10) * 100;

  const getColor = () => {
    if (percentage >= 70) return "bg-green-500";
    if (percentage >= 40) return "bg-orange-400";
    return "bg-red-500";
  };

  return (
    <div className="w-full h-2 bg-gray-300 rounded">
      <div
        className={`h-full rounded transition-all duration-300 ease-in-out ${getColor()}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default MovieRatingGauge;
