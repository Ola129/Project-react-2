const ErrorMessage = ({ message }) => {
  if (message) {
    return (
      <p>Wystąpił błąd podczas pobierania danych. Spróbuj ponownie później.</p>
    );
  } else {
    return null;
  }
};
export default ErrorMessage;
