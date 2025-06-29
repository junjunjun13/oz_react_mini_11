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
    <nav className="bg-gradient-to-r from-[#003973] to-[#000428] text-white px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <Link to="/">
        <h1 className="text-4xl font-bold text-white">
          <span
            className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(0,255,255,0.6)]"
            style={{
              fontFamily: "'Pacifico', cursive",
            }}
          >
            KUGA movie
          </span>
        </h1>
      </Link>
      <input
        type="text"
        placeholder="영화 제목 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300
          focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200 mt-2 md:mt-0"
      />
      <div className="flex gap-2 mt-2 md:mt-0">
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded">
          로그인
        </button>
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded">
          회원가입
        </button>
      </div>
    </nav>
  );
}
