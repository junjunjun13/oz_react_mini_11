import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[40vh]">
      <div className="w-14 h-14 border-[5px] border-t-transparent border-r-cyan-400 border-b-cyan-300 border-l-cyan-700 rounded-full animate-spin shadow-lg" />
    </div>
  );
}
