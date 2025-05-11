import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (theme === "system") {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
    if (typeof window !== "undefined") {
      setIsDark(theme === "dark");
    }
  }, [theme]);
  return (
    <button
      className="button-icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunDim></SunDim> : <Moon></Moon>}
    </button>
  );
};
export default ThemeChanger;
