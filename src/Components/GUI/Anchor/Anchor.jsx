'use client'

import { useContext } from 'react';
import LinkSvg from "@/Components/svg/link.svg";
import style from "./anchor.module.scss";
import { ThemeContext } from '@/Components/Theme';
import Link from "next/link"

/** GUI Компонент. Ссылка. * - обязательные параметры:  
• `children`* - текст ссылки.  
• `href`* - URL ссылки  
• `setBorder` - показать визуальные границы  
• `setItalic` - текст курсивом  */

function Anchor({ children, href, setBorder = false, setItalic = false, ...props }) {
    const { theme } = useContext(ThemeContext);
    if (!href) return false;

    const anchorClasses = [style.anchor, theme];
    if (setBorder) anchorClasses.push(style.setBorder);
    if (setItalic) anchorClasses.push(style.setItalic);

    return (
        <Link href={href} className={anchorClasses.join(" ")} {...props}>
            <LinkSvg className={style.svg} />
            {children}
        </Link>
    );
}

export default Anchor;
