'use client'

import { useContext } from "react";
import DownloadFile from "@/Components/svg/downloadFile.svg";
import ViewFile from "@/Components/svg/viewFile.svg";
import { ThemeContext } from "@/Components/Theme";
import { FILE_TYPES_TO_ICON } from "@/Components/params.js";
import style from "./file.module.scss";

/** GUI Компонент. Визуальный контейнер для файла. * - обязательные параметры:  
• `name`* - отображаемое имя файла.  
• `path`* - url файла.  
• `browsed` - добавить ли кнопку просмотра документа в браузере.  
• `downloadable` - добавить ли кнопку скачивания файла в блок.  
• `icon` - иконка файла. Указывать, если надо строго задать конкретную иконку.  
• `hideIcon` - показывать ли иконку файла.  
• `notBlocky` - убрать визуальное выделение контейнера  
• `inTextFile` - лучше использовать, если файл-блок вставлен в параграф или текст  */

function File({ name, path, browsed = false, downloadable = false, icon, hideIcon = false, 
    notBlocky = false, inTextFile = false, ...props }) {
    const { theme } = useContext(ThemeContext);

    if (!name) return false;

    if (!icon) { // Если иконка не задана, вычисляем ее по функции
        icon = fileToIcon(name);
    }

    if (inTextFile) {
        return (
            <span className={style.fileBlock + " " + style.notBlockyFile + " " + theme} style={{ marginTop: 0, marginBottom: 0 }} {...props}>
                <a className={style.a + " " + theme} href={path} target="_blank" rel="noreferrer">
                    {!hideIcon && <img src={"/svg/doctypes/" + icon} alt="" />}
                    {name}
                </a>
            </span>
        );
    } else {
        return (
            <div className={notBlocky ? style.fileBlock + " " + style.notBlockyFile + " " + theme : style.fileBlock + " " + theme} {...props}>
                <a className={style.a + " " + theme} href={path} target="_blank" rel="noreferrer" title="Просмотреть файл">
                    {!hideIcon && <img src={"/svg/doctypes/" + icon} alt="" />}
                    {name}
                </a>
                {browsed && ( // Рендер кнопки просматривания
                    <a className={style.aSvg + " " + style.aSvgView + " " + theme} href={path} target="_blank" rel="noreferrer" title="Просмотреть файл">
                        <ViewFile className={style.svg + " " + style.svgView} />
                    </a>
                )}
                {downloadable && ( // Рендер кнопки скачивания
                    <a className={style.aSvg + " " + theme} href={path} download={path} title="Скачать файл">
                        <DownloadFile className={style.svg} />
                    </a>
                )}
            </div>
        );
    }
}

function fileToIcon(filename) { // Поиск иконки по расширению из названия файла
    let fileType = filename.slice(filename.lastIndexOf('.') + 1);

    for (let key of FILE_TYPES_TO_ICON) {
        for (let type of key.types) {
            if (fileType === type) {
                return key.icon;
            }
        }
    }

    return "unknown.svg";
}

export default File;
