import { createContext, useContext } from "react";

export const PeopleContext = createContext({ data: null });

export const PeopleProvider = (props) => {
  return (
    <PeopleContext.Provider value={props.value}>
      {props.children}
    </PeopleContext.Provider>
  );
};

export const usePeopleInfo = () => {
  return useContext(PeopleContext);
};
