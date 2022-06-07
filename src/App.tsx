import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="App">
      <main className="App-header">
        <form
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
              onChange={handleUserName}
              type="text"
              name="username"
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
              id=""
            />
          </div>
          <div className="submit-btn">
            <button>submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
