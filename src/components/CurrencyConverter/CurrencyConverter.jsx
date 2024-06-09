import React, { useState } from "react";
import CurrencyForm from "../CurrencyForm/CurrencyForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const currencies = ["EUR", "USD", "CHF"];
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchRate = async (currency) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      const rate = data.rates[0]?.mid;
      if (rate) {
        const result = amount * rate;
        setResult(`Wynik: ${result.toFixed(2)} PLN`);
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych", error);
      setError(
        `Wystąpił błąd podczas pobierania danych. Spróbuj ponownie później.`
      );
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
      <ErrorMessage message={error} />
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

export default CurrencyConverter;
