import React, { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import axios from "./api/axios";
import "./App.css";
import AuthContext from "./context/AuthProvider";

const App = () => {
  const { setAuth }: any = useContext(AuthContext);
  const errRef: any = useRef();
  const userRef: any = useRef();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const LOGIN_URL = "/auth";

  const handleUserName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ userName, password, roles, accessToken });
      setUserName("");
      setPassword("");
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]);
  return (
    <div className="App">
      <main className="App-header">
        {success ? (
          <h1>success</h1>
        ) : (
          <form
            onSubmit={handleSubmit}
            action=""
            style={{ gap: "10px", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              className="username"
            >
              <div style={{ gap: "20px" }}>
                <label htmlFor="username">Username</label>
                <input
                  ref={userRef}
                  onChange={handleUserName}
                  type="text"
                  name="username"
                  value={userName}
                  required
                  id=""
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  onChange={handlePassword}
                  type="password"
                  name="password"
                  value={password}
                  required
                  id=""
                />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  gap: "20px",
                  display: "flex",
                }}
                className="submit-btn"
              >
                <button>sign in</button>
                <button>sign up</button>
              </div>
              <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
                {errMsg}
              </p>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};

export default App;
