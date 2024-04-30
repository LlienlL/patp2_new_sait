'use client'

import { ThemeContext } from "@/Components/Theme";
import style from "./style.module.scss";
import { useContext } from "react";


/** GUI Компонент. Кнопка для развёртывания меню навигации */
function NavWrapButton({ children, setActive, isActive = false }) {
    const { theme } = useContext(ThemeContext);
    const classes = isActive ? style.wrapButton + " " + style.wrapButtonActive + " " + theme : style.wrapButton + " " + theme; // Классы кнопки

    return (
        <div className={classes} onClick={() => { setActive(isMenuActive => !isMenuActive) }}>
            {children}
        </div>
    );
}

export default NavWrapButton;
