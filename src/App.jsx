import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieDetail from "./components/MovieDetail";
import SearchResult from "./pages/SearchResult";
import { BASE_URL } from "./constant/constant";
import MovieSlider from "./components/MovieSlider";

export default function App() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            accept: "application/json",
          },
        };

        const [popularRes, topRatedRes, actionRes, romanceRes] =
          await Promise.all([
            fetch(`${BASE_URL}/movie/popular?language=ko-KR`, options),
            fetch(`${BASE_URL}/movie/top_rated?language=ko-KR`, options),
            fetch(
              `${BASE_URL}/discover/movie?with_genres=28&language=ko-KR`,
              options
            ), // 액션
            fetch(
              `${BASE_URL}/discover/movie?with_genres=10749&language=ko-KR`,
              options
            ), // 로맨스
          ]);

        const [popularData, topRatedData, actionData, romanceData] =
          await Promise.all([
            popularRes.json(),
            topRatedRes.json(),
            actionRes.json(),
            romanceRes.json(),
          ]);

        // 성인 영화 제외하고 저장
        const filterAdult = (list) =>
          list.results.filter((movie) => !movie.adult);

        setPopular(filterAdult(popularData));
        setTopRated(filterAdult(topRatedData));
        setAction(filterAdult(actionData));
        setRomance(
          romanceData.results.filter(
            (movie) =>
              !movie.adult && // 성인 제외
              movie.poster_path && // 포스터 있는 것만
              movie.vote_count > 100 && // 투표수 100개 이상
              movie.vote_average >= 5 // 평점 5점 이상
          )
        );
      } catch (err) {
        console.error("영화 데이터를 불러오는 데 실패했습니다:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="bg-[#141414] min-h-screen text-white w-full px-4 py-6 space-y-10">
              <MovieSlider title="🔥 인기 영화" movies={popular} />
              <MovieSlider title="🎯 평점 높은 영화" movies={topRated} />
              <MovieSlider title=" 액션 영화" movies={action} />
              <MovieSlider title="💖 로맨스 영화" movies={romance} />
            </div>
          }
        />
        <Route path="details/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchResult />} />
      </Route>
    </Routes>
  );
}
