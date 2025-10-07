import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import type { IUserDetail } from "../interfaces/CommonInteface";
import * as authService from "../services/User";
import apiClient from "../services/ApiClient";
import { USER } from "../constants/endpoint";

const AuthContext = createContext<any>({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [token, setToken] = useState<any>(() =>
    localStorage.getItem("accessToken")
  );
  const navigate = useNavigate();

  const loginUser = async (userData: any) => {
    try {
      setBtnLoading(true);
      const { data } = await authService.login(userData);
      if (data) {
        setBtnLoading(false);
        localStorage.setItem("accessToken", data.data.accessToken);
        setToken(data.data.accessToken);
        navigate("/home");
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while login");
    } finally {
      setBtnLoading(false);
    }
  };

  const registerUser = async (userData: IUserDetail) => {
    try {
      setBtnLoading(true);
      const { data } = await authService.register(userData);
      if (data) {
        setBtnLoading(false);
        navigate("/login");
        toast.success("Registration successful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while login");
    } finally {
      setBtnLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setToken(null);
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, registerUser, btnLoading, token, logOut }}
    >
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
