import { useCallback, useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      if (cur === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        return "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        return "light";
      }
    });
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
      document.documentElement.classList.add(theme);
    }
  }, []);

  return { theme, toggleTheme };
};
