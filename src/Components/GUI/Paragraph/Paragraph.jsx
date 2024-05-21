import React from 'react';
import style from "./paragraph.module.scss";

/** GUI Компонент. Параграф. Нужен для отображения текста, но может принимать компоненты. * - обязательные параметры:  
• `children`* - контент параграфа (любой компонент или текст)  
• `noIndent` - убрать отступ первой строки (убрать красную строку)  
• `inline` - установить линейный дисплей  
• `centerText` - центрировать текст  
• `styles` - дополнительный объект стилей, например styles={{backgroundColor: "red"}}  */

function Paragraph({ children, noIndent = false, inline = false, centerText = false, styles, ...props }) {
    let pClasses = noIndent ? style.p + " " + style.noIndent : style.p; // Добавляем классы для отступа
    pClasses += inline ? " " + style.inline : ""; // Класс для линейного дисплея
    pClasses += centerText ? " " + style.centerText : ""; // Класс для центрирования текста

    return (
        <p className={pClasses} style={styles} {...props}>
            {children}
        </p>
    );
}

export default Paragraph;
