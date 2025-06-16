import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    const colors = ["#1e1e1e", "#ffb6c1", "#87ceeb", "#90ee90"];
    const col = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(col);
  };

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <img
          className="profile-img"
          src="https://e676fed4c2.clvaw-cdnwnd.com/acee4560f74b4e5d436c6af8d20d08ef/200014490-4d73b4d73e/Screenshot%202024-06-25%20at%206.12.28-4.png?ph=e676fed4c2"
          alt="Chameleon"
        />
        <h2 className="name">Sneha Rajshekar</h2>
        <p className="title">Job: None (currently exploring opportunities)</p>
      </div>
      <button className="btn" onClick={changeColor}>Change Background</button>
    </div>
  );
}

export default App;
