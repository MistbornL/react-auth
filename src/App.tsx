import React from "react";
import "./App.css";

function App() {
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
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="" />
          </div>
          <div
            className="Password"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <label htmlFor="">Password</label>
            <input type="text" name="password" id="" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
