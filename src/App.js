import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";


export const applicationContext = createContext();

const App = () => {


  const [sidebarClass, setSidebarClass] = useState("");
  const [theme, setTheme] = useState("dark");

  const toggleSideBar = (toggleVal) => {
    setSidebarClass((toggleVal === "open") ? "toggle-open" : null);
  }

  const changeTheme = (theme) => {
    setTheme(theme);
  }

  return (
    <applicationContext.Provider  value={theme}>
      <div className={`text-white app-wrapper ${theme==="dark"?"dark-theme":"light-theme"}`}>
        <Header sideBarToggleHandler={toggleSideBar}></Header>
        <div className="flex pt-12">
          <div className={`${sidebarClass} sidebar hidden w-48 md:w-50 lg:w-50 md:block lg:block border-right`}>
            <Sidebar onThemeChange={changeTheme}></Sidebar>
          </div>
          <div className="flex-auto">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
        <footer></footer>
      </div>
    </applicationContext.Provider>
  );
};

export default App;
