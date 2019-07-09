import React from "react";
import "./App.css";
import CardsWrapper from "./components/CardsContainer/CardsWrapper";
import {Header} from "./components/Header/Header";


const App = () => {
  return (
    <div className="main-page">
        <Header/>
        <CardsWrapper/>
    </div>
  );
}

export default App;
