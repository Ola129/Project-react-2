import "./Loader.css";

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  } else {
    return null;
  }
};

export default Loader;
