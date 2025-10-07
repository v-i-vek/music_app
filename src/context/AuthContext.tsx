import axios from "axios";
import { createContext, useContext, useState } from "react";


const AuthContext = createContext<any>({})


export const AuthProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const [btnLoading,setBtnLoading] = useState(false)
    

    const loginUser = async(userName:any,password:any,navigate:any)=>{
        try {
        setBtnLoading(true)
        const result = await axios.post("http://localhost:4000/v1/auth/login", {userName,password})
        if(result.data){
            setBtnLoading(false)
            localStorage.setItem("accessToken",result.data.accessToken)
            navigate("/home")
        }
        } catch (error) {
            
        }
    }
 

    return(
        <AuthContext.Provider value={{loginUser,btnLoading}}>{children}</AuthContext.Provider>
    )
}

export const userData = ()=>{
  const context = useContext(AuthContext)
  return context
}

