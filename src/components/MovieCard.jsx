import React from "react";
import { useNavigate } from "react-router-dom";
import MovieRatingGauge from "./MovieRatingGauge";

export default function MovieCard({ id, title, poster, rating }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-gray-500 rounded-xl bg-gray-900 hover:shadow-lg transition p-2 h-full"
    >
      <img
        src={poster}
        alt={title}
        className="w-full h-[200px] object-cover rounded mb-2"
      />
      <h3 className="text-xs font-semibold text-white truncate mb-1">
        {title}
      </h3>
      <div className="mb-1">
        <MovieRatingGauge voteAverage={rating} />
      </div>
      <p className="text-[11px] text-gray-300 text-right">
        🌟 {rating.toFixed(1)} / 10
      </p>
    </div>
  );
}
