import style from "./title.module.scss";

/** GUI Компонент. Заголовок. Нужен для отображения текста, но принимает компонент. * - обязательные параметры:  
• `children`* - заголовок  
• `noIndent` - убрать отступ первой строки (убрать красную строку)  
• `centerText` - центрировать текст  
• `styles` - дополнительный объект стилей, например styles={{backgroundColor: "red"}} */

function Title({ children, noIndent = false, centerText = false, styles, ...props }) {
    let h3Classes = noIndent ? style.h3 + " " + style.noIndent : style.h3; // Добавляем классы для отступа
    h3Classes += centerText ? " " + style.centerText : ""; // Класс для центрирования текста

    return (
        <h3 className={h3Classes} style={styles} {...props}>
            {children}
        </h3>
    );
}

export default Title;
