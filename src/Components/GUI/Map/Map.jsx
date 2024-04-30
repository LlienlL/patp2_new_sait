'use client'

import { useContext, useEffect, useRef } from "react";
import style from "./map.module.scss";
import { ThemeContext } from "@/Components/Theme";
import Image from "next/image";

/** GUI Компонент. Контейнер для карты. * - обязательные параметры:  
• `map`* - карта в виде изображения, принимается объект со следующими параметрами:
    `src`* - ссылка на изображение
    `alt`* - надпись вместо изображения, если оно не загрузилось
    `width`* - ширина изображения
    `height`* - высота изображения  
• `styles` - дополнительные стили для карты  
• `noBorder`- не отображать границы  */

function Map({ map = { src, alt: "Карта", width, height }, styles, noBorder = false, ...props }) {
    if (!map || !map.width || !map.height) return false; // Ничего не возвращаем, если не заданы обязательные параметры

    const { theme } = useContext(ThemeContext);
    const mapRef = useRef();

    const classes = [style.map, theme];
    if (noBorder) classes.push(style.noBorder);

    useEffect(() => {
        if (mapRef.current) { // Реализация "перетаскивания" карты (grab and drag)
            const map = mapRef.current;

            let isMouseDown = false;
            let startX, startY, scrollLeft, scrollTop;

            function mousedown(e) {
                isMouseDown = true;
                map.style.cursor = "grabbing";
                startX = e.pageX;
                startY = e.pageY;
                scrollLeft = map.scrollLeft;
                scrollTop = map.scrollTop;
            }

            function mouseup() {
                isMouseDown = false;
                map.style.cursor = "grab";
            }

            function mousemove(e) {
                if (!isMouseDown) return;
                e.preventDefault();

                map.scrollTo(scrollLeft + startX - e.pageX, scrollTop + startY - e.pageY);
            }

            map.addEventListener("mousedown", mousedown);
            map.addEventListener("mousemove", mousemove);
            map.addEventListener("mouseup", mouseup);
            map.addEventListener("mouseleave", mouseup)

            return () => {
                map.removeEventListener("mousedown", mousedown);
                map.removeEventListener("mousemove", mousemove);
                map.removeEventListener("mouseup", mouseup);
                map.removeEventListener("mouseleave", mouseup);
            }
        }
    }, []);

    return (
        <div className={classes.join(" ")} style={styles} ref={mapRef} {...props}>
            <Image
                src={map}
                alt={map.alt}
                width={map.width}
                height={map.height}
            />
        </div>
    );
}

export default Map;
