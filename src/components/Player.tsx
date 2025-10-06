import React,{useEffect, useRef, useState} from "react"
import { useSongData } from "../context/SongContext"
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr"
import { FaPause, FaPlay } from "react-icons/fa"

export const Player = () => {

  const {nextSong,prevSong,selectedSong,loading,isPlaying,setIsPlaying} = useSongData()
  
  const audioRef = useRef<HTMLAudioElement|null>(null)
  const[volume,setVolume] = useState(1);
  const[progress,setProgress] = useState(0)
  const[duration,setDuration] = useState(0)



  useEffect(()=>{
   const audio = audioRef.current

   if(!audio) return 
    const handleLoadedMetaData = () => {
      setDuration(audio.duration || 0);
    };
     const handleTimeUpdate = () => {
      setProgress(audio.currentTime || 0);
    };

    audio.addEventListener("loadedmetadata",handleLoadedMetaData)
    audio.addEventListener("timeupdate",handleTimeUpdate)

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };

  },[selectedSong])

  const handlePlayPause = ()=>{
    if(audioRef.current){
      if(isPlaying){
        audioRef.current.pause()
      }
      else{
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const volumeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const newVolume = parseFloat(e.target.value)/100
    setVolume(newVolume)
    if(audioRef.current){
      audioRef.current.volume = newVolume
    }
  }
  const durationChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const newTime = (parseFloat(e.target.value)/100)*duration;
    if(audioRef.current){
      audioRef.current.currentTime = newTime
    }
    setProgress(newTime)
  }

  return (
    <>
    <div>
      {selectedSong &&(
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
          <div className="items-center gap-3">
            <img src="/default_song.jpeg" alt="" className="w-12" />
            <div className="text-[14px] hidden md:block">
              <p>{selectedSong.title}</p>
              <p>demo decription</p>
            </div>
          </div>
          <div>
            {selectedSong?.s3_url && (
              <audio ref={audioRef} src={selectedSong.s3_url} autoPlay={isPlaying} />
            )}
            <div className="w-full items-center flex font-thin text-green-400">
              <input className="progress-bar w-[120px] md:w-[300px]" type="range" min={"0"} max={"100"} value={(progress/duration)*100 || 0} onChange={durationChange} />
            </div>
            <div className="flex justify-center items-center gap-4">
              <span onClick={prevSong} className="cursor-pointer"><GrChapterPrevious/></span><button className="bg-white text-black rounded-full p-2" onClick={handlePlayPause}>{isPlaying? <FaPause/> :<FaPlay/>}</button>
              <span className="cursor-pointer" onClick={nextSong}>
                <GrChapterNext />
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="range"
              className="w-16 md:w-32"
              min={"0"}
              max={"100"}
              step={"0.01"}
              value={volume * 100}
              onChange={volumeChange}
            />
          </div>
        </div>
      )}
    </div>
    </>
  )
}
