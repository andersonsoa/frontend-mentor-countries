import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../../hooks/useDarkMode";

export const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="dark:bg-gray-800 bg-gray-300">
      <div className="mx-auto px-3 py-5 flex items-center justify-between max-w-7xl">
        <h1 className="font-bold">Where in the World?</h1>

        <button onClick={toggleTheme} className="flex items-center gap-2 text-sm active:scale-90 transition ease-in-outw">
          {theme === "dark" ? (
            <>
              <MdLightMode /> Light Mode
            </>
          ) : (
            <>
              <MdDarkMode /> Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
};
