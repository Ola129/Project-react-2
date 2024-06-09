import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  if (message) {
    return (
      <p className="error-message">
        Wystąpił błąd podczas pobierania danych. Spróbuj ponownie później.
      </p>
    );
  } else {
    return null;
  }
};
export default ErrorMessage;
