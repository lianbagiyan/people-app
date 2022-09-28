import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function SuggestedList({ src, userId }) {
  let navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/${userId}`);
  }, [navigate, userId]);

  return <img src={src} alt="" onClick={handleClick} />;
}

export default SuggestedList;
