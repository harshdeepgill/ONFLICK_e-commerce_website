import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const [isAuth,setIsAuth] = useState(false)

  const [username, setUsername] = useState("");
  const [price, setPrice] = useState(0);

  const fetchPrice = (id) => {
    axios
      .get(`/${id}`)
      .then((res) => {
        setPrice(res.data.price);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ setUsername, username, fetchPrice, price }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
