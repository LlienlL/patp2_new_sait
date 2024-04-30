'use client'

import { useState, useContext } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { ThemeContext } from "@/Components/Theme";
import { usePathname } from "next/navigation";

/* GUI Компонент. Кнопка для меню навигации */
export default function NavMenuButton({ button, linkClick }) {
    const pathname = usePathname()

    const { theme } = useContext(ThemeContext);
    const [ulClasses, setUlClasses] = useState(""); // Состояние классов (стиля) для выпадающего списка

    function handlerMouseEnter() { // Обработчик наведения мыши на компонент
        setUlClasses(style.toActive);
    }

    function handlerMouseLeave() { // Обработчик отвода мыши с компонента
        setUlClasses("");
    }

    
    if (!button.content) return (
        <li className={style.li + " " + theme}>
            <Link
                href={button.url || "/"}
                className={pathname === button.url ? style.a + " " + style.active + " " + theme : style.a + " " + theme}
                onClick={linkClick}
            >
                {button.name}
            </Link>
        </li>
    )
    else return (
        <li className={style.wrapLi + " " + theme} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
            {button.name}
            <ul className={ulClasses + " " + theme}>
                {button.content.map(btn =>
                    <NavMenuButton
                        key={btn.name}
                        button={btn}
                        linkClick={linkClick}
                    />
                )}
            </ul>
        </li>
    );
}

//export default NavMenuButton;
