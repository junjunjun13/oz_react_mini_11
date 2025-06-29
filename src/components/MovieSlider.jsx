import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieSlider({ title, movies }) {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  // 마우스 휠을 좌우 스크롤로 바꾸기
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative mb-10">
      <h2 className="text-xl font-bold text-white mb-2 px-4">{title}</h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="shrink-0 w-[160px]">
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              rating={movie.vote_average}
            />
          </div>
        ))}
      </div>

      {/* 좌우 버튼 */}
      <button
        onClick={() => scroll(-300)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
      >
        ◀
      </button>
      <button
        onClick={() => scroll(300)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
      >
        ▶
      </button>
    </div>
  );
}
