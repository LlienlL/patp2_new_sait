import React from 'react';
import style from "./list.module.scss";

/** GUI Компонент. Элемент списка. * - обязательные параметры:
• `children`* - контент элемента списка. 
• `marker` - тип маркера элемента списка (decimal: нумерованный, disc, (lower/upper)-latin -greek -roman) 
• `noVerticalMargin` - убрать вертикальные внешние отступы */

function ListItem({ children, marker, noVerticalMargin = false }) {
    const classNames = [
        noVerticalMargin ? style.noVerticalMargin : '',
        style.item
    ].join(' ');

    return (
        <li className={classNames} data-marker={marker} style={{ listStyleType: marker }}>
            {children}
        </li>
    );
}

export default ListItem;
