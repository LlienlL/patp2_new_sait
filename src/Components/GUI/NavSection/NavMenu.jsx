'use client'

import style from "./style.module.scss";
import NavMenuButton from './NavMenuButton';
import ThemeButton from "../ThemeButton/ThemeButton";
import { ThemeContext } from "@/Components/Theme";
import { forwardRef, useContext } from "react";

/** GUI Компонент. Блок меню навигации */
const NavMenu = forwardRef(({ navButtonsList, linkClick }, nodeRef) => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav ref={nodeRef} className={style.nav + " " + theme}>
            <ul className={style.ul + " " + theme}>
                {navButtonsList.map(button =>
                    <NavMenuButton
                        key={button.name}
                        button={button}
                        linkClick={linkClick}
                    />
                )}
            </ul>
            <ThemeButton />
        </nav>
    );
});

export default NavMenu;
