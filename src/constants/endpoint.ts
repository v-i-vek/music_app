
export const BASE_URL = "http://localhost:4000/v1/"

const END_POINT = {
    AUTH: 'auth',
    SONG: 'song',
    PLAYLIST: 'playlist'
}

export const USER = {
    LOGIN: END_POINT.AUTH + '/login',
    REGISTER: END_POINT.AUTH + '/addUser',
}

export const SONG = {
    GET_SONGS: BASE_URL + END_POINT.SONG + '/song',

}
export const PLAYLIST = {
    GET_ALL_USER_PLAYLIST: BASE_URL + END_POINT.PLAYLIST + '/get-all-user-playlist',
}