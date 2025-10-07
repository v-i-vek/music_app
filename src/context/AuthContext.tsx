import axios from "axios";
import { createContext, useContext, useState } from "react";


const AuthContext = createContext<any>({})


export const AuthProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const [btnLoading,setBtnLoading] = useState(false)
    const [token,setToken] = useState();
    

    const loginUser = async(userName:any,password:any,navigate:any)=>{
        try {
        setBtnLoading(true)
        const {data} = await axios.post("http://localhost:4000/v1/auth/login", {userName,password})
        if(data){
            setBtnLoading(false)
            console.log(data.data)
            console.log(data.data.accessToken)
            localStorage.setItem("accessToken",data.data.accessToken)
            setToken(data.data.accessToken)
            navigate("/home")
        }
        } catch (error) {
            
        }
    }
 

    return(
        <AuthContext.Provider value={{loginUser,btnLoading,token}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = ()=>{
  const context = useContext(AuthContext)
  return context
}

