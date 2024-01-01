import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

const initialState = {
  menuData: [
    {
      title: "Car",
      url: "/car",
      index: "link-1",
    },
    {
      title: "Finance",
      url: "/finance",
      index: "link-2",
    },
    {
      title: "Health",
      url: "/health",
      index: "link-3",
    },
    {
      title: "Calendar",
      url: "/calendar",
      index: "link-4",
    },
    {
      title: "Tasks",
      url: "/tasks",
      index: "link-5",
    },
    {
      title: "Profile",
      url: "/profile",
      index: "link-6",
    },
  ],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
