import React from "react";

import { dark } from "./dark";
import { light } from "./light";

export const ThemeContext = React.createContext({
  theme: "light",
  toggle: () => {},
});

export const useTheme = () => {
  const { theme, toggle } = React.useContext(ThemeContext);

  return { theme: theme === "light" ? light : dark, toggle, themeName: theme };
};

export const StyledThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  // eslint-disable-next-line
  const toggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  const values = React.useMemo(
    () => ({
      theme,
      toggle,
    }),
    // eslint-disable-next-line
    [toggle, theme]
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export * from "./common";
export * from "./dark";
export * from "./light";
