
const CurrencyForm = ({
  currencies,
  amount,
  setAmount,
  currency,
  setCurrency,
  handleConvert,
  handleReset,
  result,
}) => {
  return (
    <form onSubmit={handleConvert}>
      <div>
        <label className="label">Kwota</label>
        <input
          className="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <select
          className="currencySelect"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
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
