import React from "react";
import { MdLibraryMusic } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface AlbumCardProp {
  image: string;
  name: string;
  desc: string;
  id: string;
}

export const AlbumCard: React.FC<AlbumCardProp> = ({
  image,
  name,
  desc,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-w-[180px] p-2 px-3 rounded cursor-pointer shadow-gray-600 hover:bg-[#ffffff26]"
        onClick={() => navigate(`/album/${id}`)}
      >
        <img
          src={image ? image : "/default_playlist_img.png"}
          className="rounded w-[160px]"
          alt=""
        />
        <p className="font-bold mt-2 mb-1">{name.slice(0, 12)}...</p>
        <p className="text-slate-200 text-sm">{desc.slice(0, 18)}...</p>
      </div>
    </>
  );
};
