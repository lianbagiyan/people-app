import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function PersonCard({ item }) {
  let navigate = useNavigate();

  const handleClick = useCallback(
    (username) => {
      navigate(`/${username}`);
    },
    [navigate]
  );

  return (
    <div
      className="person-block"
      key={item.id.value}
      onClick={() => handleClick(item.login.username)}
    >
      <div>
        <div className="title-info">
          <div>
            <img alt="" src={item.picture.medium} />
          </div>
          <span className="text-info">
            {item.name.title} {item.name.first} <br /> {item.name.last}
          </span>
        </div>
      </div>
      <div>
        <ul>
          <li className="list-line">
            <label className="list-title">Age:</label>
            {item.dob.age}
          </li>
          <li className="list-line">
            <label className="list-title">Location:</label>
            {item.location.city}, {item.location.country}
          </li>
          <li className="list-line">
            <label className="list-title">Email:</label>
            {item.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonCard;
