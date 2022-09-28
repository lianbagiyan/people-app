import SuggestedList from "../SuggestedList/SuggestedList";
import { useMemo } from "react";
import { useParams } from "react-router";
import { usePeopleInfo } from "../../provider/PeopleProvider";
import "../style.css";

function CurrentPerson({ item }) {
  const { username } = useParams();
  const { data } = usePeopleInfo();

  const suggestedList = useMemo(() => {
    let filteredList = data.filter((elem) => elem.login.username !== username);
    const suggestedUsers = [...filteredList].sort(() => 0.5 - Math.random());
    return suggestedUsers.splice(0, 3);
  }, [username, data]);

  return (
    <div className="current-person-container">
      <div className="person-info-title">
        <img alt="" src={item.picture.large} />
        <span className="person-text">
          {item.name.title} {item.name.first} {item.name.last}
        </span>
      </div>
      <div className="person-info-body">
        <div className="person-info-label">
          <span>Gender:</span>
          <span>Age:</span>
          <span>Email:</span>
          <span>Country:</span>
          <span>PostCode:</span>
          <span>Timezone:</span>
          <span>Phone:</span>
          <span>Registered-data:</span>
        </div>
        <div className="person-info-value">
          <span>{item.gender}</span>
          <span>{item.dob.age}</span>
          <span>{item.email}</span>
          <span>
            {item.location.city}, {item.location.country}
          </span>
          <span>{item.location.postcode}</span>
          <span>{item.location.timezone.description}</span>
          <span>{item.phone}</span>
          <span>{item.registered.date}</span>
        </div>
      </div>
      <div className="suggested-list-container">
        <span className="suggested-list-text">
          You can also view these profiles
        </span>
        <div className="images-container">
          {suggestedList.map((elem, index) => (
            <SuggestedList
              src={elem.picture.medium}
              userId={elem.login.username}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentPerson;
