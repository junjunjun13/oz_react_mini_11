import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearch) {
      navigate(`/search?query=${debouncedSearch}`);
    }
  }, [debouncedSearch]);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold text-purple-400">JUN MOVIE</h1>
      </Link>
      <input
        type="text"
        placeholder="영화 제목 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-2 py-1 text-black w-full md:w-1/3"
      />
      <div className="flex gap-2 justify-items-center md:justify-end">
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded">
          로그인
        </button>
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded">
          회원가입
        </button>
      </div>
    </nav>
  );
}
