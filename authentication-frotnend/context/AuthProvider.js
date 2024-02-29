import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  userCreds: null,
  login: async (email, password) => {},
  signup: async (name, email, password) => {},
  verify: async (email, otp) => {},
  logout: () => {},
});
export const useAuth = () => useContext(AuthContext);
axios.defaults.baseURL = "http://192.168.1.2:5000/api";

const storeDataInDevice = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getTokenFromDevice = async () => {
  try {
    const token = await AsyncStorage.getItem("token", token);
    console.log("TOKEN", token);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userCreds, setUserCreds] = useState({ email: "" });
  const login = async (email, password) => {
    try {
      const response = await axios.post("/register", {
        email,
        password,
      });
      const data = response.data;
      setUser(data.user);
      setIsLoggedIn(true);
      await storeDataInDevice(data.token);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const signup = async (name, email, password) => {
    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });
      const data = response.data;
      setUser(data.user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const verify = async (email, otp) => {
    console.log(email, otp);
    try {
      const response = await axios.post("/verify", {
        email,
        otp,
      });
      console.log(response.data);
      const data = response.data;
      setUser(data.user);
      setIsLoggedIn(true);
      await storeDataInDevice(data.token);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    async function validate() {
      try {
        const token = await getTokenFromDevice();
        const res = await axios.post("/validate", { token });
        console.log(res.data);
        const data = await res.data;
        setUser(data.user);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    }
    validate();
  }, []);
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        userCreds,
        login,
        logout,
        verify,
        signup,
        setUserCreds,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
