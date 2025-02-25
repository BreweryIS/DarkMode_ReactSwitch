import React, { useContext } from "react";
import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { ThemeContext } from "../App";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Dubyard Official</h1>
        <p>DarkMode Workshop</p>
      </div>
      <img src={theme === "dark" ? dark : light} alt="Logo" />
    </main>
  );
};

export default Content;
