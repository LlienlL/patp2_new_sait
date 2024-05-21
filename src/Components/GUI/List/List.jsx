import React from 'react';
import ListItem from "./ListItem";
import style from "./list.module.scss";

/** GUI Компонент. Список элементов. * - обязательные параметры:  
• `list`* - массив компонентов.  
• `marker` - тип маркера элемента списка (decimal: нумерованный, disc, (lower/upper)-latin -greek -roman).  
• `title` - заголовок для списка (необходим для вложенных списков)  
• `noVerticalMargin` - убрать вертикальные внешние отступы  */

function List({ list, marker, title, noVerticalMargin = false, ...props }) {
    return (
        <>
            {title && title}

            <ul className={style.list} {...props}>
                {Array.isArray(list) && list.map((item, index) =>
                    <ListItem key={index} marker={marker} title={title} noVerticalMargin={noVerticalMargin}>
                        {item}
                    </ListItem>
                )}
            </ul>
        </>
    );
}

export default List;
