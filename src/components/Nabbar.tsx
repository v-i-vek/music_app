import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logOut } = useAuth();
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const handleLogut = () => {
    logOut();
  };
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src="/left_arrow.png"
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
          <img
            src="/right_arrow.png"
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="px-4 py-1.5 bg-white text-black rounded-2xl text-[14px]">
            install App
          </p>
          <p
            className="bg-white text-black rounded-2xl px-4 py-1.5 text-[14px]"
            onClick={handleLogut}
          >
            {token ? "logout" : "login"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 mt-4 text-[14px]">
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer hidden md:block">
          All
        </p>
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer hidden md:block">
          Music
        </p>
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer hidden md:block">
          Podcast
        </p>
      </div>
    </>
  );
};

export default Navbar;
