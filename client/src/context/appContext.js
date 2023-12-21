import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

import {
  BsCalendar3,
  BsCarFrontFill,
  BsCashCoin,
  BsFillHeartPulseFill,
  BsHouse,
  BsListCheck,
  BsPerson,
} from "react-icons/bs";

const initialState = {
  menuData: [
    {
      title: "Home",
      url: "#",
      cName: "nav-links active",
      icon: <BsHouse />,
    },
    {
      title: "Car",
      url: "#",
      cName: "nav-links",
      icon: <BsCarFrontFill />,
    },
    {
      title: "Finance",
      url: "#",
      cName: "nav-links",
      icon: <BsCashCoin />,
    },
    {
      title: "Health",
      url: "#",
      cName: "nav-links",
      icon: <BsFillHeartPulseFill />,
    },
    {
      title: "Calendar",
      url: "#",
      cName: "nav-links",
      icon: <BsCalendar3 />,
    },
    {
      title: "Tasks",
      url: "#",
      cName: "nav-links",
      icon: <BsListCheck />,
    },
    {
      title: "Profile",
      url: "#",
      cName: "nav-links",
      icon: <BsPerson />,
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
