// useTheme.js
import { useState } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.style.setProperty(
      "--background-color",
      isDarkMode ? "#ffffff" : "#282c34"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      isDarkMode ? "#333333" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      isDarkMode ? "#61dafb" : "#20232a"
    );
    document.documentElement.style.setProperty(
      "--button-background",
      isDarkMode ? "#61dafb" : "#20232a"
    );
    document.documentElement.style.setProperty(
      "--button-text",
      isDarkMode ? "#ffffff" : "#ffffff"
    );
  };

  return { isDarkMode, toggleDarkMode };
};

export default useTheme;
