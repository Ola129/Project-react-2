import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  if (message) {
    return <p className="error-message">{message}</p>;
  } else {
    return null;
  }
};
export default ErrorMessage;
