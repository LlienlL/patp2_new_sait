import { useContext } from "react";
import { ThemeContext } from "@/Components/Theme";
import MoonSvg from "@/Components/svg/moon.svg";
import SunSvg from "@/Components//svg/sun.svg";
import style from "./theme.module.scss";

/** GUI Компонент. Переключатель цветовой темы. . * - обязательные параметры:  
• `setTheme` - функция уставноки темы, принимается от главного компонента приложения  */

function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    function handlerClick() {
        setTheme(theme => {
            const newTheme = theme === "light" ? "dark" : "light";
            document.cookie = encodeURIComponent("theme") + "=" + encodeURIComponent(newTheme) +
                "; path=/; samesite=strict; max-age=604800";
            return newTheme
        })
    }

    return (
        <button className={style.themeButton + " " + theme} onClick={handlerClick}>
            <div className={style.check}>
                {theme === "dark" ?
                    <MoonSvg className={style.svg + " " + style.svgMoon} /> :
                    <SunSvg className={style.svg + " " + style.svgSun} />}
            </div>
        </button>
    );
}

export default ThemeButton;
