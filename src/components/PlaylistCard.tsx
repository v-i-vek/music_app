import React from 'react'
import { FaMusic } from 'react-icons/fa'

export const PlaylistCard = () => {
  return (
    <>
    <div className='flex items-center p-5 rounded-lg shadow-md cursor-pointer hover:bg-[#ffffff26]'>

      <div className='w-10 h-10 bg-gray-600 flex items-center justify-center rounded-md'>
        <FaMusic className='text-white text-xl'/>
      </div>
      <div className='ml-4'>
        <h2>My playlist</h2>
        <p className='text-gray-400 text-sm'>
          Playlist • <span>{"User"}</span>
        </p>
      </div>
    </div>
    </>
  )
}
