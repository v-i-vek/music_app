import { USER } from "../constants/endpoint"
import type { IAuthUser, IUserDetail } from "../interfaces/CommonInteface"
import apiClient from "./ApiClient"




export const login = (userData: IAuthUser) => {
    return apiClient.post(USER.LOGIN, userData)
}

export const register = (userData: IUserDetail) => {
    return apiClient.post(USER.REGISTER, userData)
}