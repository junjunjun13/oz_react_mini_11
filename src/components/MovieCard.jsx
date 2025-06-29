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
      className="cursor-pointer border border-gray-300 rounded-lg shadow-md p-4 w-48 m-2 bg-purple hover:shadow-lg transition"
    >
      <img src={poster} alt={title} className="w-full rounded-md mb-2" />
      <h3 className="text-lg font-semibold truncate">{title}</h3>
      <div className="mb-1">
        <MovieRatingGauge voteAverage={rating} />
      </div>
      <p className="text-gray-500 text-right font-bold text-sm">
        🌟 {rating.toFixed(1)} / 10
      </p>
    </div>
  );
}
