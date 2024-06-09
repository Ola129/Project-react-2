import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPoundSign,
  faDollarSign,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import "./Header";

const Header = () => {
  return (
    <header className="title">
      <FontAwesomeIcon icon={faPoundSign} size="2x" />
      <FontAwesomeIcon icon={faDollarSign} size="6x" />
      <FontAwesomeIcon icon={faEuroSign} size="2x" />
      <h1 className="appName">Przelicznik Walut</h1>
    </header>
  );
};

export default Header;
