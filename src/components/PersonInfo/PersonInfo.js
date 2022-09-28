import { useMemo, useEffect } from "react";
import CurrentPerson from "../CurrentPerson/CurrentPerson";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { usePeopleInfo } from "../../provider/PeopleProvider";
import "../style.css";

function PersonInfo() {
  const { username } = useParams();
  let navigate = useNavigate();
  const { data } = usePeopleInfo();

  let currentPerson = useMemo(
    () => data && data.find((item) => item.login.username === username),
    [data, username]
  );

  useEffect(() => {
    if (currentPerson === undefined) {
      navigate("/error");
    }
  }, [currentPerson, navigate]);

  return currentPerson && <CurrentPerson item={currentPerson} />;
}

export default PersonInfo;
