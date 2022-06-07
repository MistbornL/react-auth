import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const errRef: any = useRef();
  const userRef: any = useRef();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSucces] = useState<boolean>(false);

  const handleUserName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(userName, password);
    setUserName("");
    setPassword("");
    setSucces(true);
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
          <h1>succes</h1>
        ) : (
          <form
            onSubmit={handleSubmit}
            action=""
            style={{ gap: "10px", display: "flex", flexDirection: "column" }}
          >
            <div
              className="username"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
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
            <div
              className="Password"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <label htmlFor="password">Password</label>
              <input
                onChange={handlePassword}
                type="password"
                name="password"
                value={password}
                required
                id=""
              />
              <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
                {errMsg}
              </p>
            </div>
            <div className="submit-btn">
              <button>sign in</button>
              <button>sign up</button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};

export default App;
