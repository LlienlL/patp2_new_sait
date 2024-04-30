'use client'

import { useContext } from "react";
import style from "./table.module.scss";
import { ThemeContext } from "../../Theme";

/** GUI Компонент. Таблица. * - обязательные параметры:  
• `table` - двумерный массив элементов таблицы.  
• `head` - двумерный массив элементов заголовочных столбцов  
• `tiledBackground` - плитчатый фон  
• `noBorderedInner` - убрать рамки внутри таблицы  
• `caption` - подпись таблицы  
• `bottomCaption` - расположить подпись под таблицей  
• `colgroup` - общие стили для столбцов (например width: "100px")  */

function Table({ table, head, tiledBackground = false, noBorderedInner = false, caption,
    bottomCaption = false, colgroup, ...props }) {
    const { theme } = useContext(ThemeContext);
    let tableClasses = tiledBackground ? style.table + " " + style.tiledBackground + " " + theme : style.table + " " + theme;
    tableClasses += noBorderedInner ? "" : " " + style.borderedInner;

    return (
        <table className={tableClasses} {...props}>
            {caption &&
                <caption className={bottomCaption ? style.caption + " " + style.bottomCaption : style.caption}>{caption}</caption>
            }

            {Array.isArray(colgroup) &&
                colgroup.map((colStyles, i) => {
                    return <colgroup key={i} {...colStyles}></colgroup>;
                })
            }

            {Array.isArray(head) &&
                <thead>
                    {head.map((row, index) =>
                        <tr key={index}>
                            {Array.isArray(row) && row.map((cell, i) => {
                                let span = cell.span || null;
                                let content = cell.content || cell || "";
                                let style = cell.style || null;
                                return (
                                    <th key={i} {...span} style={style}>
                                        {content}
                                    </th>
                                );
                            })}
                        </tr>
                    )}
                </thead>
            }

            {Array.isArray(table) &&
                <tbody>
                    {table.map((row, index) =>
                        <tr key={index}>
                            {Array.isArray(row) && row.map((cell, i) => {
                                let span = cell.span || null;
                                let content = cell.content || cell || "";
                                let style = cell.style || null;
                                return (
                                    <td key={i} {...span} style={style}>
                                        {content}
                                    </td>
                                );
                            })}
                        </tr>
                    )}
                </tbody>
            }

        </table>
    );
}

export default Table;
