import React from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <header className="home-header">
        <h1>Find Your Perfect Pet 🐶🐱</h1>
        <p>Adopt a pet and bring joy to your home.</p>
        <button className="adopt-btn">View Pets</button>
      </header>
    </div>
  );
};

export default Home;
