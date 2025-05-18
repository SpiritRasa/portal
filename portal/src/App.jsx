import { useState } from "react";
import "./Index.css";
import Header from "./Components/Blocks/Header";
import Seeker from "./Components/Blocks/Seeker";
import MainFeed from "./Components/Blocks/MainFeed";

function App() {
  return (
    <>
      <Header />
      <Seeker />
      <MainFeed />
    </>
  );
}

export default App;
