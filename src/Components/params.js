/* Константы */

/* Кнопки навигационного меню. Если присутствует поле content, то создастся выпадающий список. 
Вложенные выпадающие списки создавать можно, но не рекомендуется */
export const NAV_BUTTONS_LIST = [
    {
        name: "О нас",
        content: [
            { name: "О предприятии", url: "/about" },
            { name: "Годовая отчетность", url: "/report" },
            { name: "Борьба с коррупцией", url: "/fight-against-corruption" },
            { name: "Новости", url: "/news" },
        ]
    },
    {
        name: "Карты",
        content: [
            { name: "Карты маршрутов", url: "/maps" },
            { name: "Расписание движения", url: "http://www.patp2-nv.ru/monitoring/" },
        ]
    },
    {
        name: "Для граждан",
        content: [
            { name: "Умный транспорт", url: "https://bus62.ru/nizhnevartovsk/" },
            { name: "Услуги", url: "/services" },
            { name: "Информация", url: "/info" },
            { name: "COVID-19", url: "/covid-19" },
        ]
    },
    { name: "ОТН", url: "/otn" },
    { name: "Технический осмотр", url: "/technical-inspection" },
    {
        name: "Другое",
        content: [
            { name: "Умный транспорт", url: "https://bus62.ru/nizhnevartovsk/" },
            { name: "Фото архив", url: "/about" },
        ]
    }
];

/* Константа, определяющая время анимации в мс (изменять только вместе с переменной $transition в стилях params.scss, 
иначе появится рассинхронизация в анимациях) */
export const TRANSITION_DURATION = 500;

// Медиа в пикселях, должна быть равна одноименной переменной в scss стилях
export const Max_Media_Px = 1000;

/* Соответствия между типами файлов и иконкой, которая будет отображаться для этого типа. Если тип не задан, установится
иконка по умолчанию (unknown.svg). Директория всех иконок: /svg/doctypes/ */
export const FILE_TYPES_TO_ICON = [
    { types: ["ai"], icon: "ai.svg" },
    { types: ["wma", "wav", "ogg", "flac"], icon: "audio.svg" },
    { types: ["avi"], icon: "avi.svg" },
    { types: ["bmp"], icon: "bmp.svg" },
    { types: ["css"], icon: "css.svg" },
    { types: ["csv"], icon: "csv.svg" },
    { types: ["dat"], icon: "dat.svg" },
    { types: ["dll"], icon: "dll.svg" },
    { types: ["doc"], icon: "doc.svg" },
    { types: ["docx"], icon: "docx.svg" },
    { types: ["eps"], icon: "eps.svg" },
    { types: ["exe"], icon: "exe.svg" },
    { types: ["fla"], icon: "fla.svg" },
    { types: ["gif"], icon: "gif.svg" },
    { types: ["html"], icon: "html.svg" },
    { types: ["jpeg", "webp", "raw", "tiff", "cdr", "jfif"], icon: "image.svg" },
    { types: ["iso"], icon: "iso.svg" },
    { types: ["jpg"], icon: "jpg.svg" },
    { types: ["js"], icon: "js.svg" },
    //{types: ["link"], icon: "link.svg"},
    { types: ["mov"], icon: "mov.svg" },
    { types: ["mp3"], icon: "mp3.svg" },
    { types: ["mp4"], icon: "mp4.svg" },
    { types: ["pdf"], icon: "pdf.svg" },
    { types: ["pgs"], icon: "pgs.svg" },
    { types: ["php"], icon: "php.svg" },
    { types: ["png"], icon: "png.svg" },
    { types: ["ppt"], icon: "ppt.svg" },
    { types: ["psd"], icon: "psd.svg" },
    { types: ["rtf"], icon: "rtf.svg" },
    { types: ["sql"], icon: "sql.svg" },
    { types: ["tif"], icon: "tif.svg" },
    { types: ["txt"], icon: "txt.svg" },
    { types: ["mkv", "wmw", "3gp", "flv", "mpeg"], icon: "video.svg" },
    { types: ["vis"], icon: "vis.svg" },
    { types: ["xls"], icon: "xls.svg" },
    { types: ["xlsx"], icon: "xlsx.svg" },
    { types: ["xml"], icon: "xml.svg" },
    { types: ["zip"], icon: "zip.svg" },
];