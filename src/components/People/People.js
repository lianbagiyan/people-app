import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import PersonCard from "../PersonCard/PersonCard";
import { usePeopleInfo } from "../../provider/PeopleProvider";
import "../style.css";

const postsPerPage = 3;

function People() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = usePeopleInfo();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container">
      <div className="people-list">
        {currentPosts &&
          currentPosts.map((item, index) => (
            <PersonCard item={item} index={index} key={index} />
          ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default People;
