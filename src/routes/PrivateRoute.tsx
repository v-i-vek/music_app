import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const PrivateRoute = () => {
   
    const navigate = useNavigate()
    const {token} = useAuth()
    
    useEffect(()=>{
        if(!token){
            const localToken = localStorage.getItem("accessToken")
            if(!localToken){
                navigate('/login')
            }
        }
    },[token])

 return <Outlet />;
}
