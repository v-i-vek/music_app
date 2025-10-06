import React from "react";
import Layout from "../components/Layout";
import { useSongData } from "../context/SongContext";
import { AlbumCard } from "../components/AlbumCard";
import { SongCard } from "../components/SongCard";
import { Player } from "../components/Player";

const Home = () => {
  const { playlist, loading, songs } = useSongData();

  return (
    <>
      <Layout>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
          <div className="flex overflow-auto">
            {loading ? (
              <p>laoding!!!!</p>
            ) : (
              playlist?.map((item: any) => (
                <AlbumCard
                  key={item.id}
                  id={item.id}
                  desc={item.title}
                  image={item.s3_thumbnail_url}
                  name={item.title}
                />
              ))
            )}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Featured Song</h1>
          <div className="flex overflow-auto m-2">
            {loading ? (
              <p>loading !!!</p>
            ) : (
              songs?.map((item: any) => <SongCard  id={item.id} title={item.title} key={item.id}/>)
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
