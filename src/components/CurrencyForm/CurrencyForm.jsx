import React from "react";
import "./CurrencyForm.css";

const CurrencyForm = ({ setResult, setError, result }) => {
  const currencies = ["EUR", "USD", "CHF"];

  const fetchRate = async (amount, currency) => {
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
        setError(null);
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych", error);
      setError(
        `Wystąpił błąd podczas pobierania danych. Spróbuj ponownie później.`
      );
    }
  };

  const handleConvert = (event) => {
    event.preventDefault();
    const form = event.target;
    const amount = form.elements.amount.value;
    const currency = form.elements.currency.value;

    if (isNaN(amount) || amount <= 0) {
      alert("Wprowadź poprawną liczbę");
      return;
    }
    fetchRate(amount, currency);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setResult("");
  };

  return (
    <form onSubmit={handleConvert}>
      <div>
        <label className="label">Kwota</label>
        <input className="amount" type="number" step="0.01" name="amount" />
      </div>
      <div>
        <select className="currencySelect" name="currency">
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
      <label className="label">to</label>
      <button className="btn" type="submit">
        Przelicz
      </button>
      <div className="conversionResult">{result}</div>
      <button className="btn" onClick={handleReset}>
        Resetuj
      </button>
    </form>
  );
};

export default CurrencyForm;
