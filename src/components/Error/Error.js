import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function Error() {
  let navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="error-container">
      <span className="error-text">Oops! That username was not found.</span>
      <button onClick={handleClick} className="error-btn">
        Go Back
      </button>
    </div>
  );
}

export default Error;
