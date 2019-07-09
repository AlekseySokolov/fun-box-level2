import React from "react";
import "./App.css";
import CardsWrapper from "./components/CardsContainer/CardsWrapper";
import {Header} from "./components/Header/Header";
import {mainWrapStyle, mainPageStyle} from "./styles/styles";

const App = () => {
  return (
      <section className="main-wrap" style={mainWrapStyle}>
       <div className="main-page" style={mainPageStyle}>
        <Header/>
        <CardsWrapper/>
       </div>
      </section>
  );
}

export default App;