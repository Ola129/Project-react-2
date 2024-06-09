import "./styles/App.css";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div id="root">
      <Header />
      <CurrencyConverter />
    </div>
  );
};

export default App;
