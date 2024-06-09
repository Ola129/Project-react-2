import React from "react";
import CurrencyContainer from "./components/CurrencyConverter/CurrencyConverter";
import "./styles/App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div id="root">
      <Header />
      <CurrencyContainer />
    </div>
  );
};

export default App;
