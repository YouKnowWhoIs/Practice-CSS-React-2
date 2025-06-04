import { useEffect, useState } from "react";
import "../../style/theme/theme.css";

function Theme() {
  const [isDarkTheme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "true";
  });

  const handleToggleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
    if (isDarkTheme === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [isDarkTheme]);

  return (
    <div className="conteinerTheme">
      <p>{isDarkTheme ? "Світла тема:" : "Темна тема:"}</p>
      <input
        checked={!isDarkTheme}
        type="checkbox"
        onChange={handleToggleTheme}
        className="themeToggle"
      />
    </div>
  );
}

export default Theme;
