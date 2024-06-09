import React, { useState } from "react";
import CurrencyForm from "../CurrencyForm/CurrencyForm";
import Loader from "../Loader/Loader";
import "./CurrencyConverter.css";

const CurrencyContainer = () => {
  const currencies = ["EUR", "USD", "CHF"];
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchRate = async (currency) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`
      );
      const data = await response.json();
      const rate = data.rates[0]?.mid;
      if (rate) {
        const result = amount * rate;
        setResult(`Wynik: ${result.toFixed(2)} PLN`);
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych", error);
    }
    setIsLoading(false);
  };

  const handleConvert = (event) => {
    event.preventDefault();
    if (isNaN(amount) || amount <= 0) {
      alert("Wprowadź poprawną liczbę");
      return;
    }
    fetchRate(currency);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setAmount("");
    setCurrency(currencies[0]);
    setResult("");
  };

  return (
    <div>
      <header className="title"></header>
      <CurrencyForm
        currencies={currencies}
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        handleConvert={handleConvert}
        handleReset={handleReset}
        result={result}
      />
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default CurrencyContainer;
