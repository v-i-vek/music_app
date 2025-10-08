import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useSongData } from "../context/SongContext";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export const Album = () => {
  const {
    fetchSongsFromPlaylist,
    loading,
    albumSong,
    isPlaying,
    setIsPlaying,
    selectedSong,
    setSelectedSong,
  } = useSongData();
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    fetchSongsFromPlaylist(params.id);
  }, [params.id, fetchSongsFromPlaylist]);

  const handlePlay = (item: any) => {
    setSelectedSong(item);
    setIsPlaying(true);
  };

  if (loading) return <p>Loading!!!</p>;
  return (
    <>
      <Layout>
        <div className="flex flex-col mt-5 ">
          <div className="flex m-3">
            <div className="flex">
              <img
                src="/default_playlist_img.png"
                alt=""
                className="rounded-lg w-[120px] mb-2"
              />
            </div>
            <div className="flex flex-col m-2 p-2">
              <h1 className="text-2xl font-bold m-1">playlist title</h1>
              <p className="m-1 text-[15px] font-semibold">
                playlist description
              </p>
            </div>
          </div>
          <hr />

          <div className="grid grid-cols-3 m-2">
            <p className="mr-4">#</p>
            <p>description</p>
            <p className="text-center">Action</p>
          </div>
          <hr />
          {albumSong &&
            albumSong?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-3 m-2 hover:bg-[#ffffff2b] cursor-pointer"
                >
                  <p className="mr-4 text-white">
                    <b>{index + 1}.</b>
                    <img
                      src={"/default_song.jpeg"}
                      className="inline w-5 rounded-lg m-1 mx-4 "
                      alt=""
                    />
                  </p>
                  <p className="text-[15px] hidden sm:block">{item.title}</p>
                  <p className="text-center flex justify-center-safe">
                    <FaPlay
                      className="m-1  text-center"
                      onClick={() => handlePlay(item)}
                    />
                  </p>
                </div>
              );
            })}
        </div>
      </Layout>
    </>
  );
};
