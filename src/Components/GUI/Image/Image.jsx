'use client'

import { useContext, useRef } from "react";
import style from "./image.module.scss";
import articleStyle from "../Article/article.module.scss";
import { ThemeContext } from "@/Components/Theme.jsx";
//import NextImage from "next/image"; !!!!!!!!!!!!!!!!!!!

/** GUI Компонент. Визуальный контейнер для файла. * - обязательные параметры:  
• `*src` - public путь до картинки.  
• `alt` - альтернативный текст при не загрузке картинки.  
• `width` - ширина картинки (по умолчанию auto)  
• `height` - высота картинки (по умолчанию auto)  
• `inlineDisplay` - линейный дисплей  
• `setBorder` - отобразить рамку  */

function Image({ src, alt = "Изображение", width = "auto", height = "auto",
    inlineDisplay = false, setBorder = false, ...props }) {
    const { theme } = useContext(ThemeContext);
    const imageClasses = [style.div, theme];
    if (inlineDisplay) imageClasses.push(style.inline);
    if (setBorder) imageClasses.push(style.setBorder);

    const imgRef = useRef(null)
    function articleHeightUpdate() {
        const contentDiv = imgRef.current.closest("." + articleStyle.contentBlock);
        if (parseInt(contentDiv?.style?.maxHeight) > 0 || contentDiv?.style?.maxHeight === "none") {
            contentDiv.style.maxHeight = parseInt(contentDiv.style.maxHeight) + imgRef.current.height + "px";
        }
    }

    return (
        <div className={imageClasses.join(" ")} style={{ maxWidth: width, maxHeight: height }} {...props}>
            <img className={style.img} src={src} alt={alt} onLoad={articleHeightUpdate} ref={imgRef} loading="lazy" />
        </div>
    );
}

export default Image;
