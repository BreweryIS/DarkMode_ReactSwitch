import React, { useState } from "react";
import Content from "./components/Content";
import Title from "./components/Title";
import { createContext } from "react";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Title />
      <Content />
    </ThemeContext.Provider>
  );
};

export default App;
