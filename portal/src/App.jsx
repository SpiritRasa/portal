import { useState } from "react";
import "./Index.css";
import Header from "./Components/Blocks/Header";
import Seeker from "./Components/Blocks/Seeker";
import MainFeed from "./Components/Blocks/MainFeed";
import Footer from "./Components/Blocks/Footer";

function App() {
  return (
    <>
      <Header />
      <Seeker />
      <MainFeed />
      <Footer />
    </>
  );
}

export default App;
