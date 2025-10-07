import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import * as playlistService from "../services/Playlist";
import * as songService from "../services/Song";

const server = "http://localhost:4000";

interface SongProviderProps {
  children: React.ReactNode;
}
const SongContext = createContext<any>(undefined);

export const SongProvider: React.FC<SongProviderProps> = ({ children }) => {
  const [songs, setSongs] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedSong, setSelectedSong] = useState<any>();
  const [playlist, setPlaylist] = useState();
  const { token } = useAuth();

  const fetchPlaylist = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const { data } = await playlistService.getAllAlbumByUser();
      if (data.data.length > 0) {
        setPlaylist(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [token]);

  const fetchSongList = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const { data } = await songService.getAllSongByUser();
      if (data.data.length > 0) {
        setSongs(data.data);
        setSelectedSong(data.data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [token]);

  const [song, setSong] = useState();
  const [index, setIndex] = useState(0);

  const nextSong = useCallback(() => {
    if (index === songs.length - 1) {
      setIndex(0);
      setSelectedSong(songs[0]);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setSelectedSong(songs[index + 1]);
    }
  }, [index, songs]);

  const prevSong = useCallback(() => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      setSelectedSong(songs[index - 1]);
    }
  }, [index, songs]);

  useEffect(() => {
    if (token) {
      fetchPlaylist();
      fetchSongList();
    }
  }, [token, fetchPlaylist, fetchSongList]);

  return (
    <SongContext.Provider
      value={{
        songs,
        setSongs,
        loading,
        setLoading,
        isPlaying,
        setIsPlaying,
        selectedSong,
        setSelectedSong,
        playlist,
        setPlaylist,
        nextSong,
        prevSong,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export const useSongData = () => {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error("useSongData must be used within a songProvider");
  }
  return context;
};
