import React, { useState } from "react";
import { Blogs, Details, Menu } from "../../components";
import "./HomeScreen.scss";

const HomeScreen = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    console.log("changeTheme");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="homescreenWrapper">
      <Menu theme={theme} changeTheme={changeTheme} />
      <Blogs theme={theme} />
      <Details theme={theme} />
    </div>
  );
};

export default React.memo(HomeScreen);
