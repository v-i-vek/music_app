import { PLAYLIST } from "../constants/endpoint"
import apiClient from "./ApiClient"





export const getAllAlbumByUser = () => {
    return apiClient.get(PLAYLIST.GET_ALL_USER_PLAYLIST)
}

export const getAlbumById = (id: string) => {
    return apiClient.get(PLAYLIST.GET_PLAYLIST_BY_ID + id)
}