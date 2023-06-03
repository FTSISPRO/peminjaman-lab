import React from "react";
import "./App.css";

function App() {
  const openNewTab = () => {
    window.open("https://s.id/peminjaman-lab", "_blank");
  };

  return (
    <div className="App">
      <div className="App-background"></div>
      <div className="App-content">
        <h1>Selamat Datang</h1>
        <p>Laboratorium Fakultas Teknik</p>
        <button className="button" onClick={openNewTab}>
          Template Peminjaman
        </button>
      </div>
    </div>
  );
}

export default App;
