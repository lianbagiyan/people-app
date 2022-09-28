import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PeopleProvider } from "./provider/PeopleProvider";
import People from "./components/People/People";
import PersonInfo from "./components/PersonInfo/PersonInfo";
import Error from "./components/Error/Error";

function App() {
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=10&page=1")
      .then((response) => response.json())
      .then((res) => {
        setData(res.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PeopleProvider value={{ data }}>
      <Router>
        <Routes>
          <Route path="/" exact element={<People />} />
          <Route path="/:username" exact element={<PersonInfo />} />
          <Route path="/error" exact element={<Error />} />
        </Routes>
      </Router>
    </PeopleProvider>
  );
}

export default App;
