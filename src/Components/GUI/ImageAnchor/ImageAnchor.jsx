"use client"

import style from "./imageanchor.module.scss";
import Anchor from "../Anchor/Anchor";
import Image from "next/image";
import { useEffect, useRef } from "react";

/** GUI Компонент. Ссылка на картинку с предпросмотром при наведении. 
    Лучше импортировать с ssr: false, т.к. на сервере выдает предупреждение, но ошибки нет. * - обязательные параметры:  
• `*src` - public путь до картинки.  
• `*children` - текст ссылки.  
• `width` - ширина картинки  
• `height` - высота картинки  */

export default function ImageAnchor({ src, children, width, height, ...props }) {
    if (!src || !children) return false;

    const img = document.createElement("img");
    img.src = src;
    img.classList.add(style.img);
    if (width) img.width = width;
    if (height) img.height = height;
    document.body.appendChild(img);

    let activating;
    function onMouseEnter() {
        activating = setTimeout(() => {
            img.classList.add(style.active);
        }, 500);
    }
    function onMouseLeave() {
        clearTimeout(activating);
        img.classList.remove(style.active);
        img.classList.add(style.unactive);
    }
    
    function onMouseMove(e) {
        if (e.clientY - img.height > 10) {
            img.style.top = e.pageY - img.height - 5 + "px";
        } else if (e.clientY + img.height < window.innerHeight - 10) {
            img.style.top = e.pageY + 5 + "px";
        } else {
            img.style.top = e.pageY - e.clientY + 10 + "px";

            if (e.clientX + 30 + img.width < window.innerWidth) {
                img.style.left = e.pageX + 15 + "px";
            } else {
                img.style.left = e.pageX - img.width - 15 + "px";
            }
            return;
        }

        if (e.clientX + 25 + img.width < window.innerWidth) {
            img.style.left = e.pageX + 10 + "px";
        } else {
            img.style.left = e.pageX + 10 - (e.clientX + 25 + img.width - window.innerWidth) + "px";
        }
    }

    return (
        <Anchor href={src} target="_blank"
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove}>
            {children}
        </Anchor>
    );
}
