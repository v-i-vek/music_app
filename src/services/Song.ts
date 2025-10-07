import { SONG } from "../constants/endpoint"
import apiClient from "./ApiClient"




export const getAllSongByUser = () => {
    return apiClient.get(SONG.GET_SONGS)
}