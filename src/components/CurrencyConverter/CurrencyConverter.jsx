import React, { useState } from "react";
import CurrencyForm from "../CurrencyForm/CurrencyForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Header from "../Header/Header";

const CurrencyConverter = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="currencyContainer">
      <Header />
      <ErrorMessage message={error} />
      <CurrencyForm
        setResult={setResult}
        setError={setError}
        result={result}
      />
    </div>
  );
};

export default CurrencyConverter;
