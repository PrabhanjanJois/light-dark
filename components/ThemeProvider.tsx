//import (lightColors, darkColors) from './colors';
import { useColorScheme } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import { lightColors, darkColors } from "./colors";

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});
export const ThemeProivder = (props: any) => {
  const colorscheme = useColorScheme(); // colorScheme => 'dark', 'light',"null"
  const [isDark, setIsDark] = useState(colorscheme == "dark");
  useEffect(() => {
    setIsDark(colorscheme == "dark");
  }, [colorscheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: any) => setIsDark(scheme === "dark"),
  };
  return (
    //@ts-ignore
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
