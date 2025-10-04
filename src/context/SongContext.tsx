import axios from 'axios';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

const server = "http://localhost:4000";


interface SongProviderProps {
  children: React.ReactNode;
}
const SongContext = createContext<any>(undefined)


export const SongProvider: React.FC<SongProviderProps> = ({children}) => {
  const[song,setSong] = useState<any>()
  const[loading,setLoading] = useState<boolean>(false)
  const[isPlaying,setIsPlaying]= useState<boolean>(false)
  const[selectedSong,setSelectedSong] = useState<any>()
  const[playlist, setPlaylist] = useState()
  
  const fetchPlaylist = useCallback(async()=>{
    try {
      setLoading(true)
      const {data} = await axios.get(`${server}/v1/playlist/get-all-user-playlist`,{headers:{Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjOGY1MTBjLTE1ZDctNGUxNi05ZmVhLTI1YTJkNGM3YTBlOSIsImVtYWlsIjoiUmFqbmlzaEBnbWFpbC5jb20iLCJpYXQiOjE3NTk1NjE4NjYsImV4cCI6MTc2MDE2NjY2Nn0.PACa_H1wdUb4qO7_a1BVyiICBWc2wO83lInWCNnntqQ`}})
      console.log("++++",data)
      if(data.data.length >0){
        setPlaylist(data.data)
      }
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[])
  

  useEffect(()=>{
    fetchPlaylist()
  },[])

  return (
    <SongContext.Provider value={{song,setSong,loading,setLoading,isPlaying,setIsPlaying,selectedSong,setSelectedSong,playlist,setPlaylist}}>
      {children}
    </SongContext.Provider>
  )
}

export const useSongData = ()=>{
 const context = useContext(SongContext)
  if (!context) {
    throw new Error("useSongData must be used within a songProvider");
  }
   return context;

}