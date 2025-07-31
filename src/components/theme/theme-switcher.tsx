import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch Theme
      </button>
    </div>
  );
};
