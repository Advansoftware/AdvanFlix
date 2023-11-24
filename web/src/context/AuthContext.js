import { createContext, useEffect, useState } from "react";
import { Apipost } from "../helpers/ApiServices";
import { Alert, Snackbar } from "@mui/material";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [me, setMe] = useState(null);
  const [message, setMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [messageType, setMessageTipe] = useState("info");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("me"))) {
      let data = JSON.parse(localStorage.getItem("me"));
      setToken(data);
    }
  }, [me]);

  const login = async () => {
    try {
      setLoading(true);
      let data = await Apipost("Users/AuthenticateByName", {
        Username: user,
        Pw: password,
      });
      localStorage.setItem("me", JSON.stringify(data.data));
      setMe(data);
    } catch (error) {
      console.error(error);
      setMessageTipe("error");
      setMessage("Falha ao realizar login");
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        password,
        login,
        token,
        setUser,
        setPassword,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={() => setOpenAlert(false)}
      >
        <Alert
          onClose={() => setOpenAlert(false)}
          severity={messageType}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </AuthContext.Provider>
  );
}
