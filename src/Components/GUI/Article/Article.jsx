'use client'

import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../Theme';
import style from "./article.module.scss";

/** GUI Компонент. Визуальный контейнер для статьи. * - обязательные параметры:  
• `title`* - заголовок статьи.  
• `children`* - дочерние компоненты статьи (весь контент, что будет в статье)  
• `hiddenAll` - скрывать все содержимое тела изначально  
• `hiddenWrapButton` - убрать кнопку сворачивания контента  
• `usePartialContent` - использовать частичное отображение контента  
• `hideContent` - изначально скрыть необходимую часть контента, при `usePartial = true`  
• `maxSquare` - максимальная площадь показываемого конетнта в условных единицах (px^2), при `usePartial = true`  */

function Article({ title, children, hiddenAll = false, hiddenWrapButton = false,
    usePartialContent = true, hideContent = true, maxSquare = 1000000, ...props }) {
    const { theme } = useContext(ThemeContext);
    const articleClasses = style.article + " " + theme;

    const contentDivRef = useRef(null); // Ссылка на блок с контентом
    const [contentDivHeight, setContentDivHeight] = useState(hiddenAll ? "0px" : "none"); // Состояние блока контента
    const expandButtonClasses = contentDivHeight === "0px" ? style.expandButton + " " + style.active + " " + theme : style.expandButton + " " + theme;

    function handlerExpandButtonClick() {
        setContentDivHeight((contentDivHeight) => {
            if (contentDivHeight === "0px") {
                return getFullHeight(contentDivRef.current) + "px";
            }

            return "0px";
        });
    }

    //
    const contentRef = useRef(null); // Ссылка на контент
    const [contentHeight, setContentHeight] = useState(usePartialContent && hideContent ?
        (maxSquare / 1000) + "px" : "none"); // Состояние высоты контента  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 1000 = document.body.clientWidth

    const showContentButtonDivRef = useRef(null); // Ссылка на блок с кнопкой "Раскрыть"/"Скрыть"
    const [isNeedPartial, setNeedPartial] = useState(false);

    function handlerShowButtonClick() { // Клик на "Раскрыть"/"Скрыть"
        setContentHeight(contentHeight => {
            if (contentHeight === "none") {
                return (maxSquare / document.body.clientWidth) + "px";
            }
            return "none";
        });

        if (contentHeight === "none") { // Автоскролл вверх после нажатия "Скрыть"
            window.scrollBy(0,
                (maxSquare / document.body.clientWidth) - getFullHeight(contentRef.current) - showContentButtonDivRef.current.clientHeight);
        }
    }

    useEffect(() => { // Задание параметров после первого рендера:
        if (getFullHeight(contentRef.current) > (maxSquare / document.body.clientWidth)) {
            setNeedPartial(true);
        }

        // Обработка ресайза окна:
        function onResize() {
            if (usePartialContent && getFullHeight(contentRef.current) > (maxSquare / document.body.clientWidth)) {
                setNeedPartial(true);
                setContentHeight(contentHeight => {
                    if (contentHeight === "none") {
                        return "none";
                    }
                    return (maxSquare / document.body.clientWidth) + "px";
                });
            } else {
                setNeedPartial(false);
                setContentHeight("none");
            }
            if (contentDivRef.current.clientHeight > 0) setContentDivHeight(getFullHeight(contentDivRef.current) + "px");
        }
        onResize();

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, [maxSquare]);

    useEffect(() => {
        if (contentDivRef.current.clientHeight > 0) setContentDivHeight(getFullHeight(contentDivRef.current) + "px");
    }, [contentHeight, isNeedPartial]);

    return (
        <article className={articleClasses} {...props}>
            <h2 className={style.title}>
                {title}
                {!hiddenWrapButton &&
                    <button className={expandButtonClasses} onClick={handlerExpandButtonClick}></button>
                }
            </h2>

            <div className={style.contentBlock} ref={contentDivRef} style={{ maxHeight: contentDivHeight }}>
                <div className={isNeedPartial ? style.content + " " + style.active : style.content} ref={contentRef} style={{ maxHeight: contentHeight }}>
                    {children}
                </div>

                {usePartialContent && isNeedPartial &&
                    <div className={contentHeight === "none" ? style.setBcg + " " + theme : style.showContentButtonDiv + " " + theme} ref={showContentButtonDivRef}>
                        <button className={contentHeight === "none" ? style.showContentButton + " " + style.active + " " + theme : style.showContentButton + " " + theme}
                            onClick={handlerShowButtonClick}>
                            {contentHeight === "none" ? "Скрыть" : "Раскрыть"}
                        </button>
                    </div>
                }
            </div>

        </article>
    );
}

function getFullHeight(el) {
    return Math.max(el.scrollHeight, el.offsetHeight, el.clientHeight);
}

export default Article;
