import React from "react";
import { BannerGrid } from "../components/BannerGrid";

const Homepage = () => {
  return (
    <header className="App-header">
      <h1 style={{ size: "50%", color: "white" }}>Genshin Gacha'O Meter</h1>
      <BannerGrid />
    </header>
  );
};

export default Homepage;
