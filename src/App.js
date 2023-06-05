import React from "react";
import "./App.css";

function App() {
  const openNewTab = () => {
    window.open("https://s.id/peminjaman-lab", "_blank");
  };
  const cards = [
    {
      title: "Alur Peminjaman Ruang",
      description: "This is card 1",
      image: "/images/alur_peminjaman_ruang.png",
    },
    {
      title: "Alur Peminjaman Alat",
      description: "This is card 2",
      image: "/images/alur_peminjaman_alat.png",
    },
  ];

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
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            {/* <h3>{card.title}</h3> */}
            {/* <p>{card.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
