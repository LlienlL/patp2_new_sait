"use client"

import style from "./video.module.scss";
import articleStyle from "../Article/article.module.scss";
import { useContext, useRef } from "react";
import { ThemeContext } from "@/Components/Theme";
/** GUI Компонент. Видео. * - обязательные параметры:  
• `src`* - источник видео   
• `styles` - стили блока  
• `inline` - линейный дисплей  
• `noMargin` - убрать отступы снаружи  
• `noPadding` - убрать отступы снутри  
• `noBorder` - убрать видимую рамку  */

export default function Video({ src, styles, inline = false, noMargin = false, noPadding = false, 
    noBorder = false, captionOver, captionUnder, ...props }) {
    if (!src) return false;

    const { theme } = useContext(ThemeContext);
    const blockClassses = [style.block, theme]
    if (inline) blockClassses.push(style.inline);
    if (noMargin) blockClassses.push(style.noMargin);
    if (noPadding) blockClassses.push(style.noPadding);
    if (noBorder) blockClassses.push(style.noBorder);

    const videoRef = useRef(null)
    function articleHeightUpdate() {
        const contentDiv = videoRef.current.closest("." + articleStyle.contentBlock);
        if (parseInt(contentDiv?.style?.maxHeight) > 0 || contentDiv?.style?.maxHeight === "none") {
            contentDiv.style.maxHeight = parseInt(contentDiv.style.maxHeight) 
            + videoRef.current.closest("." + style.block).offsetHeight + "px";
        }
    }

    return (
        <div className={blockClassses.join(" ")} style={styles} {...props}>
            {captionOver && <p className={style.captionOver}>{captionOver}</p>}

            <video controls disablePictureInPicture preload="metadata"
                className={style.video} onLoadedMetadata={articleHeightUpdate} ref={videoRef}>
                <source src={src} codecs="vp8, vorbis" />

                <a href={src}>Скачайте видео</a> для просмотра
            </video>

            {captionUnder && <p className={style.captionUnder}>{captionUnder}</p>}
        </div>
    );
}
