import style from "./list.module.scss";

/** GUI Компонент. Элемент списка. * - обязательные параметры:
• `children`* - контент элемента списка. 
• `marker` - тип маркера элемента списка (decimal: нумерованный, disc, (lower/upper)-latin -greek -roman) 
• `noVerticalMargin` - убрать вертикальные внешние отступы */

function ListItem({ children, marker, noVerticalMargin = false }) {
    const styles = {
        listStyleType: marker
    }

    if (noVerticalMargin) {
        styles.marginTop = 0;
        styles.marginBottom = 0;
    }

    return (
        <li className={style.item} style={styles}>
            {children}
        </li>
    );
}

export default ListItem;
