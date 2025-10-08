import React from "react";
import { useNavigate } from "react-router-dom";
import { PlaylistCard } from "./PlaylistCard";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[25%] h-full p-2 flex-col text-white lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src="/home.png" className="w-6" alt="" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src="/search.png" className="w-6" alt="" />
            <p className="font-bold">search</p>
          </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded mt-2">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center gap-3">
              <img src="/stack.png" className="w-8" alt="" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/arrow.png" className="w-8" alt="" />
              <img src="/plus.png" className="w-8" alt="" />
            </div>
          </div>

          <div onClick={() => navigate("/playlist")}>
            <PlaylistCard />
          </div>

          <div className="p-4 m-2 bg-[#121212] rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
            <h1>Let 's findsome podcast to follow</h1>
            <p className="font-light">we'll keep you update on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-black text-[13px] rounded-full mt-4">
              Browse podcast
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
