import style from "./footer.module.scss";

function Footer({ ...props }) {
    return (
        <footer className={style.footer} {...props}>
            Some text
        </footer>
    );
}

export default Footer;
