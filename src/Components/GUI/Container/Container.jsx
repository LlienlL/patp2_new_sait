'use client'

import { useContext, useEffect, useRef } from "react";
import style from "./container.module.scss";
import { ThemeContext } from "@/Components/Theme";

/** GUI Компонент. Контейнер для компоновки дочерних элементов. * - обязательные параметры:  
• `children`* - дочерние элементы  
• `styles` - дополнительные стили для контейнера  
• `noBorder`- не отображать границы  
• `noPadding` - убрать внутренние отступы  
• `noMargin` - убрать внешние отступы  
• `centerChildren` - центрировать дочерние элементы  
• `noScrollContent` - убрать появление скроллбара  */

function Container({ children, styles, noBorder = false, noPadding = false,
    noMargin = false, centerChildren = false, noScrollContent = false, ...props }) {
    const { theme } = useContext(ThemeContext);

    const classes = [style.container, theme];
    if (noBorder) classes.push(style.noBorder);
    if (noPadding) classes.push(style.noPadding);
    if (noMargin) classes.push(style.noMargin);
    if (centerChildren) classes.push(style.centerChildren);
    if (noScrollContent) classes.push(style.noScrollContent);

    const containerRef = useRef(null);
    useEffect(() => {
        function containerResize() { // Функция изменения центрирования при ресайзе и включенном скролле
            if (containerRef.current.scrollWidth > containerRef.current.clientWidth) {
                containerRef.current.classList.add(style.noCentering);
            } else {
                containerRef.current.classList.remove(style.noCentering);
            }
        }

        if (!noScrollContent) {
            if (containerRef.current.scrollWidth > containerRef.current.clientWidth) {
                containerRef.current.classList.add(style.noCentering);
            } else {
                containerRef.current.classList.remove(style.noCentering);
            }

            window.addEventListener("resize", containerResize);
        }

        return () => {
            if (!noScrollContent) {
                window.removeEventListener("resize", containerResize);
            }
        }
    }, [noScrollContent]);

    return (
        <div className={classes.join(" ")} style={styles} ref={containerRef} {...props}>
            {children}
        </div>
    );
}

export default Container;
